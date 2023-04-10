import React from "react";
import * as te from "tw-elements";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../features/cartSlice";

// I forgot to add price
const Data = [
  {
    id: 1,
    name: "Margherita",
    description: "Tomato sauce, mozzarella, basil",
    pic: "http://www.poppas.co.nz/wp-content/uploads/2018/01/Margherita.jpg",
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Tomato sauce, mozzarella, spicy pepperoni",
    pic: "https://thelionsroarmhsn.com/wp-content/uploads/2015/04/Pepperoni_1.jpg",
  },
  {
    id: 3,
    name: "Vegetarian",
    description: "Tomato sauce, mozzarella, veggies",
    pic: "http://milrecetas.net/wp-content/uploads/2015/07/Pizza-Vegetariana-3-1024x683.jpg",
  },
  {
    id: 4,
    name: "Meat Lovers",
    description: "Tomato sauce, mozzarella, multiple meats",
    pic: "http://3.bp.blogspot.com/-itXh-9N2miA/UNtu4hLpzQI/AAAAAAAABgM/T2MVHeA9NSk/s1600/IMG_0925.JPG",
  },
  {
    id: 5,
    name: "Hawaiian",
    description: "Tomato sauce, mozzarella, ham, pineapple",
    pic: "https://e3.365dm.com/17/06/1600x900/2c282d66970e0b5de04b40624de4882668b9e75feee2e6a05b0f4244d64b54d4_3974816.jpg?20170610032713",
  },
];

const Food = () => {
  const dispatch = useDispatch()
  const Clicked = () =>{
    console.log()
  }

  return (
    <div className="mt-5">
      <div className="flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ name, description, pic }) => {
          return (
            <div className="group group/item">
              <div className="block w-[250px] rounded-lg bg-red-900 shadow-lg ">
                <a href="#!">
                  <img
                    className="rounded-t-lg w-full h-[170px] object-cover"
                    src={`${pic}`}
                    alt=""
                  />
                </a>
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 Logo">
                    {name}
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {description}
                  </p>
                  <button
                    type="button"
                    className="inline-block rounded bg-red-950 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-950 focus:outline-none animate-pulse hover:animate-none"
                    onClick={()=>dispatch(increment())}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Food;
