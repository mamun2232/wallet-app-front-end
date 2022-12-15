import React from "react";

const WalletPayment = () => {
  return (
    <div className="pt-5 max-w-7xl m-auto px-4">
      <p className="text-[24px] font-medium text-[#FFFFFF] text-center mt-5">
        Comming Soon
      </p>

      <div className="pt-20 flex  justify-center">
        <div>
          <div className=" flex  justify-center ">
            <img className=" h-[140px] w-[195px]" src="/picture/logo.png" alt="logo" />
          </div>
          <h1 className="text-[39px] text-[#ffffff] text-center mt-4  font-medium">
            Stay Tuned!
          </h1>
        </div>
      </div>
      <div className=" h-[30vh] flex  items-end justify-center">
        <button className="bg-gradient-to-b  from-[#C52410] to-[#E6550A]    rounded-lg text-white h-[55px] w-32">
          Next
        </button>
      </div>
    </div>
  );
};

export default WalletPayment;
