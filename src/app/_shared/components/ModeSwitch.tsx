"use client";
import { Switch as OriginalSwitch } from "@headlessui/react";
import { MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ModeSwitch({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => { setMounted(true) }, [])
  if(!mounted)
    return <div className={`
    bg-slate-300 dark:bg-slate-700
      relative inline-flex
      h-[28px] w-[50px]
      shrink-0 cursor-pointer
      rounded-full border-1 border-transparent
      focus:outline-none focus-visible:ring-2
    focus-visible:ring-white focus-visible:ring-opacity-75
      ${className}
    `}>
      <div className="bg-slate-400 dark:bg-slate-500 absolute inset-1 rounded-full animate-pulse">

      </div>
    </div>
  return (
    <OriginalSwitch
      checked={resolvedTheme === "dark"}
      onChange={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={`
      bg-slate-300 dark:bg-slate-700
        relative inline-flex
        h-[28px] w-[50px]
        shrink-0 cursor-pointer
        rounded-full border-2 border-transparent
        transition-colors duration-200 ease-in-out
        focus:outline-none focus-visible:ring-2
      focus-visible:ring-white focus-visible:ring-opacity-75
        ${className}
      `}
    >
      <span
        aria-hidden="true"
        className={`
        translate-x-0 dark:translate-x-6
        pointer-events-none
        h-[24px] w-[24px]
        transform rounded-full dark:bg-white bg-black
        shadow-lg ring-0 transition duration-200 ease-in-out
        flex justify-center items-center
        `}
      >
        <MoonIcon className="dark:text-black text-white w-3 h-3" />
      </span>
    </OriginalSwitch>
  );
}
