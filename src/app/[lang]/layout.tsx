import "animate.css";

import "@/styles/globals.css";

import Header from "@/app/_shared/components/Header";
import { BASE_URL, categories } from "@/lib/constants";
import { languages } from "@/lib/i18n/settings";
import { Params } from "@/types";
import { dir } from "i18next";
import { Metadata, Viewport } from "next";
import React from "react";

export const viewport: Viewport = {
  themeColor: '#ffffff',

}

export function generateMetadata({
  params: { lang },
}: {
  params: Params
}): Metadata {

  return {
    title: "Med Ezzitouni",
    description: "Med Ezzitouni website, a portfolio where I present my projects, skills and blogs.",
    alternates: {
      canonical:  `${BASE_URL}/${lang}`,
      languages: {
        "x-default": BASE_URL,
        "en": `${BASE_URL}/en`,
        "fr": `${BASE_URL}/fr`,
        "ar": `${BASE_URL}/ar`
      }
    },
    category: categories[lang],
    manifest: '/site.webmanifest',
    icons: {
      icon: [
        {
          url: '/favicon.ico',
          rel: 'shortcut icon'
        },
        {
          url: '/favicon-32x32.png',
          type: "image/png",
          sizes: "32x32",
          rel: 'shortcut icon'
        },
        {
          url: '/favicon-16x16.png',
          type: "image/png",
          sizes: "16x16",
          rel: 'shortcut icon'
        },
        {
          url: '/apple-touch-icon.png',
          sizes: "180x180",
          rel: 'apple-touch-icon'
        },
        {
          url: '/safari-pinned-tab.svg',
          color: '#5bbad5',
          rel: 'mask-icon',
        },
        {
          url: '/mstile-150x150.png',
          rel: ''
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}

type Props = {
  children: React.ReactNode;
  params: Params
}
export default function RootLayout({
  children,
  params: { lang }
}: Props) {
  return (
    <html lang={lang} dir={dir(lang)} className="font-primary" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen items-center bg-black">
        {/* <ThemeProvider> */}
          <Header />
          {children}
          {/* <Footer /> */}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
