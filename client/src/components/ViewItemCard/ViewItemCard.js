import React, { useState, useEffect } from "react";
import { notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loadProductListAction } from "../../redux/actions/productActions"; // Import your action to load products
import { resetProductList } from "../../redux/slices/productSlice"; // Import your reset action

const ViewItemCard = () => {
  const [filteredProduct, setFilteredProduct] = useState(null);
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();
  const productState = useSelector((state) => state.products); // Get products from Redux

  // Extract `id` from the URL query parameters
  const queryString = window.location.search;
  const queryParams = new URLSearchParams(queryString);
  const _id = queryParams.get("id");

  const openNotificationWithIcon = (type, message, description) => {
    notification[type]({
      message,
      description,
    });
  };

  // Fetch product list on component mount
  useEffect(() => {
    dispatch(loadProductListAction()); // Load product list into Redux store

    return () => {
      dispatch(resetProductList()); // Reset product list when the component unmounts
    };
  }, [dispatch]);

  // Filter the product based on the id from the URL
  useEffect(() => {
    if (productState.productList.length > 0) {
      const product = productState.productList.find((product) => product.id === _id);
      setFilteredProduct(product);
    }
  }, [_id, productState.productList]);

  const addCart = (id, image, name, price) => {
    const oldCart = sessionStorage.getItem("cart")
      ? JSON.parse(sessionStorage.getItem("cart"))
      : [];

    const existingItemIndex = oldCart.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {
      oldCart[existingItemIndex] = { id, image, name, price, count };
      openNotificationWithIcon(
        "success",
        "Updated!",
        "Updated product successfully added to your shopping cart."
      );
    } else {
      oldCart.push({ id, image, name, price, count });
      openNotificationWithIcon(
        "success",
        "Product Added!",
        "Product successfully added to your shopping cart."
      );
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
        <p className="text-center text-[20px] text-[#E4552D]">Product not found</p>
      )}
    </div>
  );
};

export default ViewItemCard;
