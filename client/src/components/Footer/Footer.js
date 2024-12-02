import React from "react";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogo } from "react-icons/pi";
import { SlSocialYoutube } from "react-icons/sl";
import { ImPinterest2 } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const handleNewsLetter = (e) => {
    e.preventDefault();
    //api here
  };

  return (
    <div className="w-full min-w-[350px] bg-[#2F3C7E] text-[#fff] flex flex-wrap justify-evenly items-center p-[20px] mt-[30px]">
      <div className="w-[50%] md:w-[150px] h-[250px] p-[10px]">
        <h1 className="text-[18px] font-semibold">Contact us</h1>
        <h1 className="text-[18px] font-semibold mt-[20px]">Follow us!</h1>
        <div className="max-w-[200px] text-[30px] font-semibold mt-[20px] flex justify-between flex-wrap">
          <a href="#">
            <CiFacebook className="m-[5px]" />
          </a>
          <a href="#">
            <PiInstagramLogo className="m-[5px]" />
          </a>
          <a href="#">
            <SlSocialYoutube className="m-[5px]" />
          </a>
          <a href="#">
            <ImPinterest2 className="text-[25px] m-[5px]" />
          </a>
        </div>
      </div>
      <div className="w-[50%] md:w-[150px] h-[250px] p-[10px]">
        <h1 className="text-[18px] font-semibold">About us</h1>
        <div className="w-[70%] text-[14px] font-semibold flex flex-col mt-[20px]">
          <a href="#">
            <h1 className="hover:underline">Our mission</h1>
          </a>
          <a href="#">
            <h1 className="hover:underline">Our philosophy</h1>
          </a>
          <a href="#">
            <h1 className="hover:underline">Our team</h1>
          </a>
          <a href="#">
            <h1 className="hover:underline">Customer reviews</h1>
          </a>
        </div>
      </div>
      <div className="w-full md:w-[250px] h-[250px] p-[10px]">
        <h1 className="text-[18px] font-semibold">Useful links</h1>
        <div className="w-[70%] text-[14px] font-semibold flex flex-col mt-[20px]">
          <a href="#">
            <h1 className="hover:underline">Delivery costs</h1>
          </a>
          <a href="#">
            <h1 className="hover:underline">Exchange and return</h1>
          </a>
          <a href="#">
            <h1 className="hover:underline">Size guides</h1>
          </a>
          <a href="#">
            <h1 className="hover:underline">Our guides and tutorials</h1>
          </a>
          <a href="#">
            <h1 className="hover:underline">Privacy notice</h1>
          </a>
          <a href="#">
            <h1 className="hover:underline">Terms and conditions</h1>
          </a>
        </div>
      </div>
      <div className="w-full md:w-[250px] h-[250px] p-[10px]">
        <h1 className="text-[18px] font-semibold">
          Suscribe to our newsletter!
        </h1>
        <h2 className="text-[14px] mt-[20px]">
          You may unsubscribe at any moment. For that purpose, please find our
          contact info in the legal notice.
        </h2>
        <form
          action=""
          className="w-full flex border-[1px] border-[#fff] mt-[50px]"
          onSubmit={handleNewsLetter}
        >
          <input
            type="email"
            name=""
            id=""
            className="w-full bg-[#ffffff00] border-none focus:border-none m-0"
            placeholder="My e-mail"
          />
          <button className="w-[40px] h-[40px]" type="submit">
            <AiOutlineMail className="text-[25px]" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
