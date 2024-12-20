import React from "react";
import HorizontalStepper from "./HorizontalStepper";

const QuestionCard = () => {
  return (
    <div className="w-[750px] h-[350px] flex flex-col">
      {/* stepper */}
      <HorizontalStepper />
      <div className="flex items-center justify-center w-full mt-10 h-[150px] bg-white rounded-lg ">
        <h1 className="text-2xl">Question</h1>
      </div>
      <div className="flex flex-row w-full h-[150px] gap-2">
        <div className="flex flex-col w-1/2 pt-4">
          <div className="w-full h-1/2 bg-blue-300 rounded-lg">
            <p className="flex items-center justify-center">Option 1</p>
          </div>
          <div className="w-full h-1/2 bg-blue-300 rounded-lg mt-2">
            <p className="flex items-center justify-center">Option 2</p>
          </div>
        </div>
        <div className="flex flex-col w-1/2  pt-4">
          <div className="w-full h-1/2 bg-blue-300 rounded-lg">
            <p className="flex items-center justify-center">Option 3</p>
          </div>
          <div className="w-full h-1/2 bg-blue-300 rounded-lg mt-2">
            <p className="flex items-center justify-center">Option 4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
