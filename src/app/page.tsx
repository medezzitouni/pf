"use client";
import Switch from "@/components/Switch";
import { cn } from "@/lib/utils";
import { Caveat, Comfortaa, Indie_Flower } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});

const indie = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

const rubic = Comfortaa({
  weight: "600",
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
      md:w-4/5 pt-3 h-[var(--header-h)] px-8 items-center `)}
      >
        <span className="h-10 w-10 flex justify-center items-center">
          <Image src="/logo.png" alt="" width={100} height={100} />
        </span>
        <nav className="dark:text-white w-2/5 lg:w-1/5 hidden md:block">
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
            `h-screen bg-transparent pt-[var(--header-h)]
             flex flex-col-reverse md:flex-row items-center justify-end
          `
          )}
        >
          <div className="md:w-1/2 md:h-full flex justify-end items-center ">
            <div className="h-72 md:w-3/4 flex flex-col justify-center">
              <h1 className={`text-5xl ${indie.className} text-center`}>
                Hello I am Med Ezzitouni
              </h1>
              <h1 className={`text-xl ${indie.className} text-center`}>
                Software Engineer
              </h1>
              <div className="w-full flex justify-center h-32 items-center">
                <Link
                  className={`border-2 px-3 py-1 rounded-md flex items-center gap-3 ${rubic.className}
                  shadow-lg bg-black text-white dark:bg-white dark:text-black
                  text-lg`}
                  href={`/assets/Resume_Ezzitouni_Med.pdf`}
                  target="_blank"
                >
                  <i className="fa fa-file-pdf-o"></i>{" "}
                  <span className="">Resume</span>{" "}
                  <i className="fa fa-arrow-right animate__animated animate__wobble animate__infinite"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-2/3 md:w-1/2 mt-12 md:-mt-24 flex justify-center items-center">
            <div
              className="h-72 w-72 md:h-96 md:w-96 bg-cover bg-no-repeat rounded-[33%_67%_65%_35%/62%_55%_45%_38%]"
              style={{
                backgroundImage: "url('/assets/profile.jpg')",
              }}
            ></div>
          </div>
        </section>
        <section
          id="about"
          className={`bg-red-500 h-screen pt-[var(--header-h)] flex justify-center items-center`}
        >
          <span className={`${indie.className} text-xl`}>Coming Soon!</span>
        </section>
        <section
          id="projects"
          className={`bg-purple-500 h-screen pt-[var(--header-h)] flex justify-center items-center`}
        >
          <span className={`${indie.className} text-xl`}>Coming Soon!</span>
        </section>
      </main>
    </body>
  );
}
