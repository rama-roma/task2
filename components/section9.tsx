import React from "react";

const Section9 = () => {
  return (
    <>
      <div className="hidden md:block">
        <section className="flex items-center justify-between">
          <div>
            <img src="/place.svg" alt="" />
          </div>
          <div className="flex w-[50%] flex-col items-start gap-[30px]">
            <h1 className="text-[40px] font-medium">About Us</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's{" "}
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="bg-[#24AB70] text-[white] w-40 rounded-[30px] p-2">
              Read More
            </button>
          </div>
        </section>
      </div>

      <div className="block md:hidden flex flex-col gap-6 p-4">
        <section className="flex flex-col items-center gap-4 bg-white dark:bg-[#1f1f1f] rounded-2xl p-4 shadow-sm">
          {/* Картинка сверху */}
          <div className="w-full flex justify-center">
            <img
              src="/place.svg"
              alt="About Us"
              className="w-64 sm:w-72 rounded-lg"
            />
          </div>

          {/* Текстовый блок */}
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-medium">About Us</h1>
            <p className="text-sm text-gray-600 max-w-xs mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <p className="text-sm text-gray-600 max-w-xs mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="bg-[#24AB70] text-white py-2 px-6 rounded-[30px] mx-auto mt-2">
              Read More
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Section9;
