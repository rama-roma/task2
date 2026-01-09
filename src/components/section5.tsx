import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

const Section5 = () => {
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="hidden md:block">
        <section className="mt-30 flex items-center justify-between">
          <div className="w-[60%] flex flex-col gap-[30px]">
            <div>
              <Quote color="#24AB70" />
              <p className="ml-10">{t("text5")}</p>
            </div>
            <br />
            <div>
              {" "}
              <h1 className="text-[30px] font-bold">{t("text6")}</h1>
              <p>{t("text7")}</p>
            </div>
          </div>
          <div>
            <img src="/Mask Group (7).svg" alt="" />
          </div>
        </section>
      </div>

      <div className="block md:hidden">
        <section className="flex flex-col gap-6 p-4">
          <div className="flex items-start gap-2">
            <Quote color="#24AB70" />
            <p className="text-sm">{t("text5")}</p>
          </div>

          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-xl font-bold">{t("text6")}</h1>
            <p>{t("text7")}</p>
          </div>

          <div className="w-full flex justify-center">
            <img src="/Mask Group (7).svg" alt="" className="w-full max-w-sm" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Section5;
