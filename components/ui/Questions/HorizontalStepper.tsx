import React from "react";

const HorizontalStepper = () => {
  return (
    <div className="flex items-center justify-between w-full">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex ">
          <div className=" text-white border-2 p-4 text-lg flex items-center  justify-center w-8 h-8 bg-blue-500 rounded-full mr">
            {i + 1}
          </div>
          <div className="h-1 bg-gray-400 flex-1"></div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalStepper;
