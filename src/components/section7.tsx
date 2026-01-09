import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

const Section7 = () => {
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="hidden md:block">
        <section className="flex items-center justify-between">
          <div>
            <img src="/image (2).svg" alt="" />
            <div className="flex items-end mt-[-160px] ml-[-70px]">
              <img src="/pop.svg" alt="" />
              <div className="flex items-center gap-[20px]">
                <img className="w-30" src="/image (2).svg" alt="" />
                <img className="w-30" src="/image (2).svg" alt="" />
              </div>
            </div>
          </div>
          <div className="w-[50%] flex flex-col gap-[20px]">
            <span className="text-[#24AB70]">{t("text12")}</span>
            <h1 className="text-[40px] font-medium">{t("text13")}</h1>
            <div className="flex items-center justify-between w-100">
              <h1 className="font-medium">{t("text14")}</h1>
              <div className="flex items-center gap-[5px]">
                <Star size={14} fill="gold" />
                <Star size={14} fill="gold" />
                <Star size={14} fill="gold" />
                <Star size={14} fill="gold" />
                <Star size={14} fill="gold" />
                <p>4.8</p>
              </div>
            </div>
            <p>{t("text15")}</p>
            <div>
              <button className="p-2 w-40 bg-[#24AB70] border border-[3px] border-[#24AB70] text-[white] rounded-[30px]">
                {t("text16")}
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className="block md:hidden">
        <section className="flex flex-col gap-[20px]">
          <div className="relative flex justify-center">
            <img className="w-full" src="/image (2).svg" alt="" />
            <div className="absolute bottom-[-20px] left-4 flex items-end gap-[10px]">
              <img className="w-16" src="/pop.svg" alt="" />
              <img className="w-10" src="/image (2).svg" alt="" />
              <img className="w-10" src="/image (2).svg" alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-[15px] mt-6">
            <span className="text-[#24AB70] text-sm">{t("text12")}</span>

            <h1 className="text-[26px] font-medium leading-tight">
              {t("text13")}
            </h1>

            <div className="flex items-center justify-between">
              <h1 className="font-medium">{t("text14")}</h1>
              <div className="flex items-center gap-[4px]">
                <Star size={12} fill="gold" />
                <Star size={12} fill="gold" />
                <Star size={12} fill="gold" />
                <Star size={12} fill="gold" />
                <Star size={12} fill="gold" />
                <p className="text-sm">4.8</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed">{t("text15")}</p>

            <button className="p-3 w-full bg-[#24AB70] border border-[3px] border-[#24AB70] text-white rounded-[30px]">
              {t("text16")}
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Section7;
