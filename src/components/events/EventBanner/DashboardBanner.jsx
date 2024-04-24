import React from "react";
import GradientButton from "../Buttons/GradientButton";
import NormalButton from "../Buttons/NormalButton";

export const DashboardBanner = ({ showCalendar }) => {
  return (
    <>
      <div className="relative w-screen mdl:w-[100%] h-[300px] mdl:h-[380px]">
        <img src={"/images/event-banner.png"} alt="Event" className="absolute inset-0 w-full h-full object-cover" />
        <div className="flex flex-col pb-4 px-6 gap-4 absolute inset-0">
          <div className="text-[#fff] text-3xl mdl:text-4xl font-[950] mt-20 md:mt-40">
            WELCOME TO HOUSE OF EVENT
          </div>
          {/* Button */}
          <div className="flex gap-4 mt-4">
            <GradientButton title={"Host an Event"} link={"/"} className="hidden md:flex" />
            <NormalButton
              title={"Find your next event"}
              link={"/all-events"}
              className="mdl:ml-4"
            />
          </div>
        </div>
      </div>
    </>);
};
