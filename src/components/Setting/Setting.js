import React from "react";
import { AiFillCamera } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { GrFormNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

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
        <div className="w-[45px] h-[45px] bg-[#C52410] flex justify-center items-center rounded-full absolute top-[140px]  right-[100px]">
          <span className="text-2xl text-white">
            <AiFillCamera />
          </span>
        </div>
        <div className=" text-center mt-1">
          <button
            onClick={() => navigate("/complectProfile")}
            className="bg-[#C52410] px-8 py-2 rounded-lg text-white my-1"
          >
            Edit Profile
          </button>
          <h1 className="text-2xl font-bold text-white ">Mike Tieson</h1>
          <span className="text-sm text-white  flex justify-center">
            miketieso@gmail.com
          </span>
        </div>
      </div>

      <div className="mt-10">
        <div className="card w-full bg-base-100 shadow-xl pb-5">
          <div className="p-4">
            <div onClick={()=> navigate("/faq")} className=" border-gray-400 border-b-2 h-12 flex  items-center justify-between">
              <p className=" font-bold uppercase">Faq</p>
              <span className="text-2xl">
                <GrFormNext />
              </span>
            </div>
            <div onClick={()=> navigate("/support")}   className=" border-gray-400 border-b-2 h-12 flex  items-center justify-between">
              <p  className=" font-bold uppercase ">Support</p>
              <span className="text-2xl">
                <GrFormNext />
              </span>
            </div>
            <div className=" border-gray-400 border-b-2 h-12 flex  items-center justify-between">
              <p className=" font-bold">FAQ</p>
              <span className="text-2xl">
                <GrFormNext />
              </span>
            </div>
            <div className=" border-gray-400 border-b-2 h-12 flex  items-center justify-between">
              <p className=" font-bold">FAQ</p>
              <span className="text-2xl">
                <GrFormNext />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
