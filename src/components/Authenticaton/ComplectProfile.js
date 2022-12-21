import React, { useEffect, useState } from "react";
import { AiFillCamera, AiOutlineMail } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import {
  MdAddPhotoAlternate,
  MdOutlineKeyboardBackspace,
} from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { FaBirthdayCake } from "react-icons/fa";
import { BsGenderFemale } from "react-icons/bs";

const ComplectProfile = () => {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    setId(localStorage.getItem("WalletUserId"));
  }, []);
  const [avater, setAvater] = useState("");
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  console.log(id);
  const onSubmit = async (data) => {
    if (message) {
      const myForm = new FormData();
      myForm.append("name", data.name);
      myForm.append("phone", data.phone);
      myForm.append("birthday", data.birthday);
      myForm.append("gender", data.gender);
      myForm.append("avater", avater);
      const ids = localStorage.getItem("WalletUserId");
      setMessage("");
      await axios({
        method: "put",
        url: `http://localhost:5000/api/v1/user/complectUser/${ids}`,
        data: myForm,
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${localStorage.getItem("UserToken")}`,
        },
      })
        .then((res) => {
          toast("Your Profile Complect Successfull");
          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setMessage("images is Required");
    }

    console.log(data);
  };
  const ProductPictureHendeler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvater(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="max-w-7xl m-auto px-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pt-3">
          <span onClick={() => navigate("/")} className=" text-white text-3xl ">
            <MdOutlineKeyboardBackspace />
          </span>
        </div>
        <div className=" text-center mt-5">
          <p className="text-[#FFFFFF] text-3xl font-medium">
            Complect Profile
          </p>
          <p className=" text-gray-500 mt-1">
            File Out the Information to get stared
          </p>
        </div>
        <div className="pt-2 flex  justify-center">
          <input
            {...register("images", {
              required: {
                value: true,
                message: "images is Required",
              },
            })}
            onChange={(e) => ProductPictureHendeler(e)}
            type="file"
            name="image-uplode"
            id="product-img"
            hidden
            placeholder="Enter seller name"
            //   class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />

          <label htmlFor={!avater && "product-img"} className=" ">
            <div>
              {!avater && (
                <div className="h-40 lg:w-72 lg:h-72 w-40 border rounded-full flex justify-center modalColur items-center relative">
                  <div className=" ">
                    <span className="text-6xl text-[#FFFFFF]">
                      <CgProfile />
                    </span>
                  </div>
                  <div>
                    <span className="p-3 text-2xl rounded-full  flex justify-center w-[50px]  text-[#ffffff] bg-gradient-to-b  from-[#C52410] to-[#E6550A] absolute left-32 top-20  lg:left-64">
                      <AiFillCamera />
                    </span>
                  </div>
                </div>
              )}
              {avater && (
                <div className="h-40 lg:w-72 w-40 lg:h-72  border rounded-full flex justify-center  items-center">
                  <div className="h-40 lg:w-72 w-40 lg:h-72 relative">
                    <img
                      className="h-40 w-40 lg:w-72 lg:h-72 p-1 rounded-full"
                      src={avater}
                      alt="productPicure"
                    />
                    <span
                      onClick={() => setAvater("")}
                      className=" absolute text-3xl top-20 p-2 lg:left-64 bg-gradient-to-b  from-[#C52410] to-[#E6550A]   rounded-full  text-[#ffffff] left-32 cursor-pointer"
                    >
                      <TiDelete />
                    </span>
                  </div>
                </div>
              )}
            </div>
          </label>
        </div>
        <p className=" text-red-500 text-center">{message}</p>
        <p className="text-sm text-gray-100 text-center mt-1">
          Uplode an image an yours
        </p>

        <div className="mt-10">
          <div className="h-[60px] relative">
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
              className=" w-full h-[55px]   modalColur placeholder-white rounded-lg pl-14 text-lg text-white outline-[#1E1E1E]"
              type="text"
              name="name"
              placeholder="Name"
              id=""
            />
            <label class="labe">
              {errors.name?.type === "required" && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </label>
            <div>
              <span className=" text-white text-3xl absolute top-3 left-4">
                <CgProfile />
              </span>
            </div>
          </div>
          <div className="h-[60px] mt-5 relative">
            <input
              {...register("phone", {
                required: {
                  value: true,
                  message: "Phone is Required",
                },
              })}
              className=" w-full h-[55px]   modalColur placeholder-white rounded-lg pl-14 text-lg text-white outline-[#1E1E1E]"
              type="number"
              name="phone"
              placeholder="Number"
              id="phone"
            />
            <label class="labe">
              {errors.phone?.type === "required" && (
                <span className="text-red-500">{errors.phone.message}</span>
              )}
            </label>
            <div>
              <span className=" text-white text-3xl absolute top-3 left-4">
                <AiOutlineMail />
              </span>
            </div>
          </div>
          <div className="h-[60px] mt-5 relative">
            <input
              {...register("birthday", {
                required: {
                  value: true,
                  message: "Bithday is Required",
                },
              })}
              className=" w-full h-[55px] modalColur text-white  placeholder-white  rounded-lg pl-14 text-lg  outline-[#1E1E1E]"
              type="date"
              name="birthday"
              placeholder="Bithday"
              id="birthday"
            />
            <label class="labe">
              {errors.birthday?.type === "required" && (
                <span className="text-red-500">{errors.birthday.message}</span>
              )}
            </label>
            <div>
              <span className=" text-white  text-3xl absolute top-3 left-4">
                <FaBirthdayCake />
              </span>
            </div>
          </div>
          <div className="h-[60px] mt-5 relative">
            <select
              {...register("gender", {
                required: {
                  value: true,
                  message: "Bithday is Required",
                },
              })}
              className=" w-full h-[55px] modalColur  text-black placeholder-white  rounded-lg pl-14 text-lg  outline-[#1E1E1E]"
              type="text"
              name="gender"
              placeholder="Gender"
              id="gender"
            >
              <option className=" " value="Male" selected>
                Male
              </option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <label class="labe">
              {errors.gender?.type === "required" && (
                <span className="text-red-500">{errors.gender.message}</span>
              )}
            </label>

            <div>
              <span className=" text-white  text-3xl absolute top-3 left-4">
                <BsGenderFemale />
              </span>
            </div>
          </div>

          <div className="mt-5">
            <input
              className="bg-gradient-to-b  from-[#C52410] to-[#E6550A] w-full  rounded-lg text-white h-[55px]"
              type="submit"
              value="Complect Profile"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ComplectProfile;
