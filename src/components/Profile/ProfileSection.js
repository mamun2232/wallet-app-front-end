import React from "react";
import { AiFillCamera, AiFillSetting } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardBackspace,  } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";

const ProfileSection = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-5 max-w-7xl m-auto px-6">
      <div className="pt-2 flex justify-between items-center">
        <span
          onClick={() => navigate("/home")}
          className=" text-[#ffffff] text-[33px] "
        >
          <MdOutlineKeyboardBackspace />
        </span>
        <span className="text-[#ffffff] text-[20px] ">Profile</span>
        <span
          onClick={() => navigate("/setting")}
          className="text-2xl text-white"
        >
          <AiFillSetting />
        </span>
      </div>

      <div>
        <div className="mt-3 flex justify-center">
          <div className=" rounded-full  bg-gray-700 w-[124px] h-[124px] relative ">
            <div className=" flex justify-center pt-6">
              <span className="text-6xl text-white ">
                <CgProfile />
              </span>
            </div>
          </div>
        </div>
        <div className="w-[51px] h-[51px] bg-gradient-to-b  from-[#C52410] to-[#E6550A] flex justify-center items-center rounded-full absolute top-[140px]  right-[110px]">
          <span className="text-2xl text-white">
            <AiFillCamera />
          </span>
        </div>
        <h1 className="text-[32px]  text-[#ffffff] text-center">
          Mike Tieson
        </h1>
        <span className="text-[16px] text-[#BAC5C8]  flex justify-center">
          miketieso@gmail.com
        </span>
      </div>
      <div className=" flex justify-between gap-3 mt-2">
        <div className=" border-l-[#BAC5C8] border-r-2  h-8 pr-8">
          <p onClick={() => navigate("/profile")} className="text-[#587EFF]">
            STATUS
          </p>
        </div>
        <div className=" border-l-[#BAC5C8]  border-r-2  h-8 pr-4">
          <p onClick={() => navigate("achivemment")} className="text-[#BAC5C8] ">
            ACHEVMENMENT
          </p>
        </div>
        <div>
          <p onClick={() => navigate("active")} className="text-[#BAC5C8]">
            ACTIVITY
          </p>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default ProfileSection;
