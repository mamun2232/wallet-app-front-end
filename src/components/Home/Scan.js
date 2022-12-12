import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Scan = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl m-auto px-6">
      <div className="pt-5 flex justify-between">
        <span
          onClick={() => navigate("/home")}
          className=" text-white text-3xl "
        >
          <MdOutlineKeyboardBackspace />
        </span>
        <span className="text-white text-lg">TooT Layality Card</span>
        <span></span>
      </div>
    </div>
  );
};

export default Scan;
