import {
  Calendar,
  LocationEditIcon,
  PlayCircle,
  Search,
  User2Icon,
} from "lucide-react";
import { useTranslations } from "next-intl";

const Section1 = () => {
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="hidden md:block">
        <section className="bg-[#24AB700A] p-4  rounded-[30px] w-full h-auto flex items-center justify-center gap-[100px]">
          <div className="flex flex-col items-start gap-[30px]">
            <h1 className="text-[60px] w-140 font-medium">{t("title15")}</h1>
            <p className="text-[#555555] w-100">{t("title16")}</p>
            <div className="flex items-center gap-[10px] p-2">
              <PlayCircle size={30} />
              <p>{t("title17")}</p>
            </div>
          </div>
          <div>
            <img className="w-140" src="/image.svg" alt="" />
          </div>
        </section>
        <div className="flex justify-center mb-30">
          <section
            className="
    absolute
    top-150
    p-5
    w-260
    rounded-[40px]
    border
    flex
    items-center
    justify-between
    bg-white
    dark:bg-[#1f1f1f]
    dark:border-gray-700
  "
          >
            <div className="flex items-start gap-[10px]">
              <LocationEditIcon color="#24AB70" />
              <div className="flex flex-col">
                <p className="text-[19px]">{t("title18")}</p>
                <span>{t("title19")}</span>
              </div>
            </div>
            <div className="border h-20"></div>
            <div className="flex items-start gap-[10px]">
              <Calendar color="#24AB70" />
              <div className="flex flex-col">
                <p className="text-[19px]">{t("title20")}</p>
                <span>{t("title21")}</span>
              </div>
            </div>
            <div className="border h-20"></div>
            <div className="flex items-start gap-[10px]">
              <Calendar color="#24AB70" />
              <div className="flex flex-col">
                <p className="text-[19px]">{t("title22")}</p>
                <span>{t("title23")}</span>
              </div>
            </div>
            <div className="border h-20"></div>
            <div className="flex items-start gap-[10px]">
              <User2Icon color="#24AB70" />
              <div className="flex flex-col">
                <p className="text-[19px]">{t("title24")}</p>
                <span>{t("title25")}</span>
              </div>
            </div>
            <div className="bg-[#24AB70] p-2 h-full w-50 rounded-[30px] flex items-center gap-[20px] text-[white]">
              <Search />
              <span>{t("title26")}</span>
            </div>
          </section>
        </div>
      </div>

      <div className="block md:hidden">
        <section className="bg-[#24AB700A] p-4 rounded-[30px] flex flex-col items-center gap-6">
          <h1 className="text-3xl font-medium text-center">{t("title15")}</h1>
          <p className="text-[#555555] text-center">{t("title16")}</p>
          <div className="flex items-center gap-2">
            <PlayCircle size={24} />
            <p>{t("title17")}</p>
          </div>
          <img src="/image.svg" alt="" className="w-full max-w-sm" />
        </section>

        <section className="mt-6 p-4 w-full rounded-[30px] border flex flex-col gap-4 bg-white dark:bg-[#1f1f1f] dark:border-gray-700">
          <div className="flex items-start gap-3">
            <LocationEditIcon color="#24AB70" />
            <div className="flex flex-col">
              <p className="text-[16px]">{t("title18")}</p>
              <span>{t("title19")}</span>
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-600" />


          <div className="flex items-start gap-3">
            <Calendar color="#24AB70" />
            <div className="flex flex-col">
              <p className="text-[16px]">{t("title20")}</p>
              <span>{t("title21")}</span>
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-600" />

       
          <div className="flex items-start gap-3">
            <Calendar color="#24AB70" />
            <div className="flex flex-col">
              <p className="text-[16px]">{t("title22")}</p>
              <span>{t("title23")}</span>
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-600" />

          <div className="flex items-start gap-3">
            <User2Icon color="#24AB70" />
            <div className="flex flex-col">
              <p className="text-[16px]">{t("title24")}</p>
              <span>{t("title25")}</span>
            </div>
          </div>

          <button className="mt-4 w-full bg-[#24AB70] p-2 rounded-[30px] flex items-center justify-center gap-2 text-white">
            <Search />
            <span>{t("title26")}</span>
          </button>
        </section>
      </div>
    </>
  );
};

export default Section1;
