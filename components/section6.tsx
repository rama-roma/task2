import React from "react";

const Section6 = () => {
  return (
    <>
      <div className="hidden md:block">
        <section className="mt-30 flex flex-col justify-center items-center mb-10">
          <img src="/map (1).svg" alt="" />
          <div className="w-270 bg-white dark:bg-gray-800 mt-[-240px] mb-30 rounded-[30px] flex items-center justify-center h-50 gap-[130px] p-4">
            <article className="w-130 flex flex-col gap-[20px]">
              <h1 className="text-[40px] font-medium">
                Location of our Hotelos
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
            </article>
            <article>
              <input
                className="border border-[3px] p-4 rounded-[30px]"
                type="text"
                placeholder="Enter your email"
              />
              <button className="bg-[#24AB70] text-[white] p-4 rounded-[30px] border border-[3px] border-[#24AB70]">
                Contact
              </button>
            </article>
          </div>
        </section>
      </div>

      <div className="block md:hidden flex flex-col items-center gap-6 p-4">
        <section className="flex flex-col items-center gap-4">
          {/* Карта */}
          <div className="w-full flex justify-center">
            <img
              src="/map (1).svg"
              alt="Map"
              className="w-full max-w-xs rounded-lg"
            />
          </div>

          {/* Контент и форма */}
          <div className="w-full bg-white dark:bg-gray-800 p-4 rounded-2xl flex flex-col gap-4 shadow-md">
            {/* Текст */}
            <article className="flex flex-col gap-2 text-center">
              <h1 className="text-xl sm:text-2xl font-medium">
                Location of our Hotels
              </h1>
              <p className="text-sm text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
            </article>

            {/* Форма */}
            <article className="flex flex-col gap-2 items-center">
              <input
                className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-2xl text-sm"
                type="text"
                placeholder="Enter your email"
              />
              <button className="bg-[#24AB70] text-white w-full p-3 rounded-2xl mt-1">
                Contact
              </button>
            </article>
          </div>
        </section>
      </div>
    </>
  );
};

export default Section6;
