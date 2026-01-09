import { useTranslations } from "next-intl";

const Section4 = () => {
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="hidden md:block">
        <section className="mt-30 bg-[#24AB700A] p-4 w-full h-auto rounded-[30px] flex items-center justify-between">
          <div>
            <img src="/image (1).svg" alt="" />
          </div>
          <div className="flex flex-col w-160 items-start  gap-[30px]">
            <h1 className="text-[40px] font-medium">{t("text1")}</h1>
            <p>{t("text2")}</p>
            <p>{t("text3")}</p>
            <button className="bg-[#24AB70] p-3 w-40 rounded-[30px] text-[white]">
              {t("text4")}
            </button>
          </div>
        </section>
      </div>

      <div className="block md:hidden">
        <section className="mt-6 bg-[#24AB700A] p-4 rounded-[30px] flex flex-col items-center gap-4">
          <div className="w-full flex justify-center">
            <img src="/image (1).svg" alt="" className="w-full max-w-sm" />
          </div>

          <div className="flex flex-col gap-3 items-center text-center">
            <h1 className="text-2xl font-medium">{t("text1")}</h1>
            <p>{t("text2")}</p>
            <p>{t("text3")}</p>
            <button className="bg-[#24AB70] text-white px-6 py-2 rounded-[30px]">
              {t("text4")}
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Section4;
