import React from 'react';
import { MdSettingsPower } from 'react-icons/md';

const Status = () => {
      return (
            <>
           
    
          <div className=" flex gap-5 mt-5">
            <div className=" w-full h-16 bg-slate-200 rounded-2xl flex items-center p-3 gap-5">
              <div className="bg-slate-500 p-1 rounded-lg">
                <span className="text-black ">
                  <MdSettingsPower />
                </span>
              </div>
              <div>
                <small className=" block font-bold">55</small>
                <small className=" block py-0">Quizzes</small>
              </div>
            </div>
            <div className=" w-full h-16 bg-slate-200 rounded-2xl flex items-center p-3 gap-5">
              <div className="bg-slate-500 p-1 rounded-lg">
                <span className="text-black ">
                  <MdSettingsPower />
                </span>
              </div>
              <div>
                <small className=" block font-bold">#2</small>
                <small className=" block py-0">Leaderboard</small>
              </div>
            </div>
          </div>
          <div className=" flex gap-5 mt-3">
            <div className=" w-full h-16 bg-slate-200 rounded-2xl flex items-center p-3 gap-5">
              <div className="bg-slate-500 p-1 rounded-lg">
                <span className="text-black ">
                  <MdSettingsPower />
                </span>
              </div>
              <div>
                <small className=" block font-bold">55</small>
                <small className=" block py-0">Quizzes</small>
              </div>
            </div>
            <div className=" w-full h-16 bg-slate-200 rounded-2xl flex items-center p-3 gap-5">
              <div className="bg-slate-500 p-1 rounded-lg">
                <span className="text-black ">
                  <MdSettingsPower />
                </span>
              </div>
              <div>
                <small className=" block font-bold">#2</small>
                <small className=" block py-0">Leaderboard</small>
              </div>
            </div>
          </div>
    
          <div className="mt-3">
            <h1 className="text-gray-200 text-lg">STRONGEST TOPICS</h1>
    
            <div className=" h-52 overflow-y-auto">
              <div className="card w-full bg-base-100 shadow-xl">
                <div className="p-3">
                  <div className=" flex  rounded-lg  gap-3 mt-1">
                    <div>
                      <img
                        className="lg:w-[50px] w-[40px] h-[35px]  rounded-lg"
                        src="https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                      />
                    </div>
                    <div>
                      <div>
                        <p className="text-[15px] font-bold text-black ">
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
                      <span className=" block text-gray-600 font-bold text-[13px]">
                        28%
                      </span>
                      <span className="block text-gray-600 pr-3 text-[15px]">
                        Correct
                      </span>
                    </div>
                  </div>
                  <div className=" flex  rounded-lg  gap-3 mt-1">
                    <div>
                      <img
                        className="lg:w-[50px] w-[40px] h-[35px]  rounded-lg"
                        src="https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                      />
                    </div>
                    <div>
                      <div>
                        <p className="text-[15px] font-bold text-black ">
                          Compilance protocal
                        </p>
    
                        <progress
                          className="progress py-0 progress-warning w-40"
                          value="100"
                          max="100"
                        ></progress>
                      </div>
                    </div>
    
                    <div>
                      <span className=" block text-gray-600 font-bold text-[13px]">
                        28%
                      </span>
                      <span className="block text-gray-600 pr-3 text-[15px]">
                        Correct
                      </span>
                    </div>
                  </div>
                  <div className=" flex  rounded-lg  gap-3 mt-1">
                    <div>
                      <img
                        className="lg:w-[50px] w-[40px] h-[35px]  rounded-lg"
                        src="https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                      />
                    </div>
                    <div>
                      <div>
                        <p className="text-[15px] font-bold text-black ">
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
                      <span className=" block text-gray-600 font-bold text-[13px]">
                        28%
                      </span>
                      <span className="block text-gray-600 pr-3 text-[15px]">
                        Correct
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-bod">
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          </>
      );
};

export default Status;