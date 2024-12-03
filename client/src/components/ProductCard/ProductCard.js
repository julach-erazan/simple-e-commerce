import React from "react";

const ProductCard = (props) => {

  return (
    <div>
      <a href={`/ViewItem?id=${props.data.id}`}>
        <div className="w-[300px] h-[400px] flex flex-col justify-center items-center border-[5px] border-solid border-[#cacafa] hover:border-[5px] hover:border-solid hover:border-[#2F3C7E]">
          <img
            src={props.data.imageURL}
            alt="produccts"
            className="w-[280px] h-[280px] object-cover"
          />
          <div className="w-full h-[90px] flex justify-between items-center p-[10px]">
            <div className="w-[70%] h-full text-[#2F3C7E] flex flex-col justify-center items-center">
              <h1 className="text-[16px] font-bold text-center">{props.data.name}</h1>
              <p className="text-[13px] text-center text-[#777]">{props.data.description}</p>
            </div>
            <p></p>
            <h1 className="w-[20%] h-full text-[#E4552D] font-bold flex justify-center items-center">
              {props.data.price} $
            </h1>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
