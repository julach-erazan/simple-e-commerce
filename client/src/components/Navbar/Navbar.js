import React, { useState } from "react";
import {
  MenuOutlined,
  CloseOutlined,
  SearchOutlined,
  BellOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [onSearch, setOnSearch] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();
  const { itemCount } = useSelector((state) => state.cart);

  // var queryString = window.location.search;
  // var queryParams = new URLSearchParams(queryString);

  const Links = [
    {
      name: "NEW ARRIVALS",
      link: "/newarrivals",
    },
    {
      name: "T-SHIRTS",
      link: "/tshirts",
    },
    {
      name: "CLOTHS",
      link: "/cloths",
    },
    {
      name: "JEVELERY",
      link: "/jewelery",
    },
  ];

  const handleSearch = () => {
    setOnSearch(!onSearch);

    if (showNav) {
      setShowNav(false);
      setOnSearch(false);
    }
  };

  //Show Nav
  const handleNav = () => {
    setShowNav(!showNav);
  };

  //Close Nav
  const handleClose = () => {
    setShowNav(false);
  };

  return (
    <nav className="navbar w-full min-w-[350px] h-[50px] lg:h-[70px] flex justify-start lg:justify-center items-center pl-[10px] fixed top-0 bg-[#fff] text-[#2F3C7E] drop-shadow z-10">
      <button
        className={`w-[40px] h-[40px] visible lg:hidden
        ${showNav ? "hidden" : "flex"}
        `}
        onClick={handleNav}
      >
        <MenuOutlined className="text-[30px]" />
      </button>
      <div className="w-full lg:h-[70px] flex justify-evenly items-center">
        <div className="w-[70%] min-w-[90px] lg:w-[15%] h-[50px] flex justify-center items-center cursor-pointer">
          <div onClick={() => navigate("/")}>
            <h1 className="text-[25px] font-bold">THE GIRLS</h1>
          </div>
        </div>
        <div
          className={`lg:w-[60%] lg:h-[50px] lg:mx-[10px] lg:flex flex-col lg:flex-row justify-center items-center lg:relative lg:bg-[#00000000]
          ${
            showNav
              ? "w-screen min-w-[350px] h-screen text-[#2F3C7E] flex fixed z-30 top-0 left-0 bg-[#f4f4f4]"
              : "hidden"
          }
          `}
        >
          <div className="w-full h-[100px] flex justify-end items-center lg:hidden bg-[#f4f4f4] pr-[20px]">
            <button onClick={handleClose}>
              <CloseOutlined className="text-[30px] text-[#ff0000]" />
            </button>
          </div>
          <div className="w-full h-full flex flex-wrap-reverse lg:flex-nowrap justify-center items-center">
            <ul className="w-full lg:w-[80%] h-[80%] flex flex-col lg:flex-row justify-evenly items-center cursor-pointer">
              {Links.map((data) => (
                <li key={data.name}>
                  <div onClick={() => navigate(data.link)}>
                    <h1
                      className={`font-semibold hover:text-[#E4552D] mx-[10px]`}
                    >
                      {data.name}
                    </h1>
                  </div>
                </li>
              ))}
            </ul>
            <form
              className={`h-[40px] flex justify-evenly items-center border-[1px] border-solid border-[#2f3c7e] bg-white ${
                onSearch || showNav ? "visible" : "hidden"
              } ${showNav ? "w-[50%]" : "w-[200px]"}`}
            >
              <input
                type="text"
                name="search"
                id="search"
                placeholder="search"
                className={`h-[35px] text-[#2F3C7E] border-none focus:border-none m-0
              ${showNav ? "w-full" : "w-[150px]"}
              `}
              />
              <button
                type="submit"
                className="w-[40px] h-[40px] flex justify-center items-center"
              >
                <h1 className="text-[#2F3C7E]">OK</h1>
              </button>
            </form>
          </div>
        </div>
        <div className="w-[150px] lg:w-[15%] h-[50px] text-[25px] flex justify-evenly items-center">
          <button
            className="w-[50px] h-[50px] hidden lg:flex justify-center items-center"
            onClick={handleSearch}
          >
            <SearchOutlined />
          </button>

          <p className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
            <BellOutlined />
          </p>

          <button className="w-[50px] h-[50px] flex justify-center items-center">
            <div onClick={() => navigate("/login")}>
              <UserOutlined />
            </div>
          </button>

          <div
            onClick={() => navigate("/cart")}
            className="w-[50px] h-[50px] flex justify-center items-center pr-[12px] cursor-pointer"
          >
            <div className="w-[16px] h-[16px] rounded-[50%] bg-[#E4552D] text-[#fff] text-[10px] flex justify-center items-center relative top-[-5px] left-[30px]">
              <h1>{itemCount}</h1>
            </div>
            <ShoppingCartOutlined />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
