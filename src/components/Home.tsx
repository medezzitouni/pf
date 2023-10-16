import {
  en_resume_pdf,
  fr_resume_pdf,
  indie,
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
        <div className="h-72 w-full md:w-10/12 flex flex-col justify-center md:-mt-12">
          <div className="flex flex-col">
            <h1
              className={`text-4xl md:text-5xl ${indie.className} text-center leading-tight lg:leading-none`}
            >
              {t("welcome")}
            </h1>
            <h2 className={`text-lg md:text-xl ${indie.className} text-center`}>
              {t("position")}
            </h2>
          </div>
          <div className="w-full flex justify-center h-32 items-start pt-4 md:pt-0 md:items-center  ">
            <Link
              className={`border-2 px-3 py-1 rounded-md flex items-center gap-3 ${rubic.className}
                  shadow-lg bg-black text-white dark:bg-white dark:text-black
                  text-lg`}
              href={i18n.language === "en-US" ? en_resume_pdf : fr_resume_pdf}
              target="_blank"
            >
              <i className="fa fa-file-pdf-o"></i>{" "}
              <span className="">{t("resume")}</span>{" "}
              <i className="fa fa-arrow-right animate__animated animate__wobble animate__infinite"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-3/5 md:h-4/5 lg:h-2/3 lg:w-1/2 lg:-mt-24 flex justify-center md:portrait:items-end  pt-24 md:pt-8 lg:pt-12 ">
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
