import { Facebook, Instagram, Twitch } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="hidden md:block">
        <footer className="max-w-[1400px] m-auto p-4">
          <section className="flex items-baseline justify-between">
            <div className="flex flex-col items-start gap-[20px]">
              <p className="w-60">{t("title6")}</p>
              <div className="flex items-center gap-[10px]">
                <Facebook />
                <Instagram />
                <Twitch />
              </div>
            </div>
            <div className="flex flex-col items-start gap-[20px]">
              <h1 className="text-[24px]">{t("title7")}</h1>
              <p>{t("title")}</p>
              <p>{t("title1")}</p>
              <p>{t("title3")}</p>
              <p>{t("title4")}</p>
            </div>
            <div className="flex flex-col items-start gap-[20px]">
              <h1 className="text-[24px]">{t("title8")}</h1>
              <p>{t("title2")}</p>
              <p>{t("title9")}</p>
              <p>{t("title10")}</p>
              <p>{t("title11")}</p>
            </div>
            <div className="flex flex-col items-start gap-[20px]">
              <h1 className="text-[24px]">{t("title12")}</h1>
              <p>{t("title13")}</p>
              <p></p>
            </div>
          </section>
        </footer>
      </div>

      <div className="block md:hidden">
        <footer className="p-4">
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <p>{t("title6")}</p>
              <div className="flex items-center gap-4">
                <Facebook />
                <Instagram />
                <Twitch />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold">{t("title7")}</h1>
              <p>{t("title")}</p>
              <p>{t("title1")}</p>
              <p>{t("title3")}</p>
              <p>{t("title4")}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold">{t("title8")}</h1>
              <p>{t("title2")}</p>
              <p>{t("title9")}</p>
              <p>{t("title10")}</p>
              <p>{t("title11")}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold">{t("title12")}</h1>
              <p>{t("title13")}</p>
              <p>{t("title14")}</p>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
};

export default Footer;
