import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { GrShop } from "react-icons/gr";
import { MdMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = (props) => {
  const [onSearch, setOnSearch] = useState(false);
  const [count, setCount] = useState(0);
  const [showNav, setShowNav] = useState(false);

  var queryString = window.location.search;
  var queryParams = new URLSearchParams(queryString);
  var data = queryParams.get("data");

  const Links = [
    {
      name: "NEW ARRIVALS",
      link: "/newarrivals?data=1",
    },
    {
      name: "T-SHIRTS",
      link: "/tshirts?data=1",
    },
    {
      name: "CLOTHS",
      link: "/cloths?data=1",
    },
    {
      name: "JEVELERY",
      link: "/jewelery?data=1",
    },
  ];

  const handleSearch = () => {
    setOnSearch(!onSearch);

    if (showNav) {
      setShowNav(false);
      setOnSearch(false);
    }
  };

  const searchRoute = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const searchKey = formData.get("search");

    window.location = `/search?key=${searchKey}&data=1`;
  };

  const handleCartCount = () => {
    if (sessionStorage.getItem("cart")) {
      const cart = JSON.parse(sessionStorage.getItem("cart"));
      setCount(cart.length);
    }
  };

  setInterval(handleCartCount);

  //Show Nav
  const handleNav = () => {
    setShowNav(!showNav);
  };

  //Close Nav
  const handleClose = () => {
    setShowNav(false);
  };

  return (
    <nav
      className={`navbar w-full min-w-[350px] h-[50px] lg:h-[70px] flex justify-start lg:justify-center items-center pl-[10px] ${
        props.scrollPosition >= 45
          ? "fixed top-0 bg-[#fff] drop-shadow z-10"
          : " absolute z-10"
      } ${
        data || props.scrollPosition >= 45 ? "text-[#2F3C7E]" : "text-[#fff]"
      }`}
    >
      <button
        className={`w-[40px] h-[40px] visible lg:hidden
        ${showNav ? "hidden" : "flex"}
        `}
        onClick={handleNav}
      >
        <MdMenu className="text-[40px]" />
      </button>
      <div className="w-full lg:h-[70px] flex justify-evenly items-center">
        <div className="w-[70%] min-w-[90px] lg:w-[15%] h-[50px] flex justify-center items-center">
          <a href="/">
            <h1 className="text-[25px] font-bold">THE SEVEN</h1>
          </a>
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
              <IoCloseSharp className="text-[40px] text-[#ff0000]" />
            </button>
          </div>
          <div className="w-full h-full flex flex-wrap-reverse lg:flex-nowrap justify-center items-center">
            <ul className="w-full lg:w-[80%] h-[80%] flex flex-col lg:flex-row justify-evenly items-center">
              {Links.map((data) => (
                <li key={data.name}>
                  <a href={data.link}>
                    <h1
                      className={`font-semibold hover:text-[#E4552D] mx-[10px]`}
                    >
                      {data.name}
                    </h1>
                  </a>
                </li>
              ))}
            </ul>
            <form
              onSubmit={searchRoute}
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
            <IoSearchOutline />
          </button>

          <a
            href="#"
            className="w-[50px] h-[50px] flex justify-center items-center"
          >
            <IoNotificationsOutline />
          </a>

          <button className="w-[50px] h-[50px] flex justify-center items-center">
            <a href="/login?data=1">
              <LuUser2 />
            </a>
          </button>

          <a
            href="/cart?data=1"
            className="w-[50px] h-[50px] flex justify-center items-center pr-[12px]"
          >
            <div className="w-[16px] h-[16px] rounded-[50%] bg-[#E4552D] text-[#fff] text-[10px] flex justify-center items-center relative top-[-5px] left-[30px]">
              <h1>{count}</h1>
            </div>
            <GrShop />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
