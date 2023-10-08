"use client";
import Switch from "@/components/Switch";
import { cn } from "@/lib/utils";
import { Caveat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});

const nav = [
  {
    url: "#home",
    name: "Home",
  },
  {
    url: "#about",
    name: "About",
  },
  {
    url: "#projects",
    name: "Projects",
  },
];

const styleVars = {
  "--header-h": "24",
};
export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(
      localStorage.getItem("theme") === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, []);

  const handleDark = useCallback((enabled: boolean) => {
    setDark((prev) => !prev);
    localStorage.setItem("theme", enabled ? "dark" : "light");
  }, []);

  return (
    <body className={`${dark ? "dark" : ""} flex flex-col`}>
      <header
        className={cn(`fixed flex self-center justify-between w-full
      md:w-4/5 pt-3 h-${styleVars["--header-h"]} px-8 items-center`)}
      >
        <span className="h-10 w-10 flex justify-center items-center">
          <Image src="/logo.png" alt="" width={100} height={100} />
        </span>
        <nav className="dark:text-white w-1/5 hidden md:block">
          <ul
            className={
              caveat.className + " flex justify-between items-center text-xl"
            }
          >
            {nav.map((el, i) => (
              <li key={i}>
                <Link href={el.url}>{el.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Switch dark={dark} handleDark={handleDark} className="" />
      </header>
      <main className="flex flex-col min-h-screen justify-between bg-white dark:bg-black dark:text-white">
        <section
          id="home"
          className={cn(
            `h-screen bg-transparent pt-${styleVars["--header-h"]}
             flex items-center
          `
          )}
        >
          <div className="w-1/2">
            Hello I am Med Ezzitouni Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Temporibus hic libero nostrum maiores laudantium
            praesentium nesciunt sed doloremque ipsa ut modi, eius, amet
            corporis dolore voluptatibus earum laborum perferendis! Mollitia.
          </div>
          <div className="w-1/2 -mt-24 flex justify-center">
            <div
              className=" h-96 w-96 bg-cover bg-no-repeat"
              style={{
                backgroundImage: "url('/assets/profile.jpg')",
                borderRadius: "33% 67% 65% 35% / 62% 55% 45% 38% ",
              }}
            ></div>
          </div>
        </section>
        <section
          id="about"
          className={cn(`bg-red-500 h-screen pt-${styleVars["--header-h"]}`)}
        >
          about
        </section>
        <section
          id="projects"
          className={cn(`bg-purple-500 h-screen pt-${styleVars["--header-h"]}`)}
        >
          projects
        </section>
      </main>
    </body>
  );
}
