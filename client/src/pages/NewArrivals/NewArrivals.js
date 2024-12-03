import React, { useState } from "react";
import girlsImg from '../../assests/images/girl.jpg'
import ProductCard from "../../components/ProductCard/ProductCard";
import bag from '../../assests/images/bag2.jpg'

const Newarrivals = () => {
  const [productList] = useState([
    {
      id: "1",
      name: "Black Color School Bag",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      price: "2700",
      imageURL: bag,
    },
    {
      id: "2",
      name: "Black Color School Bag",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      price: "2800",
      imageURL: bag,
    },
    {
      id: "3",
      name: "Black Color School Bag",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      price: "2900",
      imageURL: bag,
    },
    {
      id: "4",
      name: "Black Color School Bag",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      price: "3000",
      imageURL: bag,
    },
  ]);

  return (
    <div className="w-full min-w-[350px] flex flex-col justify-center items-center pt-[100px]">
      <div className="lg:w-[1000px] lg:h-[400px] flex flex-wrap justify-evenly items-center mb-[25px]">
        <img
          src={girlsImg}
          alt="banner"
          className="w-[90%] lg:w-[600px] h-full"
        />
        <div className="w-[90%] lg:w-[400px] h-full text-[#fff] bg-[#2F3C7E] flex flex-col justify-center items-start p-[50px]">
          <h1 className="text-[30px] font-bold">New arrivals</h1>
          <h2>
            Designed in France and produced in Europe: our collections are of
            timeless elegance with a modern and original twist. Renewed every
            season, these staple pieces of the male wardrobe are of
            irreproachable quality which only specific, traditional know-how and
            meticulous care can provide.
          </h2>
        </div>
      </div>
      <ul className="w-full flex justify-evenly items-center flex-wrap">
        {productList.map((data) => (
          <li key={data.id} className="mb-[20px]">
            <ProductCard data={data}/>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Newarrivals;
