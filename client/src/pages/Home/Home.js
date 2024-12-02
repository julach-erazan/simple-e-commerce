import React from "react";
import Footer from "../../components/Footer/Footer";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";

const Home = () => {
  return (
    <div className="w-full">
      <div className="banner w-full min-w-[350px] h-[600px] flex justify-end items-center">
        <div className="w-full md:w-[35%] h-full flex flex-col justify-end lg:justify-center items-center pb-[100px] lg:pb-0">
          <h1 className="w-full text-[35px] text-center  md:text-[70px] text-[#fff] font-bold px-[10px]">
            LIVE YOUR LIFE IN COLOR
          </h1>
          <a href="/newarrivals">
            <button className="w-[120px] h-[40px] bg-[#fff] hover:bg-[#2F3C7E] mt-[20px] text-[#2F3C7E] hover:text-[#f4f4f4] font-semibold">
              Shop Now
            </button>
          </a>
        </div>
      </div>

      <div className="w-full h-[600px] flex flex-col justify-center items-center p-[20px]">
        <h1 className="w-full text-[30px] text-[#2F3C7E] font-bold">
          New arrivals
        </h1>
        <div className="w-full min-w-[350px] h-[400px] mt-[25px] overflow-hidden">
          <ImageCarousel />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
