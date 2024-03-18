import { nav } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n/client";
import { Params } from "@/types";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import path from "path";
type Props = {
  handleHide: (enable: boolean) => void;
};
export default function Nav({ handleHide }: Props) {
  const { lang }: Params = useParams();
  const { t } = useTranslation(lang);
  const pathname = usePathname();
  
  return (
    <nav className="hidden lg:block">
      <ul className={"flex gap-x-3 items-center text-sm font-mono uppercase font-semibold "}>
        {Object.values(nav).map((el, i) => (
          <li key={i} className={`px-4 text-center bg-blue-00`}>
            <Link
              className={`pb-1 ${pathname === path.resolve(`/${lang}${el.url}`) ? 'border-b-2 border-red-300' : ''}`}
              onClick={() => {
                setTimeout(() => {
                  handleHide(false);
                }, 100);
              }}
              href={`/${lang}${el.url}`}
            >
              {t(el.name)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
