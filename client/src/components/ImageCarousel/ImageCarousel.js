import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../ProductCard/ProductCard";

const ImageCarousel = (props) => {
  const currencySymbol = sessionStorage.getItem("currencySymbol");

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "none",
        }}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: "none" }} />;
  }

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <ul className="min-w-[1000px] w-full pl-[7%]">
        <Slider {...settings}>
          {props.productList.map((data) => (
            <li key={data.id} className="w-[300px] h-[400px]">
              <ProductCard data={data}/>
            </li>
          ))}
        </Slider>
      </ul>
    </div>
  );
};

export default ImageCarousel;
