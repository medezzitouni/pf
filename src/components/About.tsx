import { aboutImage, rubic } from "@/lib/constants";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className={`min-h-screen lg:h-screen   lg:pt-0 flex flex-col lg:flex-row  bg-red-`}
    >
      {/* pt-[var(--header-h)]*/}
      <div className="flex justify-center items-end lg:items-center lg:py-0 w-full  lg:w-1/2 lg:h-full bg-blue-">
        <div
          className={`
            w-full h-72 py-3 lg:w-4/6 lg:h-4/6 bg-cover bg-no-repeat bg-center lg:rounded-[46%_54%_37%_63%/60%_28%_72%_40%]
          `}
          style={{ backgroundImage: `url(${aboutImage})` }}
        ></div>
      </div>
      <div
        className={`w-full lg:w-1/2 h-1/2 lg:h-full ${rubic.className} flex items-center justify-center py-4 px-8 bg-purple-`}
      >
        <div className="h-full lg:h-4/6 text-sm lg:text-base flex flex-col gap-y-10 bg-blue-">
          <p className="leading-relaxed">{t("about_intro")}</p>
          <div>
            <div className="text-xl text-yellow-400 py-4">
              {t("functional_skills")}
            </div>
            <div className="flex flex-col gap-4 ">
              <div className="flex gap-x-4 flex-col gap-2">
                <span className="text-base">{t("functional_skills_1")}</span>{" "}
                <span className="text-sm text-gray-500 dark:text-gray-400 flex leading-relaxed">
                  <span className="basis-1/12 text-end pr-2">&#x2022;</span>
                  <span className="basis-11/12">
                    {t("functional_skills_1_details")}
                  </span>
                </span>
              </div>
              <div className="flex gap-x-4 flex-col gap-2">
                <span className="text-base">{t("functional_skills_2")}</span>
                <div className="text-base pl-5 lg:pl-10 text-gray-600 dark:text-gray-500">
                  {t("functional_skills_2_details")}
                </div>
                <span className="text-sm flex flex-col line pl-3 text-gray-500 dark:text-gray-400">
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex leading-relaxed">
                    <span className="basis-1/12 text-end pr-2">&#x2022;</span>
                    <span className="basis-11/12">
                      {t("functional_skills_2_details_1")}
                    </span>
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex leading-relaxed">
                    <span className="basis-1/12 text-end pr-2">&#x2022;</span>
                    <span className="basis-11/12">
                      {t("functional_skills_2_details_2")}
                    </span>
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex leading-relaxed">
                    <span className="basis-1/12 text-end pr-2">&#x2022;</span>
                    <span className="basis-11/12">
                      {t("functional_skills_2_details_3")}
                    </span>
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex leading-relaxed">
                    <span className="basis-1/12 text-end pr-2">&#x2022;</span>
                    <span className="basis-11/12">
                      {t("functional_skills_2_details_4")}
                    </span>
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex leading-relaxed">
                    <span className="basis-1/12 text-end pr-2">&#x2022;</span>
                    <span className="basis-11/12">
                      {t("functional_skills_2_details_5")}
                    </span>
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex leading-relaxed">
                    <span className="basis-1/12 text-end pr-2">&#x2022;</span>
                    <span className="basis-11/12">
                      {t("functional_skills_2_details_6")}
                    </span>
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex leading-relaxed">
                    <span className="basis-1/12 text-end pr-2">&#x2022;</span>
                    <span className="basis-11/12">
                      {t("functional_skills_2_details_7")}
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
