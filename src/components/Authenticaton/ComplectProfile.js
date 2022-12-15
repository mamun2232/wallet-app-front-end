import React from "react";
import { AiFillCamera, AiOutlineMail } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const ComplectProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl m-auto px-6">
      <div className="pt-3">
        <span onClick={() => navigate("/")} className=" text-white text-3xl ">
          <MdOutlineKeyboardBackspace />
        </span>
      </div>
      <div className="pt-2 flex  justify-center">
        <div>
          <h1 className="text-3xl text-white text-center mt-6">
            Complete Profile
          </h1>
          <p className="text-sm text-white mt-1">
            Fill out all information to get stared
          </p>

          <div className="mt-3 flex justify-center">
            <div className=" rounded-full  bg-gray-700 w-28 h-28 relative ">
              <div className=" flex justify-center pt-6">
              <span className="text-6xl text-white ">
                <CgProfile />
              </span>
              </div>
              
            </div>
          </div>
          <div className="w-[45px] h-[45px] bg-[#C52410] flex justify-center items-center rounded-full absolute top-[210px]  right-[115px]">
            <span className="text-2xl text-white">
              <AiFillCamera />
            </span>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-100 text-center mt-1">
        Uplode an image an yours
      </p>

      <div className="mt-10">
        <div className="h-[60px] relative">
          <input
            className=" w-full h-[55px]   bg-slate-600 placeholder-white rounded-lg pl-14 text-lg  outline-[#1E1E1E]"
            type="text"
            name="name"
            placeholder="Name"
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
            className=" w-full h-[55px]   bg-slate-600 placeholder-white rounded-lg pl-14 text-lg  outline-[#1E1E1E]"
            type="number"
            name="number"
            placeholder="Number"
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
            className=" w-full h-[55px] bg-slate-600  text-white placeholder-white  rounded-lg pl-14 text-lg  outline-[#1E1E1E]"
            type="date"
            name="birthday"
            placeholder="Bithday"
            id=""
          />

          <div>
            <span className=" text-white  text-3xl absolute top-3 left-4">
              <AiOutlineMail />
            </span>
            
          </div>
        </div>
        <div className="h-[60px] mt-3 relative">
          <select
            className=" w-full h-[55px] bg-slate-600 text-white placeholder-white  rounded-lg pl-14 text-lg  outline-[#1E1E1E]"
            type="text"
            name="gender"
            placeholder="Gender"
            id=""
          >
            <option value="Male" >Male</option>
            <option value="Female" >Female</option>
            <option value="Other" >Other</option>
         </select>

          <div>
            <span className=" text-white  text-3xl absolute top-3 left-4">
              <AiOutlineMail />
            </span>
          
          </div>
        </div>

        <div className="mt-5">
          <input
            className="bg-[#C52410] w-full  rounded-lg text-white h-[55px]"
            type="submit"
            value="Complect Profile"
          />
        </div>

     
      </div>
    </div>
  );
};

export default ComplectProfile;
