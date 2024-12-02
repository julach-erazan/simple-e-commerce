import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const [products, setProducts] = useState([]);
  const currencySymbol = sessionStorage.getItem("currencySymbol");

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

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
          {products.map((data) => (
            <li key={data.id} className="w-[300px] h-[400px]">
              <a href={`/product?id=${data.id}`}>
                <div className="w-[300px] h-[400px] flex flex-col justify-center items-center border-[5px] border-solid border-[#cacafa] hover:border-[5px] hover:border-solid hover:border-[#2F3C7E]">
                  <img
                    src={data.image}
                    alt="produccts"
                    className="w-[280px] h-[280px]"
                  />
                  <div className="w-full h-[90px] flex justify-between items-center p-[10px]">
                    <h1 className="w-[70%] h-full text-[#2F3C7E] flex justify-center items-center">
                      {data.title}
                    </h1>
                    <h1 className="w-[20%] h-full text-[#E4552D] font-bold flex justify-center items-center">
                      {currencySymbol}
                      {data.price}
                    </h1>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </Slider>
      </ul>
    </div>
  );
};

export default ImageCarousel;
