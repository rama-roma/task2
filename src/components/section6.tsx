import { useTranslations } from "next-intl";
import React from "react";

const Section6 = () => {
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="hidden md:block">
        <section className="mt-30 flex flex-col justify-center items-center mb-10">
          <img src="/map (1).svg" alt="" />
          <div className="w-270 bg-white dark:bg-gray-800 mt-[-240px] mb-30 rounded-[30px] flex items-center justify-center h-50 gap-[130px] p-4">
            <article className="w-130 flex flex-col gap-[20px]">
              <h1 className="text-[40px] font-medium">{t("text8")}</h1>
              <p>{t("text9")}</p>
            </article>
            <article>
              <input
                className="border border-[3px] p-4 rounded-[30px]"
                type="text"
                placeholder={t("text11")}
              />
              <button className="bg-[#24AB70] text-[white] p-4 rounded-[30px] border border-[3px] border-[#24AB70]">
                {t("text10")}
              </button>
            </article>
          </div>
        </section>
      </div>

      <div className="block md:hidden">
        <section className="flex flex-col items-center gap-6 p-4">

          <div className="w-full">
            <img src="/map (1).svg" alt="" className="w-full rounded-2xl" />
          </div>

          <div className="w-full bg-white dark:bg-gray-800 rounded-[30px] p-4 flex flex-col gap-4 shadow">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-2xl font-medium">{t("text8")}</h1>
              <p>{t("text9")}</p>
            </div>

            <div className="flex flex-col gap-3">
              <input
                className="border border-[2px] p-3 rounded-[30px] w-full"
                type="text"
                placeholder={t("text11")}
              />
              <button className="bg-[#24AB70] text-white p-3 rounded-[30px] w-full">
                {t("text10")}
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Section6;
