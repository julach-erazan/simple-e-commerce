import React, { useState, useEffect } from "react";
import bag from "../../assests/images/bag2.jpg";

const ViewItemCard = () => {
  const [filteredProduct, setFilteredProduct] = useState(null);

  // Extract `id` from the URL query parameters
  const queryString = window.location.search;
  const queryParams = new URLSearchParams(queryString);
  const _id = queryParams.get("id");

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

  const [count, setCount] = useState(1);

  // Filter product by ID on component mount
  useEffect(() => {
    const product = productList.find((product) => product.id === _id);
    setFilteredProduct(product);
  }, [_id, productList]);

  const addCart = (id, image, name, price) => {
    const oldCart = sessionStorage.getItem("cart")
      ? JSON.parse(sessionStorage.getItem("cart"))
      : [];

    const existingItemIndex = oldCart.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {
      oldCart[existingItemIndex] = { id, image, name, price, count };
      alert("Updated product successfully added to your shopping cart");
    } else {
      oldCart.push({ id, image, name, price, count });
      alert("Product successfully added to your shopping cart");
    }

    sessionStorage.setItem("cart", JSON.stringify(oldCart));
  };

  return (
    <div className="w-full min-w-[350px]">
      {filteredProduct ? (
        <div className="w-full flex flex-col lg:flex-row justify-center items-center p-[25px]">
          <div className="w-[90%] lg:w-[60%] lg:h-[700px] flex justify-center items-center">
            <img
              src={filteredProduct.imageURL}
              alt={filteredProduct.name}
              className="w-[40%] min-w-[200px] max-h-[60%]"
            />
          </div>
          <div className="w-[90%] lg:w-[40%] min-h-[400px] flex flex-col justify-center items-center p-[25px]">
            <div className="w-full">
              <h1 className="text-[30px] text-[#2F3C7E] font-semibold mb-[20px]">
                {filteredProduct.name}
              </h1>
            </div>
            <div className="w-full">
              <h1 className="text-[27px] text-[#E4552D] font-semibold mb-[20px]">
                {filteredProduct.price} $
              </h1>
            </div>
            <div className="w-full">
              <h2 className="text-[20px] text-[#2F3C7E] mb-[20px]">
                {filteredProduct.description}
              </h2>
            </div>
            <div className="w-full font-semibold">
              <input
                type="number"
                name="qty"
                id="qty"
                className="w-[20%] h-[50px] text-center border-[1px] border-solid border-[#2F3C7E] m-0"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                min={1}
              />
              <button
                className="w-[80%] h-[50px] text-[#fff] text-center bg-[#2F3C7E] hover:bg-[#E4552D]"
                onClick={() =>
                  addCart(
                    filteredProduct.id,
                    filteredProduct.imageURL,
                    filteredProduct.name,
                    filteredProduct.price
                  )
                }
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-[20px] text-[#E4552D]">
          Product not found
        </p>
      )}
    </div>
  );
};

export default ViewItemCard;
