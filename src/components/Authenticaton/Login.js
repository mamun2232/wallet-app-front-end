import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiShow} from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import ForgateModal from "./ForgateModal";
const Login = () => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
  
    setIsOpen(true)
  }
  const navigate = useNavigate()
  return (
    <>
    <div className="max-w-7xl m-auto px-6">
      <div className="pt-20 flex  justify-center">
        <div>
          <div className=" flex  justify-center ">
            <img className=" h-[80px] " src="/picture/logo.png" alt="logo" />
          </div>
          <h1 className="text-4xl text-white text-center mt-4">Hello Again!</h1>
          <p className="text-lg text-white mt-2">
            Welcome back you've been missed
          </p>
        </div>
      </div>

      <div className="mt-20">
        <div className="h-[60px] relative">
          <input
            className=" w-full h-[55px]   bg-slate-600 placeholder-white rounded-lg pl-14 text-lg  outline-[#1E1E1E]"
            type="email"
            name="email"
            placeholder="username/Phone number"
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
            className=" w-full h-[55px] bg-slate-600  placeholder-white  rounded-lg pl-14 text-lg  outline-[#1E1E1E]"
            type="password"
            name="password"
            placeholder="Password"
            id=""
          />

          <div>
            <span className=" text-white  text-3xl absolute top-3 left-4">
              <AiOutlineMail />
            </span>
            <span className="text-white  text-3xl absolute top-3 right-4">
              <BiShow/>
            </span>
          </div>
        </div>

        <div className="mt-5">
          <input
          onClick={()=>navigate("/home")}
            className="bg-[#C52410] w-full  rounded-lg text-white h-[55px]"
            type="submit"
            value="Login"
          />

          <p  onClick={()=> openModal()} className="text-lg text-gray-100 mt-3 text-center">
            Forgot Password?
          </p>
        </div>

        <div className=" flex items-end justify-center h-[100px]">
          <p className="text-gray-100">
            Don't have any account ?{" "}
            <span onClick={()=> navigate("/register")} className="text-gray-200 font-bold">Create Now</span>
          </p>
        </div>
      </div>
    </div>
    {isOpen && <ForgateModal
    openModal={openModal}
    closeModal={closeModal}
    isOpen={isOpen}
    
    />}
    </>
  );
};

export default Login;
