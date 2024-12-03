import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import ViewItemCard from "../../components/ViewItemCard/ViewItemCard";

const ViewItem = () => {

  return (
    <div className="w-full min-w-[350px] pt-[100px]">
      {/* <ul>
        {products.map((product, index) => (
          <li
            key={index}
            className="w-full flex flex-col lg:flex-row justify-center items-center p-[25px]"
          >
            
          </li>
        ))}
      </ul> */}
      <ViewItemCard/>
      <Footer/>
    </div>
  );
};

export default ViewItem;
