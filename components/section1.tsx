import {
  Calendar,
  LocationEditIcon,
  PlayCircle,
  Search,
  User2Icon,
} from "lucide-react";

const Section1 = () => {
  return (
    <>
      <div className="hidden md:block">
        <section className="bg-[#24AB700A] p-4  rounded-[30px] w-full h-auto flex items-center justify-center gap-[100px]">
          <div className="flex flex-col items-start gap-[30px]">
            <h1 className="text-[60px] w-140 font-medium">
              Find your perfect place to stay
            </h1>
            <p className="text-[#555555] w-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="flex items-center gap-[10px] p-2">
              <PlayCircle size={30} />
              <p>Watch video</p>
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
                <p className="text-[19px]">Location</p>
                <span>United States</span>
              </div>
            </div>
            <div className="border h-20"></div>
            <div className="flex items-start gap-[10px]">
              <Calendar color="#24AB70" />
              <div className="flex flex-col">
                <p className="text-[19px]">Chack in</p>
                <span>10 Jun 2021</span>
              </div>
            </div>
            <div className="border h-20"></div>
            <div className="flex items-start gap-[10px]">
              <Calendar color="#24AB70" />
              <div className="flex flex-col">
                <p className="text-[19px]">Chack out</p>
                <span>19 May 2009</span>
              </div>
            </div>
            <div className="border h-20"></div>
            <div className="flex items-start gap-[10px]">
              <User2Icon color="#24AB70" />
              <div className="flex flex-col">
                <p className="text-[19px]">Rooms for</p>
                <span>1 room, 2 guests</span>
              </div>
            </div>
            <div className="bg-[#24AB70] p-2 h-full w-50 rounded-[30px] flex items-center gap-[20px] text-[white]">
              <Search />
              <span>Search...</span>
            </div>
          </section>
        </div>
      </div>

      <div className="block md:hidden flex flex-col gap-8 p-4">
        {/* Hero Section */}
        <section className="bg-[#24AB700A] p-4 rounded-[30px] w-full flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-[28px] sm:text-[32px] font-medium">
              Find your perfect place to stay
            </h1>
            <p className="text-[#555555] text-sm sm:text-base max-w-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="flex items-center gap-2 cursor-pointer">
              <PlayCircle size={24} />
              <p className="text-sm font-medium">Watch video</p>
            </div>
          </div>
          <div className="w-full flex justify-center mt-4">
            <img className="w-64 sm:w-80" src="/image.svg" alt="Hero" />
          </div>
        </section>

        {/* Search Section */}
        <section className="w-full p-4 rounded-[30px] bg-white dark:bg-[#1f1f1f] border dark:border-gray-700 flex flex-col gap-4 shadow-md">
          {/* Location */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LocationEditIcon color="#24AB70" />
              <div className="flex flex-col">
                <p className="text-sm font-medium">Location</p>
                <span className="text-xs">United States</span>
              </div>
            </div>
          </div>

          {/* Check-in / Check-out / Rooms */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar color="#24AB70" />
                <div className="flex flex-col">
                  <p className="text-sm font-medium">Check in</p>
                  <span className="text-xs">10 Jun 2021</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar color="#24AB70" />
                <div className="flex flex-col">
                  <p className="text-sm font-medium">Check out</p>
                  <span className="text-xs">19 May 2009</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <User2Icon color="#24AB70" />
                <div className="flex flex-col">
                  <p className="text-sm font-medium">Rooms for</p>
                  <span className="text-xs">1 room, 2 guests</span>
                </div>
              </div>
              <button className="bg-[#24AB70] text-white px-4 py-2 rounded-[30px] flex items-center gap-2">
                <Search />
                <span className="text-xs">Search</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Section1;
