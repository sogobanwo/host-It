import React from "react";
import { EventAttendees } from "./EventAttendees";
import { Location, ProfileCircle } from "iconsax-react";
import RegisterationCard from "./RegisterEvent";
import SuccessfulBooking from "./EventModals/Successful-booking";
import Payment from "./EventModals/Payment";
import Request from "./EventModals/Request";

const EachEventBanner = ({ event, edit, setShowPopup, showPopup, ref }) => {
  const { attendees, location, type, price, title, host, timestamp, eventImage } = event;

  return (
    <>
    <div className={`flex flex-col pl-6 justify-center bg-url(${eventImage}) bg-cover bg-no-repeat w-screen mdl:w-[100%] h-[446px]`}>
      <div className="flex px-6 justify-between">
        <div className="flex flex-col justify-end mdl:w-3/5 ">
          <div className="flex gap-2 items-center mb-6">
            <EventAttendees attendees={attendees} />
            <p className="text-[#fff]">Attendees</p>
          </div>
          <h1 className="font-extrabold text-[#fff] w-full text-4xl mdl:text-5xl mb-6">{title}</h1>
          <div className="mb-6">
            <p className="text-[#fff] text-sm">Host by:</p>
            <div className="flex gap-4  items-center">
                <div className="rounded-full">
                <ProfileCircle width={32} height={32} className="text-white"/>
                </div>
                <h1 className="text-xl text-[#fff] font-bold">{host}</h1>
            </div>
          </div>
          <div className="flex items-center">
               <Location size="20" className="text- text-white" />
              <div className="ml-2 text-[#fff] font-bold text-xl">
                {location}
              </div>
            </div>
        </div>
        <div className="hidden mdl:flex w-2/5 justify-center">
        <RegisterationCard setShowPopup={setShowPopup} price={price} type={type} edit={edit} timestamp={timestamp} className="mt-10 hidden mdl:inline" />
        </div>
      </div>
    </div>
    {showPopup && (() => {
    // eslint-disable-next-line 
      switch (type) {
        case "free":
          return <SuccessfulBooking setShowPopup={setShowPopup} ref={ref} />;
        case "paid":
          return <Payment setShowPopup={setShowPopup} ref={ref} host={host} price={price}/>;
        case "private":
          return <Request setShowPopup={setShowPopup} ref={ref} /> ; 
      }
    })() }
    </>
  );
};

export default EachEventBanner;
