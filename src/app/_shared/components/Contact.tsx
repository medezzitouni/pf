import { indie } from '@/lib/fonts';
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  
  return (
    <section
      id="contact"
      className={`h-screen pt-[var(--header-h)] flex justify-center items-center`}
    >
      <span className={`${indie.className} text-xl`}>{t('coming_soon')}</span>
    </section>
  );
}

export default Contact;
