import Image from "next/image";
import React from "react";
import { BsSkipEndFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

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
        <Image src={"/assets/fifty.svg"} alt="fifty fifty" width={23} height={23} />
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
      <div className="container flex">
        <div className="wildcards flex-1">
          {WILCARDS.map((wildcard) => (
            <div
              className="wildcard flex flex-col items-center gap-2"
              key={wildcard.name}
            >
              {wildcard.icon}
              <p>{wildcard.amount}</p>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default SelectModal;
