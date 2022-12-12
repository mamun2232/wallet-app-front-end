import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Payment = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-5 max-w-7xl m-auto px-6">
      <div className="pt-5 flex justify-between">
        <span
          onClick={() => navigate("/scanQr")}
          className=" text-white text-3xl "
        >
          <MdOutlineKeyboardBackspace />
        </span>
        <span className="text-white text-lg ">Payment</span>
        <span></span>
      </div>

      {/* payment card  */}
      <div className="mt-10">
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
      </div>

      {/* paymnent details  */}
      <div className="mt-5 text-center">
        <h1 className="text-white text-xl">Payment Detail</h1>
        <span className="text-white text-sm">amount</span>

        <h1 className="text-white text-5xl font-bold mt-3">$3,535</h1>
      </div>

      <div className="mt-10">
        <input
          className=" w-full h-[45px]   bg-slate-600 placeholder-white rounded-lg px-5 text-lg  outline-[#1E1E1E]"
          type="email"
          name="email"
          placeholder="To Merchant Name"
          id=""
        />
      </div>
      <div className="mt-4">
        <input
          className=" w-full h-[45px]   bg-slate-600 placeholder-white rounded-lg px-5 text-lg  outline-[#1E1E1E]"
          type="email"
          name="email"
          placeholder="To Merchant Name"
          id=""
        />
      </div>

      <div className=" h-[18vh] flex  items-end">
        <button
          onClick={() => navigate("/paymentSuccess")}
          className="bg-[#C52410] w-full  rounded-lg text-white h-[55px]"
        >
          Type The Number
        </button>
      </div>
    </div>
  );
};

export default Payment;
