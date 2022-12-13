import React from "react";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";

import { CgProfile } from "react-icons/cg";
import { BsCreditCard2Back} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ButtomTabNavigation = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="h-44 w-full relative"></div>
      <div className=" absolute top-[92vh]  w-full  flex  justify-between px-5 py-4 rounded-sm  lg:w-[100vh] bg-slate-900  text-white ">
        <div className=" ">
          <span onClick={()=>navigate("/home")} className="text-2xl text-red-500">
            <AiFillHome />
          </span>
        </div>
        <div className=" ">
          <span onClick={()=>navigate("/challange")} className="text-2xl text-red-500">
            <AiFillHome />
          </span>
        </div>
        <div className=" ">
          <span className="text-2xl text-red-500">
            <BsCreditCard2Back />
          </span>
        </div>
        <div className=" ">
          <span className="text-2xl text-red-500">
            <AiOutlineShoppingCart />
          </span>
        </div>
        <div className=" ">
          <span onClick={()=> navigate("/profile")} className="text-2xl text-red-500">
            <CgProfile />
          </span>
        </div>
      </div>
    </>
  );
};

export default ButtomTabNavigation;
