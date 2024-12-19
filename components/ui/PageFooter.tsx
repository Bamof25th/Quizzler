"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiInfoCircle } from "react-icons/bi";

export default function PageFooter() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);

  const handleSound = () => {
    setIsSoundOn(!isSoundOn);
  };
  return (
    <div className="fixed bottom-0 right-0 flex gap-4 p-4 z-20">
      <button
        className={`group relative inline-flex items-center justify-center p-0.5 text-sm font-medium text-white hover:bg-white-500 transition-colors hover:scale-110 duration-300 ${
          isTooltipVisible ? "bg-white/10" : ""
        }`}
        onClick={() => setIsTooltipVisible(!isTooltipVisible)}
      >
        <span className="relative transition-all ease-in duration-200 group-hover:bg-opacity-0">
          <BiInfoCircle className="w-[24px] h-[24px]" />
        </span>
        <div
          className={`ease-in duration-300 ${
            isTooltipVisible || "group-hover:block group-hover:opacity-100 "
          } ${
            isTooltipVisible ? "block opacity-100 -translate-x-60" : "opacity-0 translate-x-60"
          } transition-all`}
        >
          <div className="ease-in-out duration-500 -translate-y-4 transition-all absolute left-1/2 z-50 flex -translate-x-2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2">
            <div className="rounded-sm bg-black py-1 px-2">
              <p className="whitespace-nowrap">
                <Link
                  href="https://github.com/bamof25th"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-400/55 px-1  hover:bg-slate-400/75 transition-colors"
                >
                  ✨Star
                </Link>
                <span>
                  - Made with ❤️ by
                  <Link
                    href="https://github.com/bamof25th"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {" "}
                    Bam
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </button>
      <button
        onClick={handleSound}
        className="hover:scale-110 transition-all duration-300"
      >
        {isSoundOn ? (
          <Image
            src={"/assets/sound-on.svg"}
            alt="sound-on"
            width={24}
            height={24}
            className="border  bg-white rounded-full p-1"
          />
        ) : (
          <>
            <Image
              src={"/assets/sound-off.svg"}
              alt="sound-off"
              width={24}
              height={24}
              className="border  bg-white rounded-full p-1"
            />
          </>
        )}
      </button>
    </div>
  );
}
