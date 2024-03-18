import { useTranslation } from "@/lib/i18n/client";
import { Params } from "@/types";
import { useParams } from "next/navigation";

export default function Services() {
  const { lang }: Params = useParams();
  const { t } = useTranslation(lang);

  return (
    <section id="services" className="m-auto px-5 md:px-8 max-w-[85rem] bg-blue-00 text-white">
      <h1 className="text-3xl font-serif font-semibold lg:text-5xl text-center bg-red-00 pb-8">
        {t("services-title")}
      </h1>
      <p className="text-center md:text-lg max-w-2xl m-auto pb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem delectus sunt beatae tempore quo. Repellendus accusamus, vel, id adipisci perspiciatis quas maxime voluptatem, corporis itaque quam nesciunt numquam beatae sunt.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 md:gap-x-8">
        <div className="service-card">
            <div>Mobile & Web <br /> Application Development</div>
            <div></div>
        </div>
        <div className="service-card ">
          <div>Software &<br /> Managing Solutions</div>
          <div></div>
        </div>
        <div className="service-card">
          <div>Web Security <br /> & Audit</div>
          <div></div>
        </div>
        <div className="service-card">
          <div>Digital Marketing, <br /> SEO, & SMO</div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
