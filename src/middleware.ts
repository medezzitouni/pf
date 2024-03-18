import {
  I18N_COOKIE_EXPIRATION,
  cookieName,
  fallbackLng,
  languages,
} from "@/lib/i18n/settings";
import acceptLanguage from "accept-language";
import { NextRequest, NextResponse } from "next/server";

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lang*'
  matcher: [
    "/((?!api|_next/static|_next/image|assets|site.webmanifest|favicon.ico|sw.js|sitemap.xml|robots.txt).*)",
  ],
};

export function middleware(req: NextRequest) {
  let lang;
  if (req.cookies.has(cookieName))
    lang = acceptLanguage.get(req.cookies.get(cookieName)?.value);
  if (!lang) lang = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lang) lang = fallbackLng;

  // Redirect if lang in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lang}${req.nextUrl.pathname}`, req.url),
    );
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer") ?? "");
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`),
    );
    const response = NextResponse.next();
    if (lngInReferer)
      response.cookies.set(cookieName, lngInReferer, {
        path: "/",
        maxAge: I18N_COOKIE_EXPIRATION,
      });
    return response;
  }

  return NextResponse.next();
}
