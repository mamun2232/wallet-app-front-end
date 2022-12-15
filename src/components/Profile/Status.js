import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdSettingsPower } from "react-icons/md";

const Status = () => {
  return (
    <>
      <div className=" flex gap-5 mt-5">
        <div className=" w-[173px] h-[73px] bg-[#ffffff] rounded-[24px]  flex items-center p-3 gap-[19px]">
          <div className="bg-slate-500 p-1 rounded-lg">
            <span className="text-black ">
              <MdSettingsPower />
            </span>
          </div>
          <div>
            <small className=" block text-[19px] font-bold  text-[#000000] loading-none">
              55
            </small>
            <small className=" block text-[14px] text-[#9098A3] loading-none">
              Quizzes
            </small>
          </div>
        </div>
        <div className=" w-[173px] h-[73px] bg-[#ffffff] rounded-[24px]  flex items-center p-3 gap-[19px]">
          <div className="bg-[#967CFD] p-1 rounded-lg">
            <span className="text-black ">
              <MdSettingsPower />
            </span>
          </div>
          <div>
            <small className=" block font-bold text-[19px] text-[#000000]">
              #2
            </small>
            <small className=" block text-[14px] text-[#9098A3]">
              Leaderboard
            </small>
          </div>
        </div>
      </div>
      <div className=" flex gap-5 mt-3">
        <div className=" w-[173px] h-[73px] bg-[#ffffff] rounded-[24px]  flex items-center p-3 gap-[19px]">
          <div className="bg-slate-500 p-1 rounded-lg">
            <span className="text-black ">
              <MdSettingsPower />
            </span>
          </div>
          <div>
            <small className="block text-[19px] font-bold  text-[#000000] loading-none">
              55
            </small>
            <small className="  block text-[14px] text-[#9098A3] loading-none">
              Quizzes
            </small>
          </div>
        </div>
        <div className="w-[173px] h-[73px] bg-[#ffffff] rounded-[24px]  flex items-center p-3 gap-[19px]">
          <div className="bg-green-500 p-1 rounded-lg">
            <span className="text-black ">
              <AiOutlineCheckCircle />
            </span>
          </div>
          <div>
            <small className="block text-[19px] font-bold  text-[#000000] loading-none">
              #2
            </small>
            <small className=" block text-[14px] text-[#9098A3] loading-none">
              Leaderboard
            </small>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <h1 className="text-[#9098A3] text-[14px]">STRONGEST TOPICS</h1>

        <div className=" h-[29vh] overflow-y-auto mt-2">
          <div className="card w-full bg-[#FFFFFF] shadow-xl">
            <div className="p-3">
              <div className=" flex  rounded-lg  gap-3 mt-1">
                <div>
                  <img
                    className="lg:w-[50px] w-[38px] h-[30px]  rounded-lg"
                    src="https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                </div>
                <div>
                  <div>
                    <p className="text-[14px] font-bold text-[#000000]  py-0 loading-none">
                      Food Saftey
                    </p>

                    <progress
                      className="progress py-0 progress-warning w-40"
                      value="100"
                      max="100"
                    ></progress>
                  </div>
                </div>

                <div>
                  <span className=" block text-[14px] font-bold text-[#000000]">
                    28%
                  </span>
                  <span className="block text-gray-400 pr-3 text-[15px]">
                    Correct
                  </span>
                </div>
              </div>
              <div className=" flex  rounded-lg  gap-3 mt-1">
                <div>
                  <img
                    className="lg:w-[50px] w-[38px] h-[30px]  rounded-lg"
                    src="https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                </div>
                <div>
                  <div>
                    <p className="text-[14px] font-bold text-[#000000]  py-0 loading-none">
                      Food Saftey
                    </p>

                    <progress
                      className="progress py-0 progress-warning w-40"
                      value="100"
                      max="100"
                    ></progress>
                  </div>
                </div>

                <div>
                  <span className=" block text-[14px] font-bold text-[#000000]">
                    28%
                  </span>
                  <span className="block text-gray-400 pr-3 text-[15px]">
                    Correct
                  </span>
                </div>
              </div>
              <div className=" flex  rounded-lg  gap-3 mt-1">
                <div>
                  <img
                    className="lg:w-[50px] w-[38px] h-[30px]  rounded-lg"
                    src="https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                </div>
                <div>
                  <div>
                    <p className="text-[14px] font-bold text-[#000000]  py-0 loading-none">
                      Food Saftey
                    </p>

                    <progress
                      className="progress py-0 progress-warning w-40"
                      value="100"
                      max="100"
                    ></progress>
                  </div>
                </div>

                <div>
                  <span className=" block text-[14px] font-bold text-[#000000]">
                    28%
                  </span>
                  <span className="block text-gray-400 pr-3 text-[15px]">
                    Correct
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-full bg-[#FFFFFF] shadow-xl mt-5">
            <div className="p-3">
              <div className=" flex  rounded-lg  gap-3 mt-1">
                <div>
                  <img
                    className="lg:w-[50px] w-[38px] h-[30px]  rounded-lg"
                    src="https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                </div>
                <div>
                  <div>
                    <p className="text-[14px] font-bold text-[#000000]  py-0 loading-none">
                      Food Saftey
                    </p>

                    <progress
                      className="progress py-0 progress-warning w-40"
                      value="100"
                      max="100"
                    ></progress>
                  </div>
                </div>

                <div>
                  <span className=" block text-[14px] font-bold text-[#000000]">
                    28%
                  </span>
                  <span className="block text-gray-400 pr-3 text-[15px]">
                    Correct
                  </span>
                </div>
              </div>
              <div className=" flex  rounded-lg  gap-3 mt-1">
                <div>
                  <img
                    className="lg:w-[50px] w-[38px] h-[30px]  rounded-lg"
                    src="https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                </div>
                <div>
                  <div>
                    <p className="text-[14px] font-bold text-[#000000]  py-0 loading-none">
                      Food Saftey
                    </p>

                    <progress
                      className="progress py-0 progress-warning w-40"
                      value="100"
                      max="100"
                    ></progress>
                  </div>
                </div>

                <div>
                  <span className=" block text-[14px] font-bold text-[#000000]">
                    28%
                  </span>
                  <span className="block text-gray-400 pr-3 text-[15px]">
                    Correct
                  </span>
                </div>
              </div>
              <div className=" flex  rounded-lg  gap-3 mt-1">
                <div>
                  <img
                    className="lg:w-[50px] w-[38px] h-[30px]  rounded-lg"
                    src="https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                </div>
                <div>
                  <div>
                    <p className="text-[14px] font-bold text-[#000000]  py-0 loading-none">
                      Food Saftey
                    </p>

                    <progress
                      className="progress py-0 progress-warning w-40"
                      value="100"
                      max="100"
                    ></progress>
                  </div>
                </div>

                <div>
                  <span className=" block text-[14px] font-bold text-[#000000]">
                    28%
                  </span>
                  <span className="block text-gray-400 pr-3 text-[15px]">
                    Correct
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Status;
