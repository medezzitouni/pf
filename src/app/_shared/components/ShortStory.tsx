import { useTranslation } from "@/lib/i18n/client";
import { Params } from "@/types";
import { useParams } from "next/navigation";

export default function ShortStory() {
  
  const { lang }: Params = useParams();
  const { t } = useTranslation(lang);

  return (
    <section className="bg-pink-00 flex flex-col text-slate-200 items-center py-8 lg:py-12">
      <h1 className="text-3xl mb-4 text-center ">
        {t("intro-title")}
      </h1>
      <p className="w-5/6 lg:w-2/3 font-light lg:text-lg text-center">
        {t("intro")}
      </p>
    </section>
  );
}
