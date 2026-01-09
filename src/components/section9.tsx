import { useTranslations } from "next-intl";
import React from "react";

const Section9 = () => {
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="hidden md:block">
        <section className="flex items-center justify-between">
          <div>
            <img src="/place.svg" alt="" />
          </div>
          <div className="flex w-[50%] flex-col items-start gap-[30px]">
            <h1 className="text-[40px] font-medium">{t("text22")}</h1>
            <p>{t("text2")}</p>
            <p>{t("text3")}</p>
            <button className="bg-[#24AB70] text-[white] w-40 rounded-[30px] p-2">
              {t("text23")}
            </button>
          </div>
        </section>
      </div>

      <div className="block md:hidden">
        <section className="flex flex-col gap-6 px-4">
          <div className="w-full">
            <img className="w-full h-auto" src="/place.svg" alt="" />
          </div>

          <div className="flex flex-col items-start gap-[20px]">
            <h1 className="text-[28px] font-medium leading-tight">
              {t("text22")}
            </h1>
            <p className="text-sm">{t("text2")}</p>
            <p className="text-sm">{t("text3")}</p>
            <button className="bg-[#24AB70] text-[white] w-full rounded-[30px] p-3">
              {t("text23")}
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Section9;
