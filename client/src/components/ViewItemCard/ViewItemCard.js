import React from "react";
import bag from '../../assests/images/bag2.jpg'

const ViewItemCard = () => {

  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center p-[25px]">
      <div className="w-[90%] lg:w-[60%] lg:h-[700px] flex justify-center items-center">
        <img
          src={bag}
          alt="bag"
          className="w-[40%] min-w-[200px] max-h-[60%]"
        />
      </div>
      <div className="w-[90%] lg:w-[40%] min-h-[700px] flex flex-col justify-center items-center p-[25px]">
        <div className="w-full">
          <h1 className="text-[30px] text-[#2F3C7E] font-semibold mb-[20px]">
            hello
          </h1>
        </div>
        <div className="w-full">
          <h1 className="text-[27px] text-[#E4552D] font-semibold mb-[20px]">
            hello
          </h1>
        </div>
        <div className="w-full">
          <h1 className="text-[25px] text-[#2F3C7E] font-bold mb-[20px]">
            hello
          </h1>
        </div>
        <div className="w-full">
          <h2 className="text-[20px] text-[#2F3C7E] mb-[20px]">
            hello
          </h2>
        </div>
        <div className="w-full font-semibold">
          <input
            type="number"
            name="qty"
            id="qty"
            className="w-[20%] h-[50px] text-center border-[1px] border-solid border-[#2F3C7E] m-0"
            value="1"
            // onChange={(e) => setCount(e.target.value)}
            min={1}
          />
          <button
            className="w-[80%] h-[50px] text-[#fff] text-center bg-[#2F3C7E] hover:bg-[#E4552D]"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewItemCard;
