import React from "react";
import { BsSearch } from "react-icons/bs";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-5 max-w-7xl m-auto px-6">
      <div className="pt-2 flex justify-between items-center">
        <span
          onClick={() => navigate("/setting")}
          className=" text-white text-3xl "
        >
          <MdOutlineKeyboardBackspace />
        </span>
        <span className="text-white text-lg  uppercase">support</span>
        <span className="text-xl text-white mt-1">
          <BsSearch />
        </span>
      </div>
    </div>
  );
};

export default Support;
