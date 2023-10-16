"use client";
import About from "@/components/About";
import Header from "@/components/Header";
import Home from "@/components/Home";
import NoSSR from "@/components/NoSSR";
import Projects from "@/components/Projects";
import "@/lib/i18n/config";
import { useCallback, useEffect, useState } from "react";

export default function Index() {
  const [dark, setDark] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const handleSideBar =
    (val: boolean | undefined = undefined) =>
    () => setSideBar(val ?? !sideBar);

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
      <NoSSR>
        {/*
         uncomment this when you switch to a side bar instead of mobile Menu
         <Side sideBar={sideBar} handleSideBar={handleSideBar} /> */}
        <Header
          dark={dark}
          handleDark={handleDark}
        />
        <main className="flex flex-col min-h-screen justify-between bg-white dark:bg-black dark:text-white">
          <Home />
          <About />
          <Projects />
        </main>
      </NoSSR>
    </body>
  );
}
