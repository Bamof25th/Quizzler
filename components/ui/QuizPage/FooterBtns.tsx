"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TiWarning } from "react-icons/ti";

const FooterBtns = () => {
  const [isSoundOn, setIsSoundOn] = useState(false);

  const handleSound = () => {
    setIsSoundOn(!isSoundOn);
  };
  return (
    <div className="absolute bottom-1 right-1 p-4 gap-2 flex  text-xl z-10">
      <button className="flex p-3 bg-white rounded-lg scale-95 hover:scale-105 transition-all duration-300 ease-in-out ">
        <TiWarning />
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
