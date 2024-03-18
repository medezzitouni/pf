import { nav } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n/client";
import { cn } from "@/lib/utils";
import { Params } from "@/types";
import { Menu, Transition } from "@headlessui/react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import path from "path";
import { Fragment } from "react";

type Props = {
  handleHide: (enable: boolean) => void;
  className: string;
};

export default function MobileMenu({ handleHide, className = "" }: Props) {
  const { lang }: Params = useParams();
  const { t } = useTranslation(lang);
  const pathname = usePathname();
  
  return (
    <Menu as="div" className={cn("inline-block text-left", className)}>
      <div>
        <Menu.Button className="inline-flex w-full justify-center focus:outline-none">
          <Bars3BottomLeftIcon className={`cursor-pointer h-8 w-8 `} />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`
          absolute inset-x-0 top-16 bg-white dark:bg-black/95
          text-black dark:text-white
        `}
        >
          {Object.values(nav).map((el, index) => (
            <div className="px-1" key={index}>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={`/${lang}${el.url}`}
                    onClick={() => {
                      setTimeout(() => {
                        handleHide(false);
                      }, 100);
                    }}
                    className={cn(
                      "group flex justify-center items-center text-xl w-full h-full py-3 bg-red-",
                      active ? "bg-black dark:bg-gray-300 bg-opacity-10 dark:bg-opacity-20"
                      : "text-gray-900 dark:text-gray-100"
                    )}
                  >
                    <span className={cn("pb-1", pathname === path.resolve(`/${lang}${el.url}`) && 'border-b-2 border-red-300')}>
                      {t(el.name)}
                    </span>
                  </Link>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
