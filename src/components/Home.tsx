import {
  en_resume_pdf,
  fr_resume_pdf,
  indie,
  nav,
  profileImage,
  rubic,
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTranslation } from "react-i18next";
function Home() {
  const { t, i18n } = useTranslation();
  return (
    <section
      id="home"
      className={cn(
        `h-screen bg-transparent pt-[var(--header-h)]
             flex flex-col-reverse lg:flex-row items-center justify-end
          `
      )}
    >
      <div className="md:w-1/2 md:h-full flex justify-center lg:justify-end items-center ">
        <div className="h-4/5 w-full lg:w-9/12 lg:h-1/2 flex flex-col gap-9 lg:gap-6 md:-mt-12 bg-purple-">
          <div className="flex flex-col gap-2 lg:gap-6 text-center lg:text-start bg-blue-">
            <h1
              className={`text-4xl lg:text-7xl ${indie.className} leading-tight lg:leading-none`}
            >
              {t("welcome")}
            </h1>
            <h2 className={`text-lg md:text-2xl ${indie.className}`}>
              {t("position")}
            </h2>
            <p
              className={`${rubic.className} hidden lg:block text-gray-500 dark:text-gray-400`}
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

          <div className="w-full flex flex-col lg:flex-row items-center lg:justify-start h-32 gap-4 lg:gap-2 bg-red-">
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
              href={nav['contact'].url}
              
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
      <div className="w-full h-1/2 md:h-4/5 lg:h-3/5 lg:w-1/2 lg:-mt-24 flex justify-center md:portrait:items-end pt-5 md:pt-8 lg:pt-12 bg-red-">
        <div
          className="h-72 w-72 md:portrait:h-96 md:portrait:w-96 lg:h-96 lg:w-96 bg-cover bg-no-repeat rounded-[33%_67%_65%_35%/62%_55%_45%_38%]"
          style={{
            backgroundImage: `url(${profileImage})`,
          }}
        ></div>
      </div>
    </section>
  );
}

export default Home;
