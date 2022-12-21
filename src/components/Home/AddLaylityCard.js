import React from "react";
import { useForm } from "react-hook-form";
import { BsCreditCard2Back } from "react-icons/bs";

import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { TiDocument } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddLaylityCard = () => {
  const navigate = useNavigate();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const user = localStorage.getItem("WalletUserId");
    const card = {
      name: data.name,
      cardInformation: data.cardInformation,
      user,
    };
    fetch("http://localhost:5000/api/v1/loyaliCard/create", {
      method: "POST",
      body: JSON.stringify(card),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(async (result) => {
        if (result.success) {
          toast(result.message);
          reset();
        } else {
          toast(result.message);
        }
      });
  };
  return (
    <div className="max-w-7xl m-auto px-6 ">
      <div className="pt-5 flex justify-between">
        <span
          onClick={() => navigate("/home")}
          className=" text-white text-3xl "
        >
          <MdOutlineKeyboardBackspace />
        </span>
        <span className="text-white text-lg ">Add Loyality Card</span>
        <span></span>
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-20">
            <div className="h-[60px] relative">
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "name is Required",
                  },
                })}
                className=" w-full h-[55px]   modalColur placeholder-[#DADADA]  rounded-lg pl-14 text-lg text-white outline-[#1E1E1E]"
                type="text"
                name="name"
                placeholder="Enter Your Card Name"
                id="name"
              />
              <label class="labe">
                {errors.name?.type === "required" && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </label>
              <div>
                <span className=" text-white text-3xl absolute top-3 left-4">
                  <BsCreditCard2Back />
                </span>
              </div>
            </div>
            <div className="h-[60px] mt-5 relative">
              <textarea
                {...register("cardInformation", {
                  required: {
                    value: true,
                    message: "cardInformation is Required",
                  },
                })}
                className=" w-full h-[155px] modalColur placeholder-[#DADADA] text-white  rounded-lg pl-14 text-lg  py-4 outline-[#1E1E1E]"
                type="cardInformation"
                name="cardInformation"
                placeholder="Enter Your card Information"
                id="cardInformation"
              />
              <label class="labe">
                {errors.cardInformation?.type === "required" && (
                  <span className="text-red-500">
                    {errors.cardInformation.message}
                  </span>
                )}
              </label>

              <div>
                <span className=" text-white  text-3xl absolute top-3 left-4">
                  <TiDocument />
                </span>
              </div>
            </div>

            <div className="mt-40">
              <input
                className="bg-gradient-to-b  from-[#C52410] to-[#E6550A]  w-full  rounded-lg text-[#ffffff] h-[55px]"
                type="submit"
                value="Add Card"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLaylityCard;
