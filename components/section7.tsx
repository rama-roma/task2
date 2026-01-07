import { Star } from "lucide-react";
import React from "react";

const Section7 = () => {
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
            <span className="text-[#24AB70]">London NW8 7JT England</span>
            <h1 className="text-[40px] font-medium">
              Danubius Hotel Regents Park
            </h1>
            <div className="flex items-center justify-between w-100">
              <h1 className="font-medium">$200 Par Night</h1>
              <div className="flex items-center gap-[5px]">
                <Star size={14} fill="gold" />
                <Star size={14} fill="gold" />
                <Star size={14} fill="gold" />
                <Star size={14} fill="gold" />
                <Star size={14} fill="gold" />
                <p>4.8</p>
              </div>
            </div>
            <p>
              Как уже неоднократно упомянуто, базовые сценарии поведения
              пользователей рассмотрены исключительно в разрезе маркетинговых и
              финансовых предпосылок. Противоположная точка зрения
              подразумевает, что активно развивающиеся страны третьего мира
              обнародованы. Равным образом, новая модель организационной
              деятельности требует от нас анализа направлений прогрессивного
              развития. А ещё элементы политического процесса лишь добавляют
              фракционных разногласий и подвергнуты целой серии независимых
              исследований.
            </p>
            <div>
              <button className="p-2 w-40 bg-[#24AB70] border border-[3px] border-[#24AB70] text-[white] rounded-[30px]">
                To book Now
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className="block md:hidden flex flex-col gap-6 p-4">
        <section className="flex flex-col gap-4 bg-white dark:bg-[#1f1f1f] rounded-2xl p-4 shadow-sm">
          {/* Главная картинка */}
          <div className="w-full flex justify-center relative">
            <img
              src="/image (2).svg"
              alt="Hotel"
              className="w-64 sm:w-72 rounded-lg"
            />

            {/* Нижние мини-картинки */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
              <img src="/pop.svg" alt="Pop" className="w-12" />
              <img src="/image (2).svg" alt="Thumb1" className="w-12" />
              <img src="/image (2).svg" alt="Thumb2" className="w-12" />
            </div>
          </div>

          {/* Текстовый блок */}
          <div className="flex flex-col gap-2 text-center">
            <span className="text-[#24AB70] text-sm">
              London NW8 7JT England
            </span>
            <h1 className="text-xl sm:text-2xl font-medium">
              Danubius Hotel Regents Park
            </h1>
            <div className="flex items-center justify-center gap-4">
              <h2 className="font-medium">$200 Per Night</h2>
              <div className="flex items-center gap-1 text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="gold" />
                ))}
                <span>4.8</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Как уже неоднократно упомянуто, базовые сценарии поведения
              пользователей рассмотрены исключительно в разрезе маркетинговых и
              финансовых предпосылок. Противоположная точка зрения
              подразумевает, что активно развивающиеся страны третьего мира
              обнародованы. Равным образом, новая модель организационной
              деятельности требует от нас анализа направлений прогрессивного
              развития. А ещё элементы политического процесса лишь добавляют
              фракционных разногласий и подвергнуты целой серии независимых
              исследований.
            </p>
            <button className="bg-[#24AB70] text-white w-full py-2 rounded-[30px] mt-2">
              To Book Now
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Section7;
