import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// import { z, ZodTypeAny } from 'zod';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const IsSSR = () => typeof window === "undefined";

export const changePathLang = (
  pathname: string,
  oldLang: string,
  newLang: string,
) => `${pathname.replace(oldLang, newLang)}`;
