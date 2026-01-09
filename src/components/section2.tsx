import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

const Section2 = () => {
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="hidden md:block">
        <section className="flex flex-col gap-[20px]">
          <div className="flex  flex-col gap-[20px]">
            <h1 className="text-[40px] font-medium">{t("pop")}</h1>
            <div className="flex items-center justify-between">
              <p className="w-90">{t("pop1")}</p>
              <button className="p-2 w-30 text-[#24AB70] bg-[#24AB701A] rounded-2xl">
                {t("pop2")}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[20px]">
            <article className="flex flex-col gap-[10px] border p-4 rounded-2xl">
              <img src="/now (1).svg" alt="" />
              <p className="text-[10px] text-[#24AB70]">{t("pop3")}</p>
              <h1 className="text-[20px] font-medium">{t("pop4")}</h1>
              <div className="flex items-center justify-between">
                <h1>{t("pop5")}</h1>
                <div className="flex items-center gap-[5px]">
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <p>4.8</p>
                </div>
              </div>
            </article>
            <article className="flex flex-col gap-[10px] border p-4 rounded-2xl">
              <img src="/now (2).svg" alt="" />
              <p className="text-[10px] text-[#24AB70]">{t("pop3")}</p>
              <h1 className="text-[20px] font-medium">{t("pop4")}</h1>
              <div className="flex items-center justify-between">
                <h1>{t("pop5")}</h1>
                <div className="flex items-center gap-[5px]">
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <p>4.8</p>
                </div>
              </div>
            </article>
            <article className="flex flex-col gap-[10px] border p-4 rounded-2xl">
              <img src="/now (3).svg" alt="" />
              <p className="text-[10px] text-[#24AB70]">{t("pop3")}</p>
              <h1 className="text-[20px] font-medium">{t("pop4")}</h1>
              <div className="flex items-center justify-between">
                <h1>{t("pop5")}</h1>
                <div className="flex items-center gap-[5px]">
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <p>4.8</p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>

      <div className="block md:hidden">
        <section className="flex flex-col gap-6 p-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-medium text-center">{t("pop")}</h1>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
              <p className="text-center sm:text-left">{t("pop1")}</p>
              <button className="p-2 w-full sm:w-auto text-[#24AB70] bg-[#24AB701A] rounded-2xl">
                {t("pop2")}
              </button>
            </div>
          </div>


          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((i) => (
              <article
                key={i}
                className="flex flex-col gap-2 border p-4 rounded-2xl"
              >
                <img src={`/now (${i}).svg`} alt="" className="w-full" />
                <p className="text-xs text-[#24AB70]">{t("pop3")}</p>
                <h1 className="text-lg font-medium">{t("pop4")}</h1>
                <div className="flex items-center justify-between">
                  <h1>{t("pop5")}</h1>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={14} fill="gold" />
                    ))}
                    <p>4.8</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Section2;
