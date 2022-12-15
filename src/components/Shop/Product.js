import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const procut = [
    { img:  "https://vaya.in/recipes/wp-content/uploads/2018/05/Coffee.jpg",
    name: "Coffe Beans",
    title: " One Cap copy with mix",
    price: "200.05"
   },
    { img:  "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg",
    name: "Food",
    title: " One Cap copy with mix",
    price: "200.05"
   },
    { img:  "https://img.freepik.com/free-vector/modern-coupon-template-with-flat-design_23-2147964693.jpg?w=2000",
    name: "Coupon",
    title: " One Cap copy with mix",
    price: "200.05"
   },
    { img:  "https://images.news18.com/ibnlive/uploads/2018/12/Alcohol.jpg?im=FitAndFill,width=1200,height=1200",
    name: "Drinks",
    title: " One Cap copy with mix",
    price: "200.05"
   },
    { img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFF9wTEzpm7DnceDqGrXlvVHN-forx0rsCcgJEf3eMP4f_YZ3cOwozOmeMS8w5S23lmk&usqp=CAU",
    name: "Pineapple",
    title: " One Cap copy with mix",
    price: "200.05"
   },
    { img:  "https://www.mashed.com/img/gallery/doing-this-could-make-you-actually-like-drinking-black-coffee/l-intro-1641943654.jpg",
    name: "Black Coffee",
    title: " One Cap copy with mix",
    price: "200.05"
   },
   
  ];
  return (
    <div className="pt-5 max-w-7xl m-auto px-4">
      <div className="pt-5 flex justify-between">
        <span
          onClick={() => navigate("/home")}
          className=" text-white text-[33px] "
        >
          <MdOutlineKeyboardBackspace />
        </span>
        <span className="text-white text-[24px] ">Shop</span>
        <span></span>
      </div>

      <div className=" mt-5  grid grid-cols-2 lg:grid-cols-3 gap-[10px]  h-[78vh] overflow-y-auto">
        {procut.map((product) => (
          <div className="card w-full modalColur h-[193px] rounded-[8px] p-4">
            <figure className="">
              <img
                src={product.img}
                alt="Shoes"
                className=" w-[137px] rounded-[4px] h-[103px]"
              />
            </figure>

            <div className=" mt-2 text-center ">
              <h1 className="text-[#ffffff] text-[16px] leading-none ">{product.name}</h1>
              <small className="text-[#BAC5C8] text-[10px]">
               {product.title}
              </small>
              <p className="text-[#ffffff] text-[16px]"> ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
