import { caveat, logo } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Switch from "./Switch";

const nav = [
  {
    url: "#home",
    name: "home",
  },
  {
    url: "#about",
    name: "about",
  },
  {
    url: "#projects",
    name: "projects",
  },
];

type Props = {
  dark: boolean;
  handleDark: (enabled: boolean) => void;
};

const langs: Record<string, { nativeName: string; switchTo: string; switchToKey: string }> = {
  'en-US': {
    nativeName: "English",
    switchTo: "French",
    switchToKey: "fr-FR"
  },
  'fr-FR': {
    nativeName: "Français",
    switchTo: "Anglais",
    switchToKey: "en-US"
  },
};
export default function Header({ dark, handleDark }: Props) {
  const { t, i18n } = useTranslation();
  
  return (
    <header
      className={cn(`fixed flex self-center justify-between w-full
  md:w-4/5 pt-3 h-[var(--header-h)] px-8 items-center `)}
    >
      <span className="h-10 w-10 flex justify-center items-center ">
        <Image src={logo} alt="" width={100} height={100} />
      </span>
      <nav className="dark:text-white w-2/5 lg:w-1/5 hidden md:block">
        <ul
          className={
            caveat.className + " flex justify-between items-center text-xl"
          }
        >
          {nav.map((el, i) => (
            <li key={i}>
              <Link href={el.url}>{t(el.name)}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div id="langs" className="flex gap-4">
        <Switch dark={dark} handleDark={handleDark} className="" />
        <button className="bg-black text-white dark:text-black dark:bg-white text-sm border py-1 px-3 rounded-2xl"
          onClick={() => i18n.changeLanguage(langs[i18n.resolvedLanguage!]?.switchToKey)}
        >
          {langs[i18n.resolvedLanguage!]?.switchTo}
        </button>
      </div>
    </header>
  );
}
