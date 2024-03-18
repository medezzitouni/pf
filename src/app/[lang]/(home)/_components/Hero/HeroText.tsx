import {
  en_resume_pdf,
  fr_resume_pdf,
  nav,
} from "@/lib/constants";
import {
  rubic
} from '@/lib/fonts';
import { useTranslation } from "@/lib/i18n/client";
import { Params } from "@/types";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useParams } from "next/navigation";
type Props = {
  className?: string;
};
function HeroText({ className }: Props) {
  
  const { lang }: Params = useParams();
  const { t, i18n } = useTranslation(lang);

  return (
    <div className={`${className} text-white `}>
        <div className="lg:text-center py-5 w-5/6 m-auto lg:w-fit flex flex-col lg:items-center gap-6 bg-blue-00">
          <h1
            className={`font-bold text-2xl uppercase lg:text-6xl font-primary lg:min-w-max bg-red-00 `}
          >
            <span className="mb-3 block font-outline-xs font-outline-indigo">{t("hero-title-1")}</span>
            <span className="text-indigo-400 font-outline-xs font-outline-white">{t("hero-title-2")}</span>
          </h1>
          <h2 className={`text-lg md:text-xl font-mono font-semibold max-w-[250px] md:max-w-none bg-red-00`}>
            {t("position")}
          </h2>
          <p
            className={`text-xs md:text-base font-mono max-w-[500px] bg-blue-00`}
          >
            {t("client_need")}
          </p>
        </div>

        <div className="text-lg font-sref font-outline-xs font-outline-white flex flex-col lg:flex-row justify-center items-center gap-4 py-4 bg-red-00">
          <Link
            className={`
              border border-white-700 w-5/6 lg:w-fit px-6 py-2 uppercase
              flex items-center justify-center gap-3 ${rubic.className}
              shadow-sm shadow-white bg-indigo-400
          `}
            href={i18n.language === "en-US" ? en_resume_pdf : fr_resume_pdf}
            target="_blank"
          >
            <span className="">{t("resume")}</span>{" "}
            <ArrowUpRightIcon className=" stroke-white stroke-2 w-5 h-5" />
          </Link>
          <Link
            className={`
              w-5/6 lg:w-fit px-6 py-2 flex items-center justify-center gap-2 uppercase
              bg-transparent bg-red-00 border-2 shadow-sm shadow-white
            `}
            href={nav["contact"].url}
          >
            <span className="">{t("call_to_action")}</span>{" "}
            <span className="animate__animated animate__wobble animate__infinite">👋</span>
          </Link>
        </div>
    </div>
  );
}

export default HeroText;
