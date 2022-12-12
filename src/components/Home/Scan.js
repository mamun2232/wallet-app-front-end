import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Scan = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl m-auto px-6   ">
      <div className="pt-5 flex justify-between">
        <span
          onClick={() => navigate("/home")}
          className=" text-white text-3xl "
        >
          <MdOutlineKeyboardBackspace />
        </span>
        <span className="text-white text-lg ">TooT Layality Card</span>
        <span></span>
      </div>

      <div className=" w-full h-16 rounded-lg bg-slate-200 mt-5 flex justify-center items-center">
        <span className=" text-gray-800 font-bold text-3xl">TooT</span>
      </div>

      <p className="text-sm text-gray-200 text-center pt-0 mt-2">MEMBER ID</p>
      <p className="text-sm text-gray-200 text-center pt-0 mt-0">0309437354</p>

      {/* add scaner  */}
    </div>
  );
};

export default Scan;
