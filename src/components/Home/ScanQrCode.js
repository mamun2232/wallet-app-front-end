import React, { useEffect, useState } from "react";

import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import  QRCode  from "qrcode";
const ScanQrCode = () => {
  const navigate = useNavigate();
  const [src , setSrc] =useState("")
  const { id } = useParams();
  const [card, setCard] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/loyaliCard/cardDetials/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCard(data.card);
          QRCode.toDataURL(`name ${data?.card?.name} , information ${data?.card?.cardInformation}`).then((setSrc))
          
        }
      });
       

  }, []);
  

  console.log(card);

  return (
    <div className="pt-5 max-w-7xl m-auto px-6">
      <div className="pt-5 flex justify-between">
        <span
          onClick={() => navigate("/home")}
          className=" text-white text-3xl "
        >
          <MdOutlineKeyboardBackspace />
        </span>
        <span className="text-white text-lg ">Toot Loyality Card</span>
        <span></span>
      </div>

      <div className=" mt-5">
        <img className=" w-[350px] h-[440px]" src="/picture/toot.png" alt="" />
      </div>

      <div className=" flex justify-center mt-5">
        <img className=" w-[131px] h-[131px]" src={src} alt="" />
      </div>
    </div>
  );
};

export default ScanQrCode;
