"use client";
import React, { useState } from "react";
import NewGameModal from "./ui/Forms/NewGameModal";

const MainHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handelOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <main className="max-w-6xl mx-auto w-full min-h-[25rem] md:min-h-[30rem] lg:min-h-[35rem] flex flex-col px-4 sm:px-6 relative z-10">
      <div className="flex flex-col justify-center items-center gap-2 text-white flex-1">
        <h1 className="text-3xl sm:text-3xl md:text-6xl lg:text-8xl font-medium uppercase ">
          Quizzler
        </h1>
        <h1 className="flex px-3 text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-neutral-100 relative">
          Dive Into
          <span className="relative ml-2 sm:ml-3 h-[1.2em] w-20 sm:w-28 md:w-32 lg:w-36 overflow-hidden">
            <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white">
              Quizzes
            </span>
            <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:0.83s]">
              Knowledge
            </span>
            <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:1.83s]">
              Fun
            </span>
          </span>
        </h1>
        <button
          className="px-8 py-4 text-white font-bold text-lg rounded-full shadow-lg 
            transition-transform transform bg-slate-950/80 border-2 border-white 
            hover:scale-105 hover:border-green-600 hover:shadow-green-500/50 
            hover:shadow-2xl focus:outline-none uppercase w-full max-w-lg mx-auto mt-10
            backdrop-blur-sm"
          onClick={handelOpenModal}
        >
          Play
        </button>
        {isModalOpen && (
          <NewGameModal isOpen={isModalOpen} setModalOpen={setIsModalOpen} />
        )}
      </div>
    </main>
  );
};

export default MainHome;
