import { Star, StarHalf } from "lucide-react";

const Section2 = () => {
  return (
    <>
      <div className="hidden md:block">
        <section className="flex flex-col gap-[20px]">
          <div className="flex  flex-col gap-[20px]">
            <h1 className="text-[40px] font-medium">Our most popular Hotels</h1>
            <div className="flex items-center justify-between">
              <p className="w-90">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button className="p-2 w-30 text-[#24AB70] bg-[#24AB701A] rounded-2xl">
                View All
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[20px]">
            <article className="flex flex-col gap-[10px] border p-4 rounded-2xl">
              <img src="/now (1).svg" alt="" />
              <p className="text-[10px] text-[#24AB70]">
                London NW8 7JT England
              </p>
              <h1 className="text-[20px] font-medium">
                Danubius Hotel Regents Park
              </h1>
              <div className="flex items-center justify-between">
                <h1>$200 Par Night</h1>
                <div className="flex items-center gap-[5px]">
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <p>4.8</p>
                </div>
              </div>
            </article>
            <article className="flex flex-col gap-[10px] border p-4 rounded-2xl">
              <img src="/now (2).svg" alt="" />
              <p className="text-[10px] text-[#24AB70]">
                London NW8 7JT England
              </p>
              <h1 className="text-[20px] font-medium">
                Danubius Hotel Regents Park
              </h1>
              <div className="flex items-center justify-between">
                <h1>$200 Par Night</h1>
                <div className="flex items-center gap-[5px]">
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <p>4.8</p>
                </div>
              </div>
            </article>
            <article className="flex flex-col gap-[10px] border p-4 rounded-2xl">
              <img src="/now (3).svg" alt="" />
              <p className="text-[10px] text-[#24AB70]">
                London NW8 7JT England
              </p>
              <h1 className="text-[20px] font-medium">
                Danubius Hotel Regents Park
              </h1>
              <div className="flex items-center justify-between">
                <h1>$200 Par Night</h1>
                <div className="flex items-center gap-[5px]">
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <Star size={14} fill="gold" />
                  <p>4.8</p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>

      <div className="block md:hidden flex flex-col gap-6 p-4">
        {/* Заголовок */}
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-medium">Our most popular Hotels</h1>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 max-w-[70%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="p-2 px-4 text-[#24AB70] bg-[#24AB701A] rounded-2xl text-sm">
              View All
            </button>
          </div>
        </div>

        {/* Карточки отелей */}
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((i) => (
            <article
              key={i}
              className="flex flex-col gap-2 border p-4 rounded-2xl shadow-sm bg-white dark:bg-[#1f1f1f]"
            >
              <img
                src={`/now (${i}).svg`}
                alt={`Hotel ${i}`}
                className="w-full rounded-lg"
              />
              <p className="text-xs text-[#24AB70]">London NW8 7JT England</p>
              <h2 className="text-lg font-medium">
                Danubius Hotel Regents Park
              </h2>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">$200 Per Night</h3>
                <div className="flex items-center gap-1 text-sm">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={14} fill="gold" />
                  ))}
                  <span>4.8</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section2;
