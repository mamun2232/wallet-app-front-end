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
          className=" text-white text-[24px] "
        >
          <MdOutlineKeyboardBackspace />
        </span>
        <span className="text-[#ffffff] text-[22px]  uppercase">faq</span>
        <span className="text-[#ffffff] text-[24px] mt-1">
          <BsSearch />
        </span>
      </div>

      <div className="mt-7 ">
        <h1 className="text-center text-[22px]  text-[#ffffff] ">
          How Can You we Help You?
        </h1>

        <div>
          <div className="h-[60px] relative mt-4">
            <input
              className=" w-full h-[42px]   bg-[#434343] placeholder-[#DADADA] rounded-lg pl-14 text-lg  outline-[#1E1E1E]"
              type="text"
              name="email"
              placeholder="Enter Keyword"
              id=""
            />
            <div>
              <span className=" text-[#DADADA] text-3xl absolute top-2 left-4">
                <AiOutlineSearch />
              </span>
            </div>
          </div>

          <div className=" flex flex-row  gap-3  overflow-x-auto">
            <div className="w-[144px] bg-[#103E63] rounded-[8px] h-[116px] p-3">
              <p className="text-2xl text-[#438FFF]">
                <IoIosNotificationsOutline />
              </p>
              <p className="text-[14px] text-gray-400 mt-3">
                Question about <br />
                <span className="  font-medium text-[#ffffff]">
                  Getting Start
                </span>
              </p>
            </div>
            <div className="w-[144px] bg-[#2A4037] rounded-[8px] h-[116px] p-3">
              <p className="text-2xl text-[#07F8B5]">
                <IoIosNotificationsOutline />
              </p>
              <p className="text-[14px] text-gray-400 mt-3">
                Question about <br />
                <span className="  font-medium text-[#ffffff]">
                  Getting Start
                </span>
              </p>
            </div>
          </div>

          <div className="mt-7">
            <div className="flex justify-between items-center">
              <span className="text-[#ffffff] text-[16px]">
                Top Questions :
              </span>
              <span className=" text-[#FF5361] text-[16px]">View all</span>
            </div>
            <div>
              <div
                tabIndex={0}
                className="collapse collapse-plus border border-[#434343]
                  bg-[#1E1E1E] rounded-box mt-2"
              >
                <div className="collapse-title text-[#FEFEFE]  ext-[14px]font-medium">
                  How To cerate a account
                </div>
                <div className="collapse-content ">
                  <p className=" text-[#DADADA] text-[14px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus labore, dolore quasi odio molestiae provident!
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                className="collapse collapse-plus border border-[#434343]
                  bg-[#1E1E1E] rounded-box mt-2"
              >
                <div className="collapse-title text-[#FEFEFE]  ext-[14px]font-medium">
                  How To cerate a account
                </div>
                <div className="collapse-content ">
                  <p className=" text-[#DADADA] text-[14px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus labore, dolore quasi odio molestiae provident!
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                className="collapse collapse-plus border border-[#434343]
                  bg-[#1E1E1E] rounded-box mt-2"
              >
                <div className="collapse-title text-[#FEFEFE]  ext-[14px]font-medium">
                  How To cerate a account
                </div>
                <div className="collapse-content ">
                  <p className=" text-[#DADADA] text-[14px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus labore, dolore quasi odio molestiae provident!
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                className="collapse collapse-plus border border-[#434343]
                  bg-[#1E1E1E] rounded-box mt-2"
              >
                <div className="collapse-title text-[#FEFEFE]  ext-[14px]font-medium">
                  How To cerate a account
                </div>
                <div className="collapse-content ">
                  <p className=" text-[#DADADA] text-[14px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus labore, dolore quasi odio molestiae provident!
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                className="collapse collapse-plus border border-[#434343]
                  bg-[#1E1E1E] rounded-box mt-2"
              >
                <div className="collapse-title text-[#FEFEFE]  ext-[14px]font-medium">
                  How To cerate a account
                </div>
                <div className="collapse-content ">
                  <p className=" text-[#DADADA] text-[14px]">
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
