import React, { useState } from "react";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";

import { CgProfile } from "react-icons/cg";
import { BsCreditCard2Back } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ButtomTabNavigation = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative h-16 ">
        <div className="fixed bottom-0  w-full  flex  justify-between     rounded-sm  lg:w-full  h-16 items-center  text-white">
          <div className="  flex-1 bg-slate-900 h-16 flex    justify-center  items-center ">
            <span
              onClick={() => navigate("/home")}
              className="text-2xl text-red-500"
            >
              <AiFillHome />
            </span>
          </div>
          <div className="flex-1 bg-slate-900 h-16 flex  justify-center     items-center ">
            <span onClick={() => navigate("/challange")} className="text-2xl ">
              <img className="text-red-500" src="/picture/Vector.svg" alt="" />
            </span>
          </div>
          <div className="  absolute  flex justify-center items-center rounded-full top-[-40px] left-[41vw] bg-slate-900 w-[70px] h-[70px]  ">
            <span
              onClick={() => navigate("/wallet")}
              className="text-2xl text-red-500 "
            >
              <BsCreditCard2Back />
            </span>
          </div>
          <div className="flex-1 bg-slate-900 h-full flex  justify-center       items-center "></div>
          <div className="flex-1 bg-slate-900 h-16 flex  justify-center        items-center ">
            <span
              onClick={() => navigate("/shop")}
              className="text-2xl text-red-500"
            >
              <AiOutlineShoppingCart />
            </span>
          </div>
          <div className="flex-1 bg-slate-900 h-16 flex  justify-center       items-center px-">
            <span
              onClick={() => navigate("/profile")}
              className="text-2xl text-red-500"
            >
              <CgProfile />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtomTabNavigation;
