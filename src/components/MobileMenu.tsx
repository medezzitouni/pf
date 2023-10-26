import { nav } from "@/lib/constants";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  children: React.ReactElement;
  handleHide: (enable: boolean) => void;
};
export default function MobileMenu({ children, handleHide }: Props) {
  const { t } = useTranslation();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center  focus:outline-none">
          {children}
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
        <Menu.Items className={`
            left-0 mt-2 w-56 origin-top-left
            absolute bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80
            text-black dark:text-white
            divide-y divide-gray-100 dark:divide-gray-800
            ring-1 ring-black dark:ring-gray-800 ring-opacity-5 focus:outline-none
            rounded-md shadow-lg
        `}>
          {Object.values(nav).map((el, index) => (
            <div className="px-1 py-1" key={index}>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={el.url}
                    onClick={() => {
                      setTimeout(() => { handleHide(false) }, 100)
                    }}
                    className={`${
                      active ? "bg-black dark:bg-gray-300 bg-opacity-10 dark:bg-opacity-20 " : "text-gray-900 dark:text-gray-100"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {t(el.name)}
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
