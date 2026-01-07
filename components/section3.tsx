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

const Section3 = () => {
  return (
    <>
      <div className="hidden md:block">
        <section className="mt-30 flex items-center justify-between">
          <div className="flex flex-col items-start gap-[30px]">
            <h1 className="text-[40px] font-medium w-100">
              We do our best facilities provide you
            </h1>
            <p className="w-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
            <button className="text-[white] p-3 w-40 bg-[#24AB70] rounded-[30px]">
              Contact Now
            </button>
          </div>
          <div className="flex flex-wrap w-200 gap-[20px]">
            <article className="flex flex-col items-center justify-center gap-[10px] border border-[2px] p-4 w-45 h-45 rounded-2xl">
              <Computer color="#24AB70" />
              <span>Private Workspace</span>
            </article>
            <article className="flex flex-col items-center justify-center gap-[10px] border border-[2px] p-4 w-45 h-45 rounded-2xl">
              <Car color="#24AB70" />
              <span>Parking Area</span>
            </article>
            <article className="flex flex-col items-center justify-center gap-[10px] border border-[2px] p-4 w-45 h-45 rounded-2xl">
              <Coffee color="#24AB70" />
              <span>Breakfast</span>
            </article>
            <article className="flex flex-col items-center justify-center gap-[10px] border border-[2px] p-4 w-45 h-45 rounded-2xl">
              <Wifi color="#24AB70" />
              <span>Free Wifi</span>
            </article>
            <article className="flex flex-col items-center justify-center gap-[10px] border border-[2px] p-4 w-45 h-45 rounded-2xl">
              <BellElectric color="#24AB70" />
              <span>Free Electricity</span>
            </article>
            <article className="flex flex-col items-center justify-center gap-[10px] border border-[2px] p-4 w-45 h-45 rounded-2xl">
              <PenTool color="#24AB70" />
              <span>Swimming Pool</span>
            </article>
            <article className="flex flex-col items-center justify-center gap-[10px] border border-[2px] p-4 w-45 h-45 rounded-2xl">
              <SplitSquareHorizontal color="#24AB70" />
              <span>exercise Space</span>
            </article>
            <article className="flex flex-col items-center justify-center gap-[10px] border border-[2px] p-4 w-45 h-45 rounded-2xl">
              <BluetoothSearching color="#24AB70" />
              <span>Other Service</span>
            </article>
          </div>
        </section>
      </div>

      <div className="block md:hidden flex flex-col gap-6 p-4">
        {/* Заголовок и текст */}
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-medium text-center">
            We do our best facilities provide you
          </h1>
          <p className="text-sm text-gray-600 text-center max-w-xs mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
          <button className="bg-[#24AB70] text-white py-2 px-6 rounded-[30px] mx-auto">
            Contact Now
          </button>
        </div>

        {/* Список услуг */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: <Computer color="#24AB70" />, label: "Private Workspace" },
            { icon: <Car color="#24AB70" />, label: "Parking Area" },
            { icon: <Coffee color="#24AB70" />, label: "Breakfast" },
            { icon: <Wifi color="#24AB70" />, label: "Free Wifi" },
            {
              icon: <BellElectric color="#24AB70" />,
              label: "Free Electricity",
            },
            { icon: <PenTool color="#24AB70" />, label: "Swimming Pool" },
            {
              icon: <SplitSquareHorizontal color="#24AB70" />,
              label: "Exercise Space",
            },
            {
              icon: <BluetoothSearching color="#24AB70" />,
              label: "Other Service",
            },
          ].map((item, idx) => (
            <article
              key={idx}
              className="flex flex-col items-center justify-center gap-2 border border-[#24AB701A] p-4 rounded-2xl bg-white dark:bg-[#1f1f1f]"
            >
              {item.icon}
              <span className="text-xs text-center">{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section3;
