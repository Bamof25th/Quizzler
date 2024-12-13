import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { ImInfinite } from "react-icons/im";
import { TbDeviceGamepad2 } from "react-icons/tb";

const gameModes = [
  {
    icon: <TbDeviceGamepad2 className="text-3xl" />,
    title: "Classic",
    description:
      "Complete questions without fail to win! You have wildcards that can help you",
  },
  {
    icon: <BiTimeFive className="text-3xl" />,
    title: "Time",
    description:
      "Complete questions within the time limit to win! You can use wildcards",
  },
  {
    icon: <ImInfinite className="text-3xl" />,
    title: "Infinite",
    description:
      "Break your record by completing as many questions as you can! You can use wildcards",
  },
];

const Modes = () => {
  return (
    <section className="flex flex-col justify-center  text-white w-full p-12 ">
      <h2 className="text-2xl mb-6 font-bold text-start bg-gradient-to-r from-slate-400 to-slate-50 bg-clip-text text-transparent">
        Game Modes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
        {gameModes.map((mode, index) => (
          <div
            key={index + mode.title}
            className="bg-neutral-300 max-w-sm md:max-w-none bg-opacity-30 backdrop-blur-[2px] rounded p-5 hover:scale-[1.03] transition-all hover:backdrop-blur-0 hover:bg-opacity-100 hover:bg-slate-700 shadow-sm mx-auto"
          >
            {mode.icon}
            <h3 className="text-xl font-medium my-1">{mode.title}</h3>
            <p className="text-sm">{mode.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Modes;
