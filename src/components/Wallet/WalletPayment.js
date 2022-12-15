import React from "react";

const WalletPayment = () => {
  return (
    <div className="pt-5 max-w-7xl m-auto px-4">
      <p className="text-xl font-medium text-base-200 text-center mt-5">
        Comming Soon
      </p>

      <div className="pt-20 flex  justify-center">
        <div>
          <div className=" flex  justify-center ">
            <img className=" h-[130px] " src="/picture/logo.png" alt="logo" />
          </div>
          <h1 className="text-4xl text-white text-center mt-4  font-medium">
            Stay Tuned!
          </h1>
        </div>
      </div>
      <div className=" h-[30vh] flex  items-end justify-center">
        <button className="bg-[#C52410]   rounded-lg text-white h-[55px] w-32">
          Next
        </button>
      </div>
    </div>
  );
};

export default WalletPayment;
