import React from "react";
import { AiFillCamera } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import {
  MdOutlineKeyboardBackspace,
  MdOutlineNavigateNext,
} from "react-icons/md";
import { GrFormNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";

const Setting = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-5 max-w-7xl m-auto px-6">
      <div className="pt-2 flex  justify-between items-center">
        <span
          onClick={() => navigate("/profile")}
          className=" text-white text-3xl "
        >
          <MdOutlineKeyboardBackspace />
        </span>
        <span className="text-white text-lg ">Setting</span>
        <span></span>
      </div>

      <div>
        <div className="mt-7 flex justify-center">
          <div className=" rounded-full  bg-gray-700 w-28 h-28 relative ">
            <div className=" flex justify-center pt-6">
              <span className="text-6xl text-white ">
                <CgProfile />
              </span>
            </div>
          </div>
        </div>
        <div className="w-[45px] h-[45px] bg-[#C52410] flex justify-center items-center rounded-full absolute top-[140px]  right-[110px]">
          <span className="text-2xl text-white">
            <AiFillCamera />
          </span>
        </div>
        <div className=" text-center mt-1">
          <button
            onClick={() => navigate("/complectProfile")}
            className="bg-gradient-to-b  from-[#C52410] to-[#E6550A] px-8 py-2 rounded-lg text-white my-1"
          >
            Edit Profile
          </button>
          <h1 className="text-[32px] font-bold text-white ">Mike Tieson</h1>
          <span className="text-sm text-[#BAC5C8] flex justify-center">
            miketieso@gmail.com
          </span>
        </div>
      </div>

      <div className="mt-10 h-[55vh] overflow-y-auto">
        <div className="card w-full modalColur  shadow-xl pb-5">
          <div className="p-4">
            <div
             
              className=" border-[#FFFFFF]  border-b-2 h-16 flex  items-center justify-between"
            >
              <p className=" font-medium text-[20px] text-[#FFFFFF]">
                Notification Setting
              </p>
              <span className="text-3xl text-[#FFFFFF] ">
                <MdOutlineNavigateNext />
              </span>
            </div>
            <div
            onClick={() => navigate("/faq")}
              
              className=" border-[#FFFFFF]  border-b-2 h-16 flex  items-center justify-between"
            >
              <p className=" font-medium  text-[20px] text-[#FFFFFF]">
                Frequently Asked Question
              </p>
              <span className="text-3xl text-[#FFFFFF] ">
                <MdOutlineNavigateNext />
              </span>
            </div>
            <div className=" border-[#FFFFFF] border-b-2 h-16 flex  items-center justify-between">
              <p className="font-medium  text-[20px] text-[#FFFFFF]">Wallet</p>
              <span className="text-3xl text-[#FFFFFF] ">
                <MdOutlineNavigateNext />
              </span>
            </div>
            <div className=" border-[#FFFFFF]  border-b-2 h-16 flex  items-center justify-between">
              <p className="font-medium  text-[20px] text-[#FFFFFF]">
                Add Crypto Wallet
              </p>
              <span className="text-3xl text-[#FFFFFF] ">
                <MdOutlineNavigateNext />
              </span>
            </div>
            <div className=" border-[#FFFFFF]  border-b-2 h-16 flex  items-center justify-between">
              <p className="font-medium  text-[20px] text-[#FFFFFF]">
                Privacy Policy
              </p>
              <span className="text-3xl text-[#FFFFFF] ">
                <MdOutlineNavigateNext />
              </span>
            </div>
            <div className=" border-[#FFFFFF]  border-b-2 h-16 flex  items-center justify-between">
              <p className="font-medium  text-[20px] text-[#FFFFFF]">About</p>
              <span className="text-3xl text-[#FFFFFF] ">
                <MdOutlineNavigateNext />
              </span>
            </div>
            <div onClick={() => navigate("/support")} className=" border-[#FFFFFF]  border-b-2 h-16 flex  items-center justify-between">
              <p className="font-medium  text-[20px] text-[#FFFFFF]">Support</p>
              <span className="text-3xl text-[#FFFFFF] ">
                <MdOutlineNavigateNext />
              </span>
            </div>
            <div onClick={() => signOut(auth)} className=" border-[#FFFFFF]  border-b-2 h-16 flex  items-center justify-between">
              <p className="font-medium  text-[20px] text-[#FFFFFF]">Logout</p>
              <span className="text-3xl text-[#FFFFFF] ">
                <MdOutlineNavigateNext />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
