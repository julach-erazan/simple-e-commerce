import React, { useCallback, useEffect, useState } from "react";
import { CloseOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { handleProductCount, productCountTypes, removeItem } from "../../redux/slices/cartSlice";

const Cart = () => {
  const [itemPrice, setItemPrice] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  const [vat, setVat] = useState(0);

  const { productsList } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const configureData = useCallback(() => {
    if (productsList && productsList.length > 0) {
      const totalCount = productsList.reduce(
        (acc, product) => acc + product.count,
        0
      );
      const totalPrice = productsList.reduce(
        (acc, product) =>
          acc + product.count * product.price,
        0
      );

      setItemCount(totalCount);
      setItemPrice(totalPrice.toFixed(2));
      setVat( totalPrice !== 0 ? (totalPrice + 11.57).toFixed(2) : 0);
    } else {
      setItemCount(0);
      setItemPrice(0);
      setVat(0);
    }
  },[productsList])

  useEffect(() => {
    configureData();
    // const interval = setInterval(configureData, 1000);
    // return () => clearInterval(interval);
  }, [configureData]);

  const handleDelete = (id) => {
    dispatch(removeItem(id))
    configureData();
  };

  const handleIncrease = (id) => {
    dispatch(handleProductCount({type: productCountTypes.INCREASE, id}))
  };

  const handleDecrease = (id) => {
    dispatch(handleProductCount({type: productCountTypes.DECREASE, id}))
  };

  const handleCheckOut = () => {
    if (productsList.length > 0) {
      console.log("Proceeding to checkout...");
    }
  };

  return (
    <div className="w-full min-w-[350px] pt-[100px]">
      <h1 className="text-[30px] text-[#2F3C7E] text-center font-bold mb-[20px]">
        Shopping cart
      </h1>
      <div className="w-full lg:h-[650px] flex flex-col lg:flex-row justify-center items-center">
        <div className="w-[90%] lg:w-[70%] h-full lg:px-[25px] overflow-y-scroll">
          <div className="w-full mb-[20px]">
            {productsList.length > 0 ? (
              <div className="w-full border-t-[1px] border-solid border-[#ddd]">
                <ul>
                  {productsList.map((product, index) => (
                    <li key={index}>
                      <div className="w-full min-h-[120px] text-[12px] md:text-[15px] border-b-[1px] border-solid border-[#ddd] flex justify-evenly items-center p-[10px]">
                        <div className="w-[60px] lg:w-[20%] flex justify-center items-center">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-[50px] lg:w-[70px] h-[60px] lg:h-[80px]"
                          />
                        </div>
                        <h1 className="w-[100px] lg:w-[20%] flex text-wrap px-[10px]">
                          {product.title}
                        </h1>
                        <div className="w-[50px] lg:w-[20%] flex justify-center items-center">
                          <button
                            className="px-[5px] text-[#2F3C7E] font-bold"
                            onClick={() => handleDecrease(product.id)}
                          >
                            <MinusOutlined />
                          </button>
                          <span>{product.count}</span>
                          <button
                            className="px-[5px] text-[#2F3C7E] font-bold"
                            onClick={() => handleIncrease(product.id)}
                          >
                            <PlusOutlined />
                          </button>
                        </div>
                        <h1 className="w-[50px] lg:w-[20%] text-center">
                          {(product.count * product.price).toFixed(2)} $
                        </h1>
                        <div className="w-[50px] lg:w-[20%] flex justify-center items-center">
                          <button
                            className="w-[30px] h-[30px] flex justify-center items-center"
                            onClick={() => handleDelete(product.id)}
                          >
                            <CloseOutlined />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <h1 className="text-[15px] text-[#2F3C7E] font-semibold mb-[10px]">
                There are no more items in your cart
              </h1>
            )}
          </div>
          <a href="/">
            <h1 className="text-[15px] text-[#2F3C7E] hover:text-[#E4552D] hover:underline font-bold bb-[20px]">
              Continue shopping
            </h1>
          </a>
        </div>
        <div className="w-[90%] lg:w-[30%] max-w-[550px]  h-full flex flex-col justify-between items-center lg:px-[25px] mt-[50px] lg:mt-0">
          <div className="w-full h-[260px] text-[#E4552D] bg-[#EEEDED] p-[20px] flex flex-col justify-evenly">
            <h1 className="text-[30px] text-[#2F3C7E] font-bold mb-[20px]">
              Your cart
            </h1>
            <div className="w-full flex justify-between items-center">
              <h2 className="text-[15px] font-semibold">{itemCount} items</h2>
              <h2 className="text-[15px] text-[#000] font-semibold">
                {itemPrice} $
              </h2>
            </div>
            <div className="w-full flex justify-between items-center border-t-[1px] border-[#ddd] pt-[10px] mb-[20px]">
              <h2 className="text-[20px] font-semibold">Total (tax incl.)</h2>
              <h2 className="text-[20px] font-semibold">{vat} $</h2>
            </div>
            <button
              className={`w-full h-[45px] text-[#fff] font-semibold text-center bg-[#2F3C7E]
              ${
                productsList.length > 0
                  ? "hover:bg-[#E4552D]"
                  : "cursor-not-allowed opacity-50"
              }
              `}
              onClick={handleCheckOut}
            >
              Checkout
            </button>
          </div>
          <div className="w-full min-h-[330px] max-h-[370px] bg-[#EEEDED] p-[20px] mt-[30px] lg:mt-0">
            <h1 className="text-[30px] text-[#2F3C7E] font-bold mb-[10px]">
              Informations
            </h1>
            <h2 className="text-[15px] text-[#2F3C7E] font-bold mb-[10px]">
              Free delivery from $150
            </h2>
            <h3 className="text-[15px] text-[#2F3C7E]">
              Secure payment <br />
              <br />
              Same day shipping on all orders placed before 12pm, excluding
              weekends and public holidays*
              <br />
              <br /> Free returns & 30-day exchanges*
              <br />
              <br /> (*) Metropolitan France only
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
