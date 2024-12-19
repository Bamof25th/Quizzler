import Image from "next/image";
import React from "react";
import categories from "../public/assets/categories.json";

const Categories = () => {
  return (
    <section className="max-w-6xl px-12 pb-6 flex flex-col justify-center">
      <h2 className="text-2xl mb-6 font-bold text-start bg-gradient-to-r from-slate-400 to-slate-50 bg-clip-text text-transparent">
        Categories
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-2 gap-4">
        {categories.map((category) => (
          <li
            key={category.id}
            className="group relative perspective-1000"
            title={`Explore ${category.name}`}
          >
            <button
              className={`w-full p-4 rounded-lg
                transform-gpu transition-all duration-500 ease-out
                hover:translate-y-[-8px] hover:rotate-2
                active:translate-y-1 active:rotate-1 active:scale-95
                border-2 border-white/20
                backdrop-blur-sm bg-white/5
                hover:bg-white/10
                hover:[box-shadow:0_20px_25px_-5px_rgba(0,0,0,0.2),0_0_15px_-3px_rgba(0,0,0,0.1)]
                flex flex-col items-center gap-3
                overflow-hidden
                before:absolute before:inset-0 
                before:bg-gradient-to-tr before:from-white/0 before:to-white/20 
                before:opacity-0 before:transition-opacity before:duration-500
                hover:before:opacity-100`}
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
                <span
                  className="font-medium text-white drop-shadow-md
                    transition-transform duration-500
                    group-hover:scale-105"
                  style={{ color: category.color }}
                >
                  {category.name}
                </span>
              </div>

              {/* Animated background effect */}
              <div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent
                  translate-x-[-100%] group-hover:translate-x-[100%] 
                  transition-transform duration-1000 ease-in-out"
              />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
