import { indie } from "@/lib/constants";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    // <section
    //   id="about"
    //   className={`h-screen flex pt-[var(--header-h)]  bg-red-400`}
    //   // pt-[var(--header-h)]
    // >
    //   <div className="flex justify-center items-start w-1/2 h-full bg-red-"
    //   >
    //     <div
    //       className={`
    //         w-4/5 h-4/5 bg-cover bg-no-repeat bg-center rounded-[46%_54%_37%_63%/60%_28%_72%_40%]
    //       `}
    //       style={{ backgroundImage: `url(${aboutImage})` }}
    //     ></div>
    //   </div>
    //   <div className={`w-1/2 ${rubic.className} `}>
    //     <p>{t("intro_long")}</p>
    //   </div>
    // </section>
    <section
      id="about"
      className={`h-screen pt-[var(--header-h)] flex justify-center items-center`}
    >
      <span className={`${indie.className} text-xl`}>{t('coming_soon')}</span>
    </section>
  );
}

export default About;
