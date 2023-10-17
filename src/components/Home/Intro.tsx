import {
  en_resume_pdf,
  fr_resume_pdf,
  indie,
  nav,
  rubic,
} from "@/lib/constants";
import Link from "next/link";
import { useTranslation } from "react-i18next";


type Props = {
  className?: string;
}
function Intro({ className }: Props) {
  const { t, i18n } = useTranslation();

  return (
    <div className={`${className}`}>
      <div className="h-full w-full lg:w-9/12 lg:h-2/3 flex flex-col items-center lg:gap-6 bg-red-">
        <div className=" py-5 flex flex-col gap-2 lg:gap-6 text-center lg:text-start bg-blue-">
          <h1
            className={`text-4xl lg:text-6xl xl:text-7xl ${indie.className} leading-tight lg:leading-none`}
          >
            {t("welcome")}
          </h1>
          <h2 className={`text-lg md:text-2xl ${indie.className}`}>
            {t("position")}
          </h2>
          <p
            className={`${rubic.className} hidden lg:block lg:text-sm xl:text-md text-gray-500 dark:text-gray-400`}
          >
            {t("intro")}{" "}
            <Link
              href={nav["about"].url}
              className="text-xs text-gray-500 cursor-pointer"
            >
              {t("read_more")}
            </Link>
          </p>
        </div>

        <div className="w-full flex flex-col  lg:flex-row items-center lg:justify-start h-32 gap-4 lg:gap-2 bg-red-">
          <Link
            className={`border-2 px-3 py-1 rounded-md flex items-center gap-3 ${rubic.className}
          shadow-lg bg-black text-white dark:bg-white dark:text-black group
          `}
            href={i18n.language === "en-US" ? en_resume_pdf : fr_resume_pdf}
            target="_blank"
          >
            <span className="">{t("resume")}</span>{" "}
            <i className="fa fa-file-pdf-o group-hover:hidden"></i>{" "}
            <span className="hidden group-hover:inline">
              <i className="fa fa-file-pdf-o animate__animated animate__wobble animate__infinite"></i>{" "}
            </span>
          </Link>
          <Link
            className={`px-3 py-1 flex items-center gap-3 ${rubic.className}
          bg-transparent text-black dark:text-white group
          `}
            href={nav["contact"].url}
          >
            <span className="">{t("contact_us")}</span>{" "}
            <i className="fas fa-chevron-right text-xs group-hover:hidden"></i>
            <span className="hidden group-hover:inline-block">
              <i className="text-xs fa fa-arrow-down animate__animated animate__wobble animate__infinite"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Intro;
