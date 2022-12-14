import React from "react";
import { MdSettingsPower } from "react-icons/md";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Achevment = () => {
  return (
    <div className="mt-5">
      <div className="  bg-base-200 rounded-lg p-4 h-[100px] mt-3">
        <div className="flex gap-3  ">
          <div className="bg-slate-500 w-[25px] h-[30px] rounded-lg flex justify-center items-center mt-3">
            <span className="text-black ">
              <MdSettingsPower />
            </span>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900 ">Lable 2</p>
            <p className="text-sm text-gray-900  py-0 my-0">
              80 Point to next lable
            </p>
          </div>
        </div>

        <progress
          className="progress py-0 progress-warning w-100 h-4 mt-2"
          value="100"
          max="100"
        ></progress>
      </div>
      <div className="mt-3">
        <h1 className="text-gray-200 text-sm">MEDALS 53</h1>

        <div className=" flex gap-5">
          <div className="bg-base-200 p-3 w-full h-[90px] rounded-lg">
            <div className="flex justify-center">
              <div>
                <div className=" p-3 w-[5px] block rounded-full bg-yellow-400"></div>
                <p className=" block">Gold</p>
                <p className=" block text-center">34</p>
              </div>
            </div>
          </div>
          <div className="bg-base-200 p-3 w-full h-[90px] rounded-lg">
            <div className="flex justify-center">
              <div>
                <div className=" p-3 w-[5px] block rounded-full bg-yellow-400"></div>
                <p className=" block">Silver</p>
                <p className=" block text-center">34</p>
              </div>
            </div>
          </div>
          <div className="bg-base-200 p-3 w-full h-[90px] rounded-lg">
            <div className="flex justify-center">
              <div>
                <div className=" p-3 w-[5px] block rounded-full bg-yellow-400"></div>
                <p className=" block">Bronze</p>
                <p className=" block text-center">34</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <h1 className="text-gray-200 text-sm uppercase"> certification</h1>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className=" flex gap-2">
                <div className="bg-base-200 p-3 w-40 h-[90px] rounded-lg">
                  <div className="flex justify-center">
                    <div>
                      <div className=" p-3 w-[5px] block rounded-full bg-yellow-400"></div>
                      <p className=" block">Gold</p>
                      <p className=" block text-center">34</p>
                    </div>
                  </div>
                </div>
                <div className="bg-base-200 p-3 w-40 h-[90px] rounded-lg">
                  <div className="flex justify-center">
                    <div>
                      <div className=" p-3 w-[5px] block rounded-full bg-yellow-400"></div>
                      <p className=" block">Gold</p>
                      <p className=" block text-center">34</p>
                    </div>
                  </div>
                </div>
                <div className="bg-base-200 p-3 w-40 h-[90px] rounded-lg">
                  <div className="flex justify-center">
                    <div>
                      <div className=" p-3 w-[5px] block rounded-full bg-yellow-400"></div>
                      <p className=" block">Gold</p>
                      <p className=" block text-center">34</p>
                    </div>
                  </div>
                </div>
              </div>
            
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex gap-2">
                <div className="bg-base-200 p-3 w-40 h-[90px] rounded-lg">
                  <div className="flex justify-center">
                    <div>
                      <div className=" p-3 w-[5px] block rounded-full bg-yellow-400"></div>
                      <p className=" block">Gold</p>
                      <p className=" block text-center">34</p>
                    </div>
                  </div>
                </div>
                <div className="bg-base-200 p-3 w-40 h-[90px] rounded-lg">
                  <div className="flex justify-center">
                    <div>
                      <div className=" p-3 w-[5px] block rounded-full bg-yellow-400"></div>
                      <p className=" block">Gold</p>
                      <p className=" block text-center">34</p>
                    </div>
                  </div>
                </div>
                <div className="bg-base-200 p-3 w-40 h-[90px] rounded-lg">
                  <div className="flex justify-center">
                    <div>
                      <div className=" p-3 w-[5px] block rounded-full bg-yellow-400"></div>
                      <p className=" block">Gold</p>
                      <p className=" block text-center">34</p>
                    </div>
                  </div>
                </div>
              </div>
            
            </SwiperSlide>
           
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Achevment;
