'use client';

import useHideOnScroll from "@/app/_shared/hooks/useHideOnScroll";
import { langs, logo } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n/client";
import { changePathLang, cn } from "@/lib/utils";
import { Params } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";


export default function Header() {
  const { lang }: Params = useParams()
  const { i18n } = useTranslation(lang);
  const [scrollY, hide, setHide] = useHideOnScroll();
  const pathname = usePathname();

  // TODO: add a transition to the header coming from above when the user scolling up
  return (
    <div className={cn(
      "fixed z-10 w-full flex justify-center bg-white bg-opacity-80 text-black",
      hide && "hidden",
      )}>
      <header
      className={cn(
        "flex justify-between container max-w-6xl pt-3 h-[var(--header-h)] px-8 items-center bg-orange-"
        )
      }
    >
      <Image
        className="hidden lg:block"
        src={logo}
        alt="Med Logo"
        width={40}
        height={40}
      />
      <MobileMenu
        className="lg:hidden flex"
        handleHide={(hide: boolean) => setHide(hide)}
      />
      <Nav handleHide={(hide: boolean) => setHide(hide)} />
      <div className="grid grid-cols-2 gap-4">
        {/* <ModeSwitch className="col-span-2" /> */}
        {langs[i18n.resolvedLanguage!]?.switchTo.map(lg => (
          <Link key={lg.name}
            className={`text-sm border-b-2 border-black px-1 inline-block my-auto`}
            href={changePathLang(pathname, lang, lg.name.toLocaleLowerCase())}
          >
            <span>{lg.name}</span>
          </Link>
        ))}
      </div>
    </header>
    </div>
  );
}
