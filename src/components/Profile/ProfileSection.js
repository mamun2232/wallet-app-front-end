import React from "react";
import { AiFillCamera, AiFillSetting } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardBackspace, MdSettingsPower } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";

const ProfileSection = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-5 max-w-7xl m-auto px-6">
      <div className="pt-2 flex justify-between items-center">
        <span
          onClick={() => navigate("/home")}
          className=" text-white text-3xl "
        >
          <MdOutlineKeyboardBackspace />
        </span>
        <span className="text-white text-lg ">Profile</span>
        <span onClick={() => navigate("/setting")} className="text-2xl text-white">
          <AiFillSetting />
        </span>
      </div>

      <div>
        <div className="mt-5 flex justify-center">
          <div className=" rounded-full  bg-gray-700 w-28 h-28 relative ">
            <div className=" flex justify-center pt-6">
              <span className="text-6xl text-white ">
                <CgProfile />
              </span>
            </div>
          </div>
        </div>
        <div className="w-[45px] h-[45px] bg-[#C52410] flex justify-center items-center rounded-full absolute top-[140px]  right-[100px]">
          <span className="text-2xl text-white">
            <AiFillCamera />
          </span>
        </div>
        <h1 className="text-2xl font-bold text-white text-center">
          Mike Tieson
        </h1>
        <span className="text-sm text-white  flex justify-center">
          miketieso@gmail.com
        </span>
      </div>
      <div className=" flex justify-between gap-3 mt-2">
            <div className=" border-l-white border-r-2  h-8 pr-8">
              <p onClick={()=>navigate("/profile")} className="text-white">STATUS</p>
            </div>
            <div className=" border-l-white border-r-2  h-8 pr-4">
              <p onClick={()=>navigate("achivemment")} className="text-white ">ACHEVMENMENT</p>
            </div>
            <div>
              <p onClick={()=>navigate("active")} className="text-white">ACTIVITY</p>
            </div>
          </div>

       <Outlet/>
    </div>
  );
};

export default ProfileSection;
