import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { CgProfile} from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Registion = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl m-auto px-6">
      <div className="pt-5">
        <span onClick={()=> navigate("/")} className=" text-white text-[24px] ">
          <MdOutlineKeyboardBackspace />
        </span>
      </div>
      <div className="pt-10 flex  justify-center">
        <div>
          <h1 className="text-4xl text-white text-center mt-4">
            Lets Get Stared!
          </h1>
          <p className="text-lg text-white mt-2">
            Create your <span>Absorb</span> account now
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="h-[60px] relative">
          <input
            className=" w-full h-[55px]   modalColur placeholder-[#DADADA] text-white rounded-lg pl-14 text-lg  outline-[#1E1E1E]"
            type="text"
            name="name"
            placeholder="Name"
            id=""
          />
          <div>
            <span className=" text-white text-3xl absolute top-3 left-4">
              <CgProfile />
            </span>
          </div>
        </div>
        <div className="h-[60px] mt-3 relative">
          <input
            className=" w-full h-[55px]   modalColur placeholder-[#DADADA] text-white rounded-lg pl-14 text-lg  outline-[#1E1E1E]"
            type="email"
            name="email"
            placeholder="Email"
            id=""
          />
          <div>
            <span className=" text-white text-3xl absolute top-3 left-4">
              <AiOutlineMail />
            </span>
          </div>
        </div>
        <div className="h-[60px] mt-3 relative">
          <input
            className=" w-full h-[55px] modalColur placeholder-[#DADADA] text-white  rounded-lg pl-14 text-lg  outline-[#1E1E1E]"
            type="password"
            name="password"
            placeholder="Password"
            id=""
          />

          <div>
            <span className=" text-white  text-3xl absolute top-3 left-4">
              <RiLockPasswordFill/>
            </span>
            <span className="text-white  text-3xl absolute top-3 right-4">
              <BiShow />
            </span>
          </div>
        </div>
        <div className="h-[60px] mt-3 relative">
          <input
            className=" w-full h-[55px] modalColur placeholder-[#DADADA] text-white  rounded-lg pl-14 text-lg  outline-[#1E1E1E]"
            type="password"
            name="password"
            placeholder="Confirm Password"
            id=""
          />

          <div>
            <span className=" text-white  text-3xl absolute top-3 left-4">
              <RiLockPasswordFill />
            </span>
            <span className="text-white  text-3xl absolute top-3 right-4">
              <BiShow />
            </span>
          </div>
        </div>

        <div className="mt-5">
          <input
            className="bg-gradient-to-b  from-[#C52410] to-[#E6550A] w-full  rounded-lg text-white h-[55px]"
            type="submit"
            value="Create Account"
          />

        </div>

        <div className=" flex items-end justify-center h-[85px]">
          <p className="text-gray-100">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/")}
              className="text-gray-200 font-bold"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registion;
