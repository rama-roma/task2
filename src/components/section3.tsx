import {
  BellElectric,
  BluetoothSearching,
  Car,
  Coffee,
  Computer,
  PenTool,
  SplitSquareHorizontal,
  Wifi,
} from "lucide-react";
import { useTranslations } from "next-intl";

const Section3 = () => {
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="hidden md:block">
        <section className="mt-30 flex items-center justify-between">
          <div className="flex flex-col items-start gap-[30px]">
            <h1 className="text-[40px] font-medium w-100">{t("pop6")}</h1>
            <p className="w-100">{t("pop7")}</p>
            <button className="text-[white] p-3 w-40 bg-[#24AB70] rounded-[30px]">
              {t("pop8")}
            </button>
          </div>
          <div className="flex flex-wrap w-200 gap-[20px]">
            <article className="flex flex-col items-center justify-center gap-[10px] border border-[2px] p-4 w-45 h-45 rounded-2xl">
              <Computer color="#24AB70" />
              <span>{t("pop9")}</span>
            </article>
            <article className="flex flex-col items-center justify-center gap-[10px] border border-[2px] p-4 w-45 h-45 rounded-2xl">
              <Car color="#24AB70" />
              <span>{t("pop10")}</span>
            </article>
            <article className="flex flex-col items-center justify-center gap-[10px] border border-[2px] p-4 w-45 h-45 rounded-2xl">
              <Coffee color="#24AB70" />
              <span>{t("pop11")}</span>
            </article>
            <article className="flex flex-col items-center justify-center gap-[10px] border border-[2px] p-4 w-45 h-45 rounded-2xl">
              <Wifi color="#24AB70" />
              <span>{t("pop12")}</span>
            </article>
            <article className="flex flex-col items-center justify-center gap-[10px] border border-[2px] p-4 w-45 h-45 rounded-2xl">
              <BellElectric color="#24AB70" />
              <span>{t("pop13")}</span>
            </article>
            <article className="flex flex-col items-center justify-center gap-[10px] border border-[2px] p-4 w-45 h-45 rounded-2xl">
              <PenTool color="#24AB70" />
              <span>{t("pop14")}</span>
            </article>
            <article className="flex flex-col items-center justify-center gap-[10px] border border-[2px] p-4 w-45 h-45 rounded-2xl">
              <SplitSquareHorizontal color="#24AB70" />
              <span>{t("pop15")}</span>
            </article>
            <article className="flex flex-col items-center justify-center gap-[10px] border border-[2px] p-4 w-45 h-45 rounded-2xl">
              <BluetoothSearching color="#24AB70" />
              <span>{t("pop16")}</span>
            </article>
          </div>
        </section>
      </div>

      <div className="block md:hidden">
        <section className="flex flex-col gap-6 p-4">
          <div className="flex flex-col gap-4 items-center text-center">
            <h1 className="text-2xl font-medium">{t("pop6")}</h1>
            <p className="text-[#555555]">{t("pop7")}</p>
            <button className="bg-[#24AB70] text-white px-6 py-2 rounded-[30px]">
              {t("pop8")}
            </button>
          </div>

          <div className="flex overflow-x-auto gap-4 py-2">
            {[
              { icon: <Computer color="#24AB70" />, text: t("pop9") },
              { icon: <Car color="#24AB70" />, text: t("pop10") },
              { icon: <Coffee color="#24AB70" />, text: t("pop11") },
              { icon: <Wifi color="#24AB70" />, text: t("pop12") },
              { icon: <BellElectric color="#24AB70" />, text: t("pop13") },
              { icon: <PenTool color="#24AB70" />, text: t("pop14") },
              {
                icon: <SplitSquareHorizontal color="#24AB70" />,
                text: t("pop15"),
              },
              {
                icon: <BluetoothSearching color="#24AB70" />,
                text: t("pop16"),
              },
            ].map((item, idx) => (
              <article
                key={idx}
                className="flex flex-col items-center justify-center gap-2 border border-[2px] p-4 min-w-[80px] rounded-2xl flex-shrink-0"
              >
                {item.icon}
                <span className="text-xs text-center">{item.text}</span>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Section3;
