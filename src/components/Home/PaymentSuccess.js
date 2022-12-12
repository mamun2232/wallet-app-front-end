import React from "react";
import { AiOutlineScan } from "react-icons/ai";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-5 max-w-7xl m-auto px-6">
      <div className="pt-5 flex justify-between">
        <span
          onClick={() => navigate("/payment")}
          className=" text-white text-3xl "
        >
          <MdOutlineKeyboardBackspace />
        </span>
        <span className="text-white text-lg ">Payment</span>
        <span></span>
      </div>
      {/* payment success  */}
      <div className="mt-20 text-center">
        <h1 className="text-white text-xl">Payment Successfull</h1>
        <span className="text-white text-sm">amount</span>

        <h1 className="text-white text-5xl font-bold mt-3">$3,535</h1>
      </div>

      {/* icons  */}
      <div>
        <div className=" flex justify-center mt-20">
          <div
            onClick={() => navigate("/scanQr")}
            className="w-16 h-16 bg-slate-900 rounded-lg flex justify-center items-center"
          >
            <span className="text-3xl text-blue-200">
              <AiOutlineScan />
            </span>
          </div>
        </div>
      </div>

      <div className=" h-[40vh] flex  items-end justify-center">
        <button
          onClick={() => navigate("/home")}
          className="bg-[#C52410]   rounded-lg text-white h-[55px] w-32"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
