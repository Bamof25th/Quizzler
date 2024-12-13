import Categories from "@/components/Categories";
import MainHome from "@/components/MainHome";
import Modes from "@/components/Modes";
import PageFooter from "@/ui/PageFooter";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="relative flex flex-col-reverse xl:flex-row ">
        <div className="flex flex-col w-full justify-evenly xl:w-[60%]  min-h-[50vh] xl:h-screen bg-blend-darken">
          <div className="">
            <Modes />
          </div>
          <div className="">
            <Categories />
          </div>
        </div>
        <div className="main-bg flex right-0 w-full xl:w-[50%] min-h-[50vh] xl:h-screen">
          <MainHome />
        </div>
        <PageFooter alert={false} />
      </div>
    </>
  );
};

export default Page;
