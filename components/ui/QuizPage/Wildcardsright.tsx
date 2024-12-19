import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { BsSkipEndFill } from "react-icons/bs";
const WildcardsRight = () => {
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
    <div>
      <div className="wildcards flex flex-col gap-2  bg-white p-1 rounded-lg">
        {WILCARDS.map((wildcard) => (
          <div
            className="wildcard flex flex-row items-center"
            key={wildcard.name}
          >
            <div className="p-2 bg-blue-500 rounded-lg">{wildcard.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WildcardsRight;
