"use client";
import { Switch as OriginalSwitch } from "@headlessui/react";
import { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  handleDark: (enabled: boolean) => void;
  dark: boolean;
}
export default function Switch({ handleDark, dark }: Props) {
  return (
    <OriginalSwitch
      checked={dark}
      onChange={handleDark}
      className={`${dark ? "bg-slate-700" : "bg-slate-300"}
          relative inline-flex
          h-[28px] w-[50px]
          shrink-0 cursor-pointer
          rounded-full border-2 border-transparent
          transition-colors duration-200 ease-in-out
          focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75
        `}
    >
      {/* <span className="sr-only">Use setting</span> */}
      <span
        aria-hidden="true"
        className={`${dark ? "translate-x-6" : "translate-x-0"}
            pointer-events-none inline-block
            h-[24px] w-[24px]
            transform rounded-full dark:bg-white bg-black
            shadow-lg ring-0 transition duration-200 ease-in-out`}
      >
        <i className="fa fa-moon-o dark:text-black text-white"></i>
      </span>
    </OriginalSwitch>
  );
}
