"use client";
import About from "@/components/About";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import { useCallback, useEffect, useState } from "react";

export default function Index() {
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
      <Header dark={dark} handleDark={handleDark} />
      <main className="flex flex-col min-h-screen justify-between bg-white dark:bg-black dark:text-white">
        <Home />
        <About />
        <Projects />
      </main>
    </body>
  );
}
