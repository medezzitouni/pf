import { indie } from "@/lib/constants";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  
  return (
    <section
      id="projects"
      className={`h-screen pt-[var(--header-h)] flex justify-center items-center`}
    >
      <span className={`${indie.className} text-xl`}>{t('coming_soon')}</span>
    </section>
  );
}

export default About;
