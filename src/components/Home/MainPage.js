import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineScan } from "react-icons/ai";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FiDelete, FiSend } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { toast } from "react-toastify";
const MainPage = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const [myCard, setMyCard] = useState([]);
  useEffect(() => {
    const id = localStorage.getItem("WalletUserId");
    fetch(`http://localhost:5000/api/v1/loyaliCard/myCard/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMyCard(data.card);
        }
      });
  }, [myCard]);

   const cardDeleteHendeler = (id) =>{
    console.log("click");
    fetch(`http://localhost:5000/api/v1/loyaliCard/deleteCard/${id}`, {
      method: "delete"
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      if (data.success) {
        toast(data?.message)
      }
      else{
        toast(data?.message)
      }
    });

   }

  return (
    <div className="pt-5 max-w-7xl m-auto px-6">
      <div className=" flex justify-between mt-2">
        <div>
          <h1 className=" text-4xl text-white font-bold">
            {user?.displayName},
          </h1>
          <p className="text-sm mt-1 text-gray-100">Happy to see you again.</p>
        </div>
        <div className=" flex items-end ">
          <div className="w-8 h-8 flex justify-center items-center rounded-full bg-slate-500">
            <span
              onClick={() => navigate("/loyaltyCard")}
              className="text-2xl text-white font-bold  cursor-pointer"
            >
              <MdAdd />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-20">
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
          {myCard &&
            myCard?.map((card) => (
          
              <SwiperSlide  key={card._id}>
                {/*
            /> */}
                <div
                  onClick={() => navigate(`/loyaltyCardDetails/${card?._id}`)}
                  className=" h-[175px] lg:h-[300px] relative w-full rounded-lg bg-slate-200"
                >
                  <img
                    className=" rounded-lg w-full h-[180px] lg:w-full lg:h-[300px]"
                    src="/picture/loyalityCard.png"
                    alt=""
                  />
                  
                </div>
                <div className="mt-2">
                <span onClick={()=>cardDeleteHendeler(card?._id)} className="text-whie  text-2xl cursor-pointer text-[#E6550A]">
                    <FiDelete />
                  </span>
                </div>
               
              </SwiperSlide>
           
            ))}

       
        </Swiper>

       

     
      </div>
    </div>
  );
};

export default MainPage;
