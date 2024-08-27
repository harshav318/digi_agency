import React from "react";
import HeroImg from "../../assets/website/team.png";
const Hero = () => {
  return (
    <>
      <main className="bg-white dark:bg-gray-950 dark:text-white duration-300">
        <div className="container min-h-[620px] flex py-5 sm:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
            {/* Image Sec */}
            <div className="order-1 sm:order-2 relative">
              <img src={HeroImg} alt="" className="w-full sm:max-w-[280px] md:max-w-[430px]" />
              <div
                data-aos="slide-right"
                className="absolute -bottom-5 -right-[0.70rem]
                px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
              >
                <p className="text-gray-500 text-sm ">⭐Projects</p>
                <h1 className="font-bold">
                  600+ <span className="font-normal">Done</span>
                </h1>
              </div>
            </div>
            {/*Text Content Section */}
            <div className="space-y-5 order-2 sm:order-1 xl:pr-40">
              <h1  data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}>
                Building Brands in the{" "}<span className="text-primary">Digital Agency</span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                Your partner in navigating the ever-evolving landscape of
                digital marketing. From conceptualization to execution, we craft
                tailored solutions that drive results and elevate your brand to
                new heights.
              </p>
              <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn"
            >
              Learn More
            </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
