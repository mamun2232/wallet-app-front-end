import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const procut = [
    { procut: 1 },
    { procut: 2 },
    { procut: 3 },
    { procut: 4 },
    { procut: 5 },
    { procut: 6 },
    { procut: 6 },
    { procut: 6 },
  ];
  return (
    <div className="pt-5 max-w-7xl m-auto px-4">
      <div className="pt-5 flex justify-between">
        <span
          onClick={() => navigate("/home")}
          className=" text-white text-3xl "
        >
          <MdOutlineKeyboardBackspace />
        </span>
        <span className="text-white text-lg ">Shop</span>
        <span></span>
      </div>

      <div className=" mt-5  grid grid-cols-2 lg:grid-cols-3 gap-2  h-[80vh] overflow-y-auto">
        {procut.map((product) => (
          <div className="card w-full bg-gray-100 shadow-sm p-3">
            <figure className="">
              <img
                src="https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0"
                alt="Shoes"
                className="rounded-lg w-full h-[70px]"
              />
            </figure>

            <div className=" mt-1 text-center ">
              <h1 className="text-black font-medium">Coffe Beans</h1>
              <small className="text-black">One Cap copy with mix</small>
              <p className="text-black font-medium"> $200.05</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
