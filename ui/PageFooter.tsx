"use client";

import Image from "next/image";
import { BiInfoCircle } from "react-icons/bi";

export default function PageFooter({ alert }: { alert: false }) {
  console.log(alert);

  return (
    <div className="absolute bottom-0 right-0 flex gap-4 p-4 z-20">
      <button className="text-white hover:text-green-500 transition-colors hover:scale-110 duration-300">
        <BiInfoCircle className="w-7 h-7" />
      </button>
      <div className="font-bold border w-10 h-10 bg-white rounded-full p-1">
        <Image
          src={"/assets/sound-on.svg"}
          alt="sound-on"
          width={24}
          height={24}
          className="border w-10 h-10 bg-white rounded-full p-1"
        />
      </div>
    </div>
  );
}
