import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-5 max-w-7xl m-auto px-6">
      <div className="pt-5 flex justify-between">
        <span
          onClick={() => navigate("/home")}
          className=" text-white text-3xl "
        >
          <MdOutlineKeyboardBackspace />
        </span>
        <span className="text-white text-lg ">Daily Challange</span>
        <span></span>
      </div>

      <div className=" overflow-y-auto h-[550px] mt-8">
        <div className=" flex  bg-gray-800 rounded-lg p-3 h-[110px] gap-3 mt-3">
          <div>
            <img
              className="lg:w-[75px] w-[90px] h-[85px]  rounded-lg"
              src="https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div>
            <p className="text-[15px] font-bold text-white ">Watch Ad</p>
            <p className="text-[12px] text-base-200 py-0 my-0">
              watch the product win the 20xp
            </p>
            <div className="text-end py-0  my-0">
              <span className="text-white text-[10px] py-0 my-0">0/8</span>
            </div>

            <progress
              className="progress py-0 progress-warning w-56"
              value="100"
              max="100"
            ></progress>
          </div>
        </div>
        <div className=" flex  bg-gray-800 rounded-lg p-3 h-[110px] gap-3 mt-3">
          <div>
            <img
              className="lg:w-[75px] w-[90px] h-[85px]  rounded-lg"
              src="https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div>
            <p className="text-[15px] font-bold text-white ">Watch Ad</p>
            <p className="text-[12px] text-base-200 py-0 my-0">
              watch the product win the 20xp
            </p>
            <div className="text-end py-0  my-0">
              <span className="text-white text-[10px] py-0 my-0">0/8</span>
            </div>

            <progress
              className="progress py-0 progress-warning w-56"
              value="100"
              max="100"
            ></progress>
          </div>
        </div>
        <div className=" flex  bg-gray-800 rounded-lg p-3 h-[110px] gap-3 mt-3">
          <div>
            <img
              className="lg:w-[75px] w-[90px] h-[85px]  rounded-lg"
              src="https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div>
            <p className="text-[15px] font-bold text-white ">Watch Ad</p>
            <p className="text-[12px] text-base-200 py-0 my-0">
              watch the product win the 20xp
            </p>
            <div className="text-end py-0  my-0">
              <span className="text-white text-[10px] py-0 my-0">0/8</span>
            </div>

            <progress
              className="progress py-0 progress-warning w-56"
              value="100"
              max="100"
            ></progress>
          </div>
        </div>
        <div className=" flex  bg-gray-800 rounded-lg p-3 h-[110px] gap-3 mt-3">
          <div>
            <img
              className="lg:w-[75px] w-[90px] h-[85px]  rounded-lg"
              src="https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div>
            <p className="text-[15px] font-bold text-white ">Watch Ad</p>
            <p className="text-[12px] text-base-200 py-0 my-0">
              watch the product win the 20xp
            </p>
            <div className="text-end py-0  my-0">
              <span className="text-white text-[10px] py-0 my-0">0/8</span>
            </div>

            <progress
              className="progress py-0 progress-warning w-56"
              value="100"
              max="100"
            ></progress>
          </div>
        </div>
        <div className=" flex  bg-gray-800 rounded-lg p-3 h-[110px] gap-3 mt-3">
          <div>
            <img
              className="lg:w-[75px] w-[90px] h-[85px]  rounded-lg"
              src="https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div>
            <p className="text-[15px] font-bold text-white ">Watch Ad</p>
            <p className="text-[12px] text-base-200 py-0 my-0">
              watch the product win the 20xp
            </p>
            <div className="text-end py-0  my-0">
              <span className="text-white text-[10px] py-0 my-0">0/8</span>
            </div>

            <progress
              className="progress py-0 progress-warning w-56"
              value="100"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
