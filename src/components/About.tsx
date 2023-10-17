import { indie } from "@/lib/constants";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    // <section
    //   id="about"
    //   className={`h-screen flex pt-[var(--header-h)]`}
    //   // pt-[var(--header-h)]
    // >
    //   <div className="w-1/2 h-full flex justify-center">
    //     <div
    //       style={{ backgroundImage: `url(${aboutImage})` }}
    //       className={`
    //         h-72 w-72 md:portrait:h-96 md:portrait:w-96 lg:h-2/3 lg:w-2/3 bg-cover bg-no-repeat bg-center
    //         rounded-[84%_16%_77%_23%/22%_93%_7%_78%]
    //       `}
    //     ></div>
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
