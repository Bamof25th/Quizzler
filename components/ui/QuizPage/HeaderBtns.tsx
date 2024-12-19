import Link from "next/link";
import React from "react";
import { BiLeftArrow } from "react-icons/bi";
import { TbRefresh } from "react-icons/tb";

const HeaderBtns = () => {
  return (
    <>
      <div className="flex fixed top-1 left-1 w-full  p-4 gap-2   text-xl z-10">
        <Link
          href={"/"}
          className="flex p-3 bg-white rounded-lg scale-95 hover:scale-105 transition-all duration-300 ease-in-out "
        >
          <BiLeftArrow />
        </Link>

        <Link
          href={"/Quiz"}
          className="flex p-3 bg-white rounded-lg  scale-95 hover:scale-105 transition-all duration-300 ease-in-out "
        >
          <TbRefresh />
        </Link>
      </div>
    </>
  );
};

export default HeaderBtns;
