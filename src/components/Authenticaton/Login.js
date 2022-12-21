import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import ForgateModal from "./ForgateModal";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";

import "react-toastify/dist/ReactToastify.css";
import auth from "../firebase.init";
import { toast } from "react-toastify";
import Loading from "../utilits/Loading";
import { signOut } from "firebase/auth";
const Login = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const location = useLocation();
  const [email, setEmail] = useState("");
  let from = location.state?.from?.pathname || "/home";
  const [signInWithEmailAndPassword, users, loading, errorss] =
    useSignInWithEmailAndPassword(auth);
  const [user, loadings, error] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    fetch("http://localhost:5000/api/v1/user/login", {
      method: "POST",
      body: JSON.stringify({ email: data.email }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(async (result) => {
        console.log(data);
        if (result.success) {
          await signInWithEmailAndPassword(data.email, data.password);
          // toast.success(data.message);
          localStorage.setItem("Token", result?.token);
          localStorage.setItem("userId", result.user._id);
          // toast("User login Success");
        } else {
          toast(result.message);
        }
      });
  };
  const navigate = useNavigate();
  if (loading || loadings) {
    return <Loading />;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  let errorMessage;
  if (error || errorss) {
    errorMessage = error?.message || errorss?.message;
    // toast.error(errorMessage);
  }
  return (
    <>
      <div className="max-w-7xl m-auto px-6">
        <div className="pt-20 flex  justify-center">
          <div>
            <div className=" flex  justify-center ">
              <img className=" h-[80px] " src="/picture/logo.png" alt="logo" />
            </div>
            <h1 className="text-4xl text-white text-center mt-4">
              Hello Again!
            </h1>
            <p className="text-lg text-white mt-2">
              Welcome back you've been missed
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-20">
            <div className="h-[60px] relative">
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is Required",
                  },
                })}
                className=" w-full h-[55px]   modalColur placeholder-[#DADADA]  rounded-lg pl-14 text-lg text-white outline-[#1E1E1E]"
                type="email"
                name="email"
                placeholder="username/Phone number"
                id="email"
              />
              <label class="labe">
                {errors.email?.type === "required" && (
                  <span className="text-red-500">{errors.email.message}</span>
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
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is Required",
                  },
                })}
                className=" w-full h-[55px] modalColur placeholder-[#DADADA] text-white  rounded-lg pl-14 text-lg  outline-[#1E1E1E]"
                type="password"
                name="password"
                placeholder="Password"
                id="password"
              />
              <label class="labe">
                {errors.password?.type === "required" && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>

              <div>
                <span className=" text-white  text-3xl absolute top-3 left-4">
                  <RiLockPasswordFill />
                </span>
                <span className="text-white  text-3xl absolute top-3 right-4">
                  <BiShow />
                </span>
              </div>
            </div>

            <div className="mt-5">
              <input
                className="bg-gradient-to-b  from-[#C52410] to-[#E6550A]  w-full  rounded-lg text-[#ffffff] h-[55px]"
                type="submit"
                value="Login"
              />
              <p className="text-red-500">{errorMessage}</p>

              <p
                onClick={() => openModal()}
                className="text-lg text-[#BAC5C8] mt-3 text-center"
              >
                Forgot Password?
              </p>
            </div>
         
            <div className=" flex items-end justify-center h-[100px]">
              <p className="text-[#ffffff]">
                Don't have any account ?{" "}
                <span
                  onClick={() => navigate("/register")}
                  className="text-base-200  font-medium"
                >
                  Create Now
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
      {isOpen && (
        <ForgateModal
          openModal={openModal}
          closeModal={closeModal}
          isOpen={isOpen}
        />
      )}
    </>
  );
};

export default Login;
