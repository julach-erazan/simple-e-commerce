import React, { useEffect, useState } from "react";
import { CloseOutlined } from '@ant-design/icons';
import Footer from "../../components/Footer/Footer";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [itemPrice, setItemPrice] = useState(0);
  const [vat, setVat] = useState(0);

  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const currencySymbol = sessionStorage.getItem("currencySymbol");

  useEffect(() => {
    setItemCount(totalCount);
    setItemPrice(totalPrice.toFixed(2));
    if (totalPrice != 0) {
      setVat(totalPrice + 11.57);
    }
  });

  //Get Items List
  const handleGetCartData = () => {
    const data = JSON.parse(sessionStorage.getItem("cart"));
    if (data) {
      setCart(data);

      setTotalCount(
        data.reduce((acc, product) => acc + parseFloat(product.count), 0)
      ); //All items total count

      setTotalPrice(
        data.reduce(
          (acc, product) =>
            acc + parseFloat(product.count) * parseFloat(product.price),
          0
        )
      ); //Total items price
    }
  };

  setInterval(handleGetCartData);

  //Delete
  const handleDelete = (index) => {
    cart.splice(index, 1);
    let cartData = JSON.stringify(cart);
    sessionStorage.setItem("cart", cartData);
  };

  //Checkout
  const handleCheckOut = () => {
    //fuction
  };

  return (
    <div className="w-full min-w-[350px] pt-[100px]">
      <h1 className="text-[30px] text-[#2F3C7E] text-center font-bold mb-[20px]">
        Shopping cart
      </h1>
      <div className="w-full lg:h-[650px] flex flex-col lg:flex-row justify-center items-center">
        <div className="w-[90%] lg:w-[70%] h-full lg:px-[25px] overflow-y-scroll">
          <div className="w-full mb-[20px]">
            {cart[0] ? (
              <div className="w-full border-t-[1px] border-solid border-[#ddd]">
                <ul>
                  {cart.map((product, index) => (
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
                        <h1 className="w-[50px] lg:w-[20%] text-center">
                          {product.count}
                        </h1>
                        <h1 className="w-[50px] lg:w-[20%] text-center">
                          {currencySymbol}{" "}
                          {(product.count * product.price).toFixed(2)}
                        </h1>
                        <div className="w-[50px] lg:w-[20%] flex justify-center items-center">
                          <button
                            className="w-[30px] h-[30px] flex justify-center items-center"
                            onClick={() => handleDelete(index)}
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
                {currencySymbol}
                {itemPrice}
              </h2>
            </div>
            <div className="w-full flex justify-between items-center border-t-[1px] border-[#ddd] pt-[10px] mb-[20px]">
              <h2 className="text-[20px] font-semibold">Total (tax incl.)</h2>
              <h2 className="text-[20px] font-semibold">
                {currencySymbol}
                {vat.toFixed(2)}
              </h2>
            </div>
            <button
              className={`w-full h-[45px] text-[#fff] font-semibold text-center bg-[#2F3C7E]
              ${
                cart[0] ? "hover:bg-[#E4552D]" : "cursor-not-allowed opacity-50"
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
      <Footer/>
    </div>
  );
};

export default Cart;
