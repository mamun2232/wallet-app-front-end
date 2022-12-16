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
          className=" text-white text-[33px] "
        >
          <MdOutlineKeyboardBackspace />
        </span>
        <span className="text-white text-[24px] ">Daily Challange</span>
        <span></span>
      </div>

      <div className=" overflow-y-scroll overscroll-none  h-[78vh] mt-8">
        <div
          className=" flex  modalColur  rounded-[8px] p-3 h-[
82px] gap-3 mt-3"
        >
          <div className="mt-1">
            <img
              className="lg:w-[75px] w-[62px] h-[62px]  rounded-lg"
              src="https://cdn3.vectorstock.com/i/1000x1000/00/02/landscape-mountain-in-morning-at-windo-vector-31040002.jpg"
              alt=""
            />
          </div>
          <div>
            <p className="text-[15px] font-bold text-white ">Watch Ad</p>
            <p className="text-[10px] text-[#BAC5C8] py-0 my-0">
              watch the product win the 20xp
            </p>

            <div className="t py-0  my-0">
              <s className="text-[#BAC5C8]  block text-[10px] text-end">0/8</s>
              <progress
                className="progress py-0 progress-warning  w-56 h-[7px]"
                value="100"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
        <div
          className=" flex  modalColur  rounded-[8px] p-3 h-[
82px] gap-3 mt-3"
        >
          <div className="mt-1">
            <img
              className="lg:w-[75px] w-[62px] h-[62px]  rounded-lg"
              src="https://c.files.bbci.co.uk/E909/production/_112375695_crucible976.jpg"
              alt=""
            />
          </div>
          <div>
            <p className="text-[15px] font-bold text-white ">Play a Game</p>
            <p className="text-[10px] text-[#BAC5C8] py-0 my-0">
            Next challange in 2d 13h 23m 1s
            </p>

            <div className="t py-0  my-0">
              <s className="text-[#BAC5C8]  block text-[10px] text-end">0/8</s>
              <progress
                className="progress py-0 progress-warning  w-56 h-[7px]"
                value="100"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
        <div
          className=" flex  modalColur  rounded-[8px] p-3 h-[
82px] gap-3 mt-3"
        >
          <div className="mt-1">
            <img
              className="lg:w-[75px] w-[62px] h-[62px]  rounded-lg"
              src="https://thumbs.dreamstime.com/b/beautiful-natureal-view-captured-high-peak-natural-trees-hills-green-greeny-166685047.jpg"
              alt=""
            />
          </div>
          <div>
            <p className="text-[15px] font-bold text-white ">Watch Ad</p>
            <p className="text-[10px] text-[#BAC5C8] py-0 my-0">
              watch the product win the 20xp
            </p>

            <div className="t py-0  my-0">
              <s className="text-[#BAC5C8]  block text-[10px] text-end">0/8</s>
              <progress
                className="progress py-0 progress-warning  w-56 h-[7px]"
                value="100"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
        <div
          className=" flex  modalColur  rounded-[8px] p-3 h-[
82px] gap-3 mt-3"
        >
          <div className="mt-1">
            <img
              className="lg:w-[75px] w-[62px] h-[62px]  rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTc2g4eAxId38idBjNqYGblDqd_Mi2jlbGD787y_z-vw&s"
              alt=""
            />
          </div>
          <div>
            <p className="text-[15px] font-bold text-white ">Watch Ad</p>
            <p className="text-[10px] text-[#BAC5C8] py-0 my-0">
              watch the product win the 20xp
            </p>

            <div className="t py-0  my-0">
              <s className="text-[#BAC5C8]  block text-[10px] text-end">0/8</s>
              <progress
                className="progress py-0 progress-warning  w-56 h-[7px]"
                value="100"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
        <div
          className=" flex  modalColur  rounded-[8px] p-3 h-[
82px] gap-3 mt-3"
        >
          <div className="mt-1">
            <img
              className="lg:w-[75px] w-[62px] h-[62px]  rounded-lg"
              src="https://i0.wp.com/lostinmichigan.net/wp-content/uploads/2020/11/belrockton-dormatory.jpg?fit=640%2C427&ssl=1"
              alt=""
            />
          </div>
          <div>
            <p className="text-[15px] font-bold text-white ">Watch Ad</p>
            <p className="text-[10px] text-[#BAC5C8] py-0 my-0">
              watch the product win the 20xp
            </p>

            <div className="t py-0  my-0">
              <s className="text-[#BAC5C8]  block text-[10px] text-end">0/8</s>
              <progress
                className="progress py-0 progress-warning  w-56 h-[7px]"
                value="100"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
        <div
          className=" flex  modalColur  rounded-[8px] p-3 h-[
82px] gap-3 mt-3"
        >
          <div className="mt-1">
            <img
              className="lg:w-[75px] w-[62px] h-[62px]  rounded-lg"
              src="https://images.unsplash.com/photo-1600804889194-e6fbf08ddb39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFuZHNvbWUlMjBtYW58ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
          </div>
          <div>
            <p className="text-[15px] font-bold text-white ">Watch Ad</p>
            <p className="text-[10px] text-[#BAC5C8] py-0 my-0">
              watch the product win the 20xp
            </p>

            <div className="t py-0  my-0">
              <s className="text-[#BAC5C8]  block text-[10px] text-end">0/8</s>
              <progress
                className="progress py-0 progress-warning  w-56 h-[7px]"
                value="100"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
        <div
          className=" flex  modalColur  rounded-[8px] p-3 h-[
82px] gap-3 mt-3"
        >
          <div className="mt-1">
            <img
              className="lg:w-[75px] w-[62px] h-[62px]  rounded-lg"
              src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000"
              alt=""
            />
          </div>
          <div>
            <p className="text-[15px] font-bold text-white ">Watch Ad</p>
            <p className="text-[10px] text-[#BAC5C8] py-0 my-0">
              watch the product win the 20xp
            </p>

            <div className="t py-0  my-0">
              <s className="text-[#BAC5C8]  block text-[10px] text-end">0/8</s>
              <progress
                className="progress py-0 progress-warning  w-56 h-[7px]"
                value="100"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
