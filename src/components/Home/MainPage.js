import React from "react";
import { MdAdd } from "react-icons/md";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineScan } from "react-icons/ai";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const MainPage = () => {
  const navigate = useNavigate()
  return (
    <div className="pt-5 max-w-7xl m-auto px-6">
      <div className=" flex justify-between mt-2">
        <div>
          <h1 className=" text-4xl text-white font-bold">Hey Make,</h1>
          <p className="text-sm mt-1 text-gray-100">Happy to see you again.</p>
        </div>
        <div className=" flex items-end ">
          <div className="w-8 h-8 flex justify-center items-center rounded-full bg-slate-500">
            <span className="text-2xl text-white font-bold">
              <MdAdd />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        {/* swipper start    */}
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className=" rounded-lg w-full h-[180px] lg:w-full lg:h-[300px]"
              src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" rounded-lg w-full h-[180px] lg:w-full lg:h-[300px]"
              src="https://static7.depositphotos.com/1313859/791/i/600/depositphotos_7915392-stock-photo-ruby-throated-hummingbird.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" rounded-lg w-full h-[180px] lg:w-full lg:h-[300px]"
              src="https://img-4.linternaute.com/puZgKEP-3jnGircjX4rrTE2CyPU=/620x/smart/9fab8a5d84ab4dd2ba82f8ba6b6e6c99/ccmcms-linternaute/406232.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>

        <div className="mt-2">
          <progress
            className="progress progress-error w-full h-[11px]"
            value="100"
            max="100"
          ></progress>
          <div className=" flex justify-between">
            <span className="text-sm text-gray-100 mt-0 pt-0">XP 78393734</span>
            <span className="text-sm text-gray-100 mt-0 pt-0">
              100xp to lable up
            </span>
          </div>
        </div>

        {/* send monny */}

        <div className="mt-4 flex justify-between">
          <div>
            <div onClick={()=>navigate("/scanQr")} className=" w-16 h-16 bg-slate-900 rounded-full flex justify-center items-center">
              <span className="text-3xl text-blue-200">
                <AiOutlineScan />
              </span>
            </div>
            <div  className="flex justify-center">
              <span className=" text-center text-gray-200 text-[12px] pt-0">
                Scan And <br /> Pay
              </span>
            </div>
          </div>
          <div>
            <div className=" w-16 h-16 bg-slate-900 rounded-full flex justify-center items-center">
              <span className="text-3xl text-green-200">
                <FiSend />
              </span>
            </div>
            <div className="flex justify-center">
              <span className=" text-center text-gray-200 text-[12px] pt-0">
                Send <br />
                Money
              </span>
            </div>
          </div>
          <div>
            <div className=" w-16 h-16 bg-slate-900 rounded-full flex justify-center items-center">
              <span className="text-3xl text-green-200">
                <FaMoneyCheckAlt />
              </span>
            </div>
            <div className="flex justify-center">
              <span className=" text-center text-gray-200 text-[12px] pt-0">
                Recive <br />
                Money
              </span>
            </div>
          </div>
        </div>

        {/* recive money history */}

        <div className="mt-5">
          <div className="card full bg-gray-900 shadow-xl h-48">
            <div className="p-4 overflow-y-auto">
              <h1 className="text-2xl  text-white">History</h1>

              <div className="flex mt-3  gap-5">
                <div className="">
                  <div className=" w-12 h-12 bg-base-200 rounded-full flex justify-center items-center">
                    <span className="text-3xl text-black">
                      <AiOutlineScan />
                    </span>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm font-bold text-white">Doantion</p>
                  <p className="text-[10px] text-white">10 Nov 2022 -10pm</p>
                  <p className="text-[10px] text-white">by Json Jam</p>
                </div>
                <div className=" flex justify-end items-center text-right w-2/4">
                  <span className="text-sm text-green-200">+$720.00</span>
                </div>
              </div>
              <div className="flex mt-3  gap-5">
                <div className="">
                  <div className=" w-12 h-12 bg-base-200 rounded-full flex justify-center items-center">
                    <span className="text-3xl text-black">
                      <AiOutlineScan />
                    </span>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm font-bold text-white">Doantion</p>
                  <p className="text-[10px] text-white">10 Nov 2022 -10pm</p>
                  <p className="text-[10px] text-white">by Json Jam</p>
                </div>
                <div className=" flex justify-end items-center text-right w-2/4">
                  <span className="text-sm text-green-200">+$720.00</span>
                </div>
              </div>
              <div className="flex mt-3  gap-5">
                <div className="">
                  <div className=" w-12 h-12 bg-base-200 rounded-full flex justify-center items-center">
                    <span className="text-3xl text-black">
                      <AiOutlineScan />
                    </span>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm font-bold text-white">Doantion</p>
                  <p className="text-[10px] text-white">10 Nov 2022 -10pm</p>
                  <p className="text-[10px] text-white">by Json Jam</p>
                </div>
                <div className=" flex justify-end items-center text-right w-2/4">
                  <span className="text-sm text-green-200">+$720.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
