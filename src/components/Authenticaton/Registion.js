import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { useForm } from "react-hook-form";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../utilits/Loading";
import { toast } from "react-toastify";

const Registion = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user, loadings, error] = useAuthState(auth);
  const [createUserWithEmailAndPassword, Cuser, loading, Cerror] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, Uerror] = useUpdateProfile(auth);
  const onSubmit = async (data) => {
    if (data.password == data.confromPiassword) {
      const userInfo = {
        name: data.name,
        email: data.email,
      };

      fetch("http://localhost:5000/api/v1/user/register", {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then(async (result) => {
          console.log(result);
          if (result.success) {
            NotificationManager.success("User Signup Successfull");

            await createUserWithEmailAndPassword(data.email, data.password);
            await updateProfile({ displayName: data.name });
            // navigate("/login");
            localStorage.setItem("WalletToken", result?.token);
            localStorage.setItem("WalletUserId", result.user._id);
          } else {
            toast(result.message);
          }
        });
    } else {
      toast("Password dont Match");
    }
  };

  if (loading || loadings) {
    return <Loading />;
  }

  if (user) {
    navigate("/complectProfile");
    // if(userId){
    //   disPatch(fetchUserAvater(userId));

    // }
  }
  return (
    <div className="max-w-7xl m-auto px-6">
      <div className="pt-5">
        <span
          onClick={() => navigate("/")}
          className=" text-white text-[24px] "
        >
          <MdOutlineKeyboardBackspace />
        </span>
      </div>
      <div className="pt-10 flex  justify-center">
        <div>
          <h1 className="text-4xl text-white text-center mt-4">
            Lets Get Stared!
          </h1>
          <p className="text-lg text-white mt-2">
            Create your <span>Absorb</span> account now
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-10">
          <div className="h-[60px] relative">
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
              className=" w-full h-[55px]   modalColur placeholder-[#DADADA] text-white rounded-lg pl-14 text-lg  outline-[#1E1E1E]"
              type="text"
              name="name"
              placeholder="Name"
              id="name"
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
          <div className="h-[60px] mt-6 relative">
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
              })}
              className=" w-full h-[55px]   modalColur placeholder-[#DADADA] text-white rounded-lg pl-14 text-lg  outline-[#1E1E1E]"
              type="email"
              name="email"
              placeholder="Email"
              id=""
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
                  message: "Password is Required",
                },
              })}
              className=" w-full h-[55px] modalColur placeholder-[#DADADA] text-white  rounded-lg pl-14 text-lg  outline-[#1E1E1E]"
              type="password"
              name="password"
              placeholder="Password"
              id=""
            />
            <label class="labe">
              {errors.password?.type === "required" && (
                <span className="text-red-500">{errors.password.message}</span>
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
          <div className="h-[60px] mt-5 relative">
            <input
              {...register("confromPiassword", {
                required: {
                  value: true,
                  message: "confromPiassword is Required",
                },
              })}
              className=" w-full h-[55px] modalColur placeholder-[#DADADA] text-white  rounded-lg pl-14 text-lg  outline-[#1E1E1E]"
              type="password"
              name="confromPiassword"
              placeholder="Confirm Password"
              id="confromPiassword"
            />
            <label class="labe">
              {errors.confromPiassword?.type === "required" && (
                <span className="text-red-500">
                  {errors.confromPiassword.message}
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
              className="bg-gradient-to-b  from-[#C52410] to-[#E6550A] w-full  rounded-lg text-white h-[55px]"
              type="submit"
              value="Create Account"
            />
          </div>

          <div className=" flex items-end justify-center h-[85px]">
            <p className="text-gray-100">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/")}
                className="text-gray-200 font-bold"
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registion;
