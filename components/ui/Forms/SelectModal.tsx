'use client'
import Image from "next/image";
import React, { useState } from "react";
import { BsSkipEndFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import categories from "@/public/assets/categories.json";
import { defaultQuestions, TIMES } from "@/helpers/gameCoinfig";
import { IoMdInfinite } from "react-icons/io";

const SelectModal = () => {
  const WILCARDS = [
    {
      name: "Skip question",
      icon: <BsSkipEndFill color="white" className="text-2xl" />,
      amount: 1,
    },
    {
      name: "Delete two wrong questions",
      icon: (
        <Image
          src="/assets/fiftyIcon.svg"
          alt="fifty fifty"
          width={23}
          height={23}
        />
      ),
      amount: 1,
    },
    {
      name: "Lives",
      icon: <FaHeart color="white" className="text-2xl" />,
      amount: 1,
    },
  ];

  return (
    <>
      <div className="container flex md:flex-row flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-white ">Wildcards</h2>
          <div className="wildcards flex flex-row gap-3 mt-2">
            {WILCARDS.map((wildcard) => (
              <div
                className="wildcard flex flex-row items-center gap-2"
                key={wildcard.name}
              >
                <div className="p-2.5 bg-blue-500 rounded-lg">
                  {wildcard.icon}
                </div>
                <p className="text-white">{"x" + wildcard.amount}</p>
              </div>
            ))}
          </div>
          <h2 className="text-lg font-semibold text-white flex flex-row items-center gap-5 ">
            Time
            <input
              type="checkbox"
              name="timeMode"
              id="timeMode"
              className="form-checkbox h-4 w-4 text-blue-600 rounded-xl transition duration-300 ease-in-out transform hover:scale-110 focus:ring-2 focus:ring-blue-500"
            />
          </h2>
          <div className="wildcards flex flex-row gap-3 mt-2">
            {TIMES.map((time, i) => (
              <div className="times flex flex-row items-center gap-2" key={i}>
                <div className="p-3 bg-blue-500 rounded-lg text-white font-bold text-lg">
                  {time}s
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-lg font-semibold text-white flex flex-row items-center gap-5 mt-6 ">
            Questions
            <input
              type="checkbox"
              name="timeMode"
              id="timeMode"
              className="form-checkbox h-4 w-4 text-blue-600 rounded-xl transition duration-300 ease-in-out transform hover:scale-110 focus:ring-2 focus:ring-blue-500"
            />
          </h2>
          <div className="questions flex flex-row gap-3 mt-2">
            <div className="flex items-center w-full">
              <input
                type="range"
                name="questions"
                min={defaultQuestions.minQuestions}
                max={defaultQuestions.maxQuestions}
                className={`w-full cursor-pointer ${"infinitymode" ? "grayscale cursor-not-allowed" : ""
                  }`}
              />

              <span
                className={`ml-2 flex justify-center text-white text-lg font-semibold h-5 ${"text-[24px]"}`}
              >
                {"infinitymode" ? <IoMdInfinite /> : "questions"}
              </span>
            </div>
          </div>
        </div>
        <SelectCategory />
      </div>
    </>
  );
};

export default SelectModal;

export const SelectCategory = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);


  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        // Don't allow deselecting if it's the last category
        // if (prev.length === 1) return prev;
        return prev.filter((id) => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  return (
    <>
      <div className="flex flex-col">
        <fieldset>
          <legend className="text-lg mb-2 font-semibold text-white">
            Categories
          </legend>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 grid-rows-2 gap-4">
            {categories.map((category) => (
              <label
                key={category.id}
                className="relative cursor-pointer"
                title={`Explore ${category.name}`}
              >
                <input
                  type="checkbox"
                  name="categories"
                  id={`category-${category.id}`}
                  value={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleCategoryChange(category.id)}
                  className="peer absolute opacity-0 w-full h-full cursor-pointer"
                />
                <div
                  className={`block w-full p-4 rounded-lg
                    transform-gpu transition-all duration-500 ease-out
                    hover:translate-y-[-8px] hover:rotate-2
                    active:translate-y-1 active:rotate-1 active:scale-95
                    border-2 border-white/20
                    backdrop-blur-sm bg-black/80
                    hover:bg-black/90
                    peer-checked:ring-2 peer-checked:ring-white
                    hover:[box-shadow:0_20px_25px_-5px_rgba(0,0,0,0.2),0_0_15px_-3px_rgba(0,0,0,0.1)]
                     flex-col items-center gap-3
                    overflow-hidden
                    before:absolute before:inset-0 
                    before:bg-gradient-to-tr before:from-white/0 before:to-white/20 
                    before:opacity-0 before:transition-opacity before:duration-500
                    hover:before:opacity-100
                    peer-checked:bg-opacity-70`}
                  style={{
                    borderColor: category.color,
                  }}
                >
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <Image
                      className="w-8 h-8 drop-shadow-lg 
                        transition-all duration-500 ease-out
                        group-hover:scale-110 group-hover:rotate-12"
                      src={`/categories-icons/${category.name.toLowerCase()}.svg`}
                      alt=""
                      width={32}
                      height={32}
                      aria-hidden="true"
                    />
                  </div>

                  <div
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent
                      translate-x-[-100%] group-hover:translate-x-[100%] 
                      transition-transform duration-1000 ease-in-out"
                  />
                </div>
              </label>
            ))}
          </div>
        </fieldset>
      </div>
    </>
  );
};
