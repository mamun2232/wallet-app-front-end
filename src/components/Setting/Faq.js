import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { BsSearch } from "react-icons/bs";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Faq = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-5 max-w-7xl m-auto px-6">
      <div className="pt-2 flex justify-between items-center">
        <span
          onClick={() => navigate("/setting")}
          className=" text-white text-3xl "
        >
          <MdOutlineKeyboardBackspace />
        </span>
        <span className="text-white text-lg  uppercase">faq</span>
        <span className="text-xl text-white mt-1">
          <BsSearch />
        </span>
      </div>

      <div className="mt-7 ">
        <h1 className="text-center text-xl  text-gray-100">
          How Can You we Help You?
        </h1>

        <div>
          <div className="h-[60px] relative mt-4">
            <input
              className=" w-full h-[45px]   bg-slate-600 placeholder-white rounded-lg pl-14 text-lg  outline-[#1E1E1E]"
              type="text"
              name="email"
              placeholder="Enter Keyword"
              id=""
            />
            <div>
              <span className=" text-white text-3xl absolute top-2 left-4">
                <AiOutlineSearch />
              </span>
            </div>
          </div>

          <div className=" flex flex-row  gap-3  overflow-scroll  ">
            <div className="w-[350px] bg-base-200 rounded-lg h-[96px] p-3">
              <p className="text-2xl text-blue-900">
                <IoIosNotificationsOutline />
              </p>
              <p>
                Question about <br />
                <span className=" font-bold">Getting Start</span>
              </p>
            </div>
            <div className=" sm:w-[350px]  bg-base-200 rounded-lg h-[96px] p-3">
              <p className="text-2xl text-blue-900">
                <IoIosNotificationsOutline />
              </p>
              <p>
                Question about <br />
                <span className=" font-bold">Getting Start</span>
              </p>
            </div>
            <div className="  w-[350px]  bg-base-200 rounded-lg h-[96px] p-3">
              <p className="text-2xl text-blue-900">
                <IoIosNotificationsOutline />
              </p>
              <p>
                Question about <br />
                <span className=" font-bold">Getting Start</span>
              </p>
            </div>
            <div className="  w-[350px] bg-base-200 rounded-lg h-[96px] p-3">
              <p className="text-2xl text-blue-900">
                <IoIosNotificationsOutline />
              </p>
              <p>
                Question about <br />
                <span className=" font-bold">Getting Start</span>
              </p>
            </div>
            <div className="  w-[350px] bg-base-200 rounded-lg h-[96px] p-3">
              <p className="text-2xl text-blue-900">
                <IoIosNotificationsOutline />
              </p>
              <p>
                Question about <br />
                <span className=" font-bold">Getting Start</span>
              </p>
            </div>
            <div className=" w-[350px] bg-base-200 rounded-lg h-[96px] p-3">
              <p className="text-2xl text-blue-900">
                <IoIosNotificationsOutline />
              </p>
              <p>
                Question about <br />
                <span className=" font-bold">Getting Start</span>
              </p>
            </div>
            
          </div>

          <div className="mt-7">
            <div className="flex justify-between items-center">
              <span className="text-white">Top Questions</span>
              <span className=" text-[#C52410]">View all</span>
            </div>
            <div>
              <div
                tabIndex={0}
                className="collapse collapse-plus border border-gray-300 bg-base-100 rounded-box mt-2"
              >
                <div className="collapse-title text-xl font-medium">
                  How To cerate a account
                </div>
                <div className="collapse-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus labore, dolore quasi odio molestiae provident!
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                className="collapse collapse-plus border border-gray-300 bg-base-100 rounded-box mt-2"
              >
                <div className="collapse-title text-xl font-medium">
                  How To cerate a account
                </div>
                <div className="collapse-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus labore, dolore quasi odio molestiae provident!
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                className="collapse collapse-plus border border-gray-300 bg-base-100 rounded-box mt-2"
              >
                <div className="collapse-title text-xl font-medium">
                  How To cerate a account
                </div>
                <div className="collapse-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus labore, dolore quasi odio molestiae provident!
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                className="collapse collapse-plus border border-gray-300 bg-base-100 rounded-box mt-2"
              >
                <div className="collapse-title text-xl font-medium">
                  How To cerate a account
                </div>
                <div className="collapse-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus labore, dolore quasi odio molestiae provident!
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                className="collapse collapse-plus border border-gray-300 bg-base-100 rounded-box mt-2"
              >
                <div className="collapse-title text-xl font-medium">
                  How To cerate a account
                </div>
                <div className="collapse-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus labore, dolore quasi odio molestiae provident!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
