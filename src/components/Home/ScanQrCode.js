import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ScanQrCode = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-5 max-w-7xl m-auto px-6">
      <div className="pt-5 flex justify-between">
        <span
          onClick={() => navigate("/home")}
          className=" text-white text-3xl "
        >
          <MdOutlineKeyboardBackspace />
        </span>
        <span className="text-white text-lg ">Scan The Code</span>
        <span></span>
      </div>

      <div className=" bg-slate-100 h-72 mt-20 rounded-lg"></div>
      <div className=" h-[35vh] flex  items-end">
        <button onClick={()=>navigate("/payment")} className="bg-[#C52410] w-full  rounded-lg text-white h-[55px]">
          Type The Number
        </button>
      </div>
    </div>
  );
};

export default ScanQrCode;
