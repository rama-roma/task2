const Section4 = () => {
  return (
    <>
      <div className="hidden md:block">
        <section className="mt-30 bg-[#24AB700A] p-4 w-full h-auto rounded-[30px] flex items-center justify-between">
          <div>
            <img src="/image (1).svg" alt="" />
          </div>
          <div className="flex flex-col w-160 items-start  gap-[30px]">
            <h1 className="text-[40px] font-medium">Discover our History</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="bg-[#24AB70] p-3 w-40 rounded-[30px] text-[white]">
              Explore More
            </button>
          </div>
        </section>
      </div>

      <div className="block md:hidden flex flex-col gap-6 p-4">
        <section className="bg-[#24AB700A] p-4 w-full rounded-[30px] flex flex-col items-center gap-4">
          {/* Картинка сверху */}
          <div className="w-full flex justify-center">
            <img src="/image (1).svg" alt="History" className="w-64 sm:w-72" />
          </div>

          {/* Текстовый блок */}
          <div className="flex flex-col gap-3 text-center">
            <h1 className="text-2xl font-medium">Discover our History</h1>
            <p className="text-sm text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <p className="text-sm text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="bg-[#24AB70] text-white py-2 px-6 rounded-[30px] mx-auto">
              Explore More
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Section4;
