import { caveat, langs, logo, nav } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import MobileMenu from "./MobileMenu";
import Switch from "./Switch";

type Props = {
  dark: boolean;
  handleDark: (enabled: boolean) => void;
  handleSideBar?: (val?: boolean) => () => void;
  sideBar?: boolean;
};

const direction = (prev: number, curr: number) => (prev > curr ? -1 : 1); // -1 : up, 1: down
let prevDirection = 0;

export default function Header({
  dark,
  handleDark,
  // handleSideBar,
  // sideBar,
}: Props) {
  const { t, i18n } = useTranslation();
  const [hide, setHide] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    // uncomment this when you switch to a side bar instead of mobile Menu
    // if (sideBar) handleSideBar(false)();

    const currDir = direction(scrollY, window.scrollY);

    if (prevDirection !== currDir && currDir === -1) setHide(false);
    else if (prevDirection !== currDir && currDir === 1 && window.scrollY >= 50)
      setHide(true);

    if (window.scrollY >= 50) prevDirection = currDir;
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <header
      className={cn(`fixed flex self-center justify-between w-full
      md:w-11/12 lg:w-9/12 md:mt-2 h-[var(--header-h)] px-8 items-center
    ${
      hide
        ? "hidden"
        : scrollY < 50
        ? "dark:text-white"
        : "bg-black text-white bg-opacity-40 dark:bg-white dark:bg-opacity-50 dark:text-black md:rounded-full"
    }`)}
    >
      <span className="h-10 w-10 hidden md:flex justify-center items-center ">
        <Image src={logo} alt="" width={100} height={100} />
      </span>
      <span className="h-10 md:hidden w-10 flex justify-center items-center ">
        <MobileMenu handleHide={(hide: boolean) => setHide(hide)}>
          <i
            className={`${
              scrollY < 50 ? "dark:text-white" : "dark:text-black"
            }  fas fa-bars cursor-pointer text-xl`}
            // onClick={handleSideBar()}
          ></i>
        </MobileMenu>
      </span>
      <nav className="hidden md:block md:w-2/5">
        <ul
          className={
            caveat.className + " flex justify-between items-center text-xl"
          }
        >
          {Object.values(nav).map((el, i) => (
            <li key={i}>
              <Link onClick={() => {
                setTimeout(() => { setHide(false) }, 100)
              }}
              
              href={el.url}>{t(el.name)}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div id="langs" className="flex gap-4">
        <Switch dark={dark} handleDark={handleDark} className="" />
        <button
          className={`${
            scrollY < 50
              ? "bg-black text-white dark:text-black dark:bg-white"
              : "bg-white text-black  dark:text-white dark:bg-black"
          }
          text-xs border-2 py-1 px-3 rounded-2xl`}
          onClick={() =>
            i18n.changeLanguage(langs[i18n.resolvedLanguage!]?.switchToKey)
          }
        >
          {langs[i18n.resolvedLanguage!]?.switchTo}
        </button>
      </div>
    </header>
  );
}
