import { Quote } from "lucide-react";
import React from "react";

const Section5 = () => {
  return (
    <>
      <div className="hidden md:block">
        <section className="mt-30 flex items-center justify-between">
          <div className="w-[60%] flex flex-col gap-[30px]">
            <div>
              <Quote color="#24AB70" />
              <p className="ml-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.
              </p>
            </div>
            <br />
            <div>
              {" "}
              <h1 className="text-[30px] font-bold">Alexandr Ivchenko</h1>
              <p>Businessman</p>
            </div>
          </div>
          <div>
            <img src="/Mask Group (7).svg" alt="" />
          </div>
        </section>
      </div>

      <div className="block md:hidden flex flex-col gap-6 p-4">
        <section className="flex flex-col items-center gap-4 bg-white dark:bg-[#1f1f1f] p-4 rounded-2xl shadow-sm">
          {/* Картинка сверху */}
          <div className="w-full flex justify-center">
            <img
              src="/Mask Group (7).svg"
              alt="Alexandr Ivchenko"
              className="w-48 sm:w-56 rounded-lg"
            />
          </div>

          {/* Цитата */}
          <div className="flex flex-col gap-3 text-center">
            <div className="flex flex-col items-center gap-2">
              <Quote color="#24AB70" />
              <p className="text-sm text-gray-600 max-w-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.
              </p>
            </div>

            {/* Автор */}
            <div className="flex flex-col items-center gap-1">
              <h1 className="text-lg font-bold">Alexandr Ivchenko</h1>
              <p className="text-sm text-gray-500">Businessman</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Section5;
