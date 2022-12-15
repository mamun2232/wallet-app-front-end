import React from "react";
import { MdSettingsPower } from "react-icons/md";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Achevment = () => {
  return (
    <div className="mt-5">
      <div className="  bg-[#ffffff] p-4 w-[351px] h-[116px] rounded-[24px] mt-3">
        <div className="flex gap-3  ">
          <div className="bg-[#000000] w-[30px] h-[30px] rounded-lg flex justify-center items-center mt-3">
            <span className="text-white ">
              <MdSettingsPower />
            </span>
          </div>
          <div>
            <p className="text-[21px] font-bold text-[#000000] ">Lable 2</p>
            <p className="text-[14px] text-gray-500  py-0 my-0">
              80 Point to next lable
            </p>
          </div>
        </div>

        <progress
          className="progress py-0 progress-warning w-100 h-[18px] mt-2"
          value="100"
          max="100"
        ></progress>
      </div>
      <div className="mt-3">
        <h1 className="text-[#9098A3] text-[15px]">MEDALS 53</h1>

        <div className=" flex gap-5 mt-1">
          <div className="bg-[#ffff] p-3 w-[101px] lg:w-full h-[106px] rounded-[24px]">
            <div className="flex justify-center">
              <div>
                <div className="p-3 w-[5px] block rounded-full bg-gradient-to-b  from-[#FFE092] to-[#E3A302]"></div>
                <p className=" block f">Gold</p>
                <p className=" block text-center text-[#E3A302]">34</p>
              </div>
            </div>
          </div>
          <div className="bg-[#ffff] p-3 w-[101px] lg:w-full h-[106px] rounded-[24px]">
            <div className="flex justify-center pl-3">
              <div>
                <div className=" p-3 w-[5px] block rounded-full  bg-[#B6C0D6]"></div>
                <p className=" block text-[#000000]">Silver</p>
                <p className=" block text-center text-[#B6C0D6]">34</p>
              </div>
            </div>
          </div>
          <div className="bg-[#ffff] p-3 w-[101px] lg:w-full h-[106px] rounded-[24px]">
            <div className="flex justify-center pl-3">
              <div>
                <div className="  p-3 w-[5px] block rounded-full bg-gradient-to-b  from-[#97766F] to-[#DACFB3]"></div>
                <p className=" block text-[14px] text-[#000000]">Bronze</p>
                <p className=" block text-center text-[#97766F]">34</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <h1 className="ext-[#9098A3] text-[15px] uppercase">
            {" "}
            certification
          </h1>

          <div className=" flex gap-5 mt-1">
            <div className="bg-[#ffff] p-3 w-[133px] lg:w-full h-[147px] rounded-[24px]">
              <div className="flex justify-center">
                <div>
                  <div className="flex justify-center">
                    <div className="p-3 w-[5px] block rounded-full bg-gradient-to-b  from-[#FFE092] to-[#E3A302]"></div>
                  </div>
                  <p className=" block text-[#000000] mt-2 text-center">
                    Coffe Export
                  </p>
                  <button className="bg-[#A59E8E] w-full rounded-lg  mt-2">
                    Bronze Certified
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#ffff] p-3 w-[133px] lg:w-full h-[147px] rounded-[24px]">
              <div className="flex justify-center">
                <div>
                  <div className="flex justify-center">
                    <div className="p-3 w-[5px] block rounded-full bg-gradient-to-b  from-[#FFE092] to-[#E3A302]"></div>
                  </div>
                  <p className=" block text-[#000000] mt-2 text-center">
                    Coffe Export
                  </p>
                  <button className="bg-[#778390] w-full rounded-lg  mt-2">
                  Silver Certified
                  </button>
                </div>
              </div>
            </div>
           
            {/* <div className="bg-[#ffff] p-3 w-[101px] lg:w-full h-[106px] rounded-[24px]">
            <div className="flex justify-center pl-3">
              <div>
                <div className="  p-3 w-[5px] block rounded-full bg-gradient-to-b  from-[#97766F] to-[#DACFB3]"></div>
                <p className=" block text-[14px] text-[#000000]">Bronze</p>
                <p className=" block text-center text-[#97766F]">34</p>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achevment;
