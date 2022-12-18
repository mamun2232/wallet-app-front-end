import React from "react";
import { BsSearch } from "react-icons/bs";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { GoDeviceCamera } from "react-icons/go";
import { BiConfused } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-5 max-w-7xl m-auto ">
      <div className="pt-2 flex justify-between items-center px-6">
        <span
          onClick={() => navigate("/setting")}
          className=" text-white text-3xl "
        >
          <MdOutlineKeyboardBackspace />
        </span>
        <span className="text-white text-lg  uppercase font-medium">
          support
        </span>
        <span className="text-xl text-white mt-1">
          <BsSearch />
        </span>
      </div>

      <div className=" mt-10 ">
        <div className="px-6">
          <div className=" flex gap-5">
            <div className=" flex items-end justify-center">
              <img
                className="w-[48px] h-[48px] rounded-full"
                src="/picture/support1.png"
                alt=""
              />
            </div>

            <div>
              <div className=" p-5 bg-[#434343] w-[240px] rounded-t-2xl rounded-r-2xl">
                <p className=" text-[#EEEEEE]">
                  Hi Kitsbase, Let me know you need help and you can ask us any
                  questions.
                </p>
              </div>
            </div>
          </div>
          <span className="text-[#DADADA] font-[12px] ml-16 mt-1">
            08:20 AM
          </span>
        </div>

        <div className="px-6">
          <div className=" flex justify-between gap-5 mt-10">
            <div></div>
            <div className="p-5 bg-[#490517] w-[240px] rounded-t-2xl rounded-l-2xl">
              <p className="text-[#EEEEEE]">
                How to create a FinX Stock account?
              </p>
            </div>
          </div>
          <span className="text-[#DADADA] font-[12px] ml-28 mt-1">
            08:20 AM
          </span>
        </div>

        <div className="px-6">
          <div className=" flex gap-5">
            <div className=" flex items-end justify-center">
              <img
                className="w-[48px] h-[48px] rounded-full"
                src="/picture/support2.png"
                alt=""
              />
            </div>

            <div className="mt-10">
              <div className=" p-5 bg-[#434343] w-[240px] rounded-t-2xl rounded-r-2xl">
                <p className=" text-[#EEEEEE]">
                  Open the FinX Stock app to get started and follow the steps.
                  FinX Stock doesn’t charge a fee to create or maintain your
                  FinX Stock account.
                </p>
              </div>
            </div>
          </div>
          <span className="text-[#DADADA] font-[12px] ml-16 mt-1">
            08:22 AM
          </span>
        </div>

        <div className="  fixed bottom-0 w-full">
          <div className="h-[84px] bg-[#434343] w-full p-3 flex  items-center">
            <div className=" flex gap-3 px-4">
              <div className=" flex items-center">
                <span className="text-[#FEFEFE] text-2xl">
                  <GoDeviceCamera />
                </span>
              </div>
              <div className="h-[42px] relative">
                <input
                  className=" h-[42px] px-6 bg-[#202020] placeholder-[#DADADA]  rounded-2xl lg:w-full w-[306px]"
                  placeholder="Write a comment"
                  type="text"
                  name=""
                  id=""
                />

                <span className="text-[#FEFEFE] text-2xl absolute right-3 top-2">
                  <BiConfused />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
