import { aboutImage } from '@/lib/constants';
import { rubic } from '@/lib/fonts';
import { useTranslation } from "@/lib/i18n/client";
import { Params } from '@/types';
import Image from "next/image";
import { useParams } from 'next/navigation';

function About() {
  const { lang }: Params = useParams();
  const { t } = useTranslation(lang);
  
  return (
    <section
      id="about"
      className={`flex flex-col lg:flex-row lg:py-32 bg-red-00`}
    >
      <div className="w-full lg:w-1/2 md:flex md:justify-center px-6 bg-blue-00">
        <div
          className='relative flex w-full lg:w-2/3 h-96 lg:h-auto'
        >
          <Image
            alt={t("about.bigImage.alt")}
            className='object-cover'
            src={aboutImage}
            sizes="100vw"
            fill
            quality={100}
            priority={true}
          />
        </div>
      </div>
      <div
        className={`w-full lg:w-1/2 lg:h-full ${rubic.className} flex items-center justify-center py-4 px-8 bg-purple-00`}
      >
        <div className="h-full lg:h-4/6 text-sm lg:text-base flex flex-col justify-center gap-y-10 bg-blue-">
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
