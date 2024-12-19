"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TiWarning } from "react-icons/ti";

const FooterBtns = () => {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const handleSound = () => {
    setIsSoundOn(!isSoundOn);
  };
  return (
    <div className="absolute bottom-1 right-1 p-4 gap-2 flex  text-xl z-10">
      <button
        onClick={() => setIsTooltipVisible(!isTooltipVisible)}
        className="flex items-center p-3 bg-white rounded-lg scale-95 hover:scale-105 transition-all duration-300 ease-in-out "
      >
        <TiWarning />
        <div
          className={`ease-in duration-300 ${
            isTooltipVisible || "group-hover:block group-hover:opacity-100 "
          } ${
            isTooltipVisible
              ? "block opacity-100 -translate-x-[22.5rem]"
              : "opacity-0 translate-x-60"
          } transition-all`}
        >
          <div className="ease-in-out p-3.5 duration-500 -translate-y-[1.5rem] -translate-x-5 bg-white rounded-lg transition-all absolute  z-50 flex  flex-col items-center justify-center  text-center text-sm text-slate-900 before:-top-2">
            <p className="whitespace-nowrap">
              These Questions are Ai generated could have errors
            </p>
          </div>
        </div>
      </button>

      <button
        onClick={handleSound}
        className="flex p-3 bg-white rounded-lg scale-95 hover:scale-105 transition-all duration-300 ease-in-out"
      >
        {isSoundOn ? (
          <Image
            src={"/assets/sound-on.svg"}
            alt="sound-on"
            width={24}
            height={24}
          />
        ) : (
          <>
            <Image
              src={"/assets/sound-off.svg"}
              alt="sound-off"
              width={24}
              height={24}
            />
          </>
        )}
      </button>
    </div>
  );
};

export default FooterBtns;
