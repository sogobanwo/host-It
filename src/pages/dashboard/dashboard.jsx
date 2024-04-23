import { CalendarEvent } from "../../components/events/CalendarEvent";
import EventLayout from "../../components/events/Layout/Layout";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import EventTabs from "../../components/events/EventTabs";
import {Message, SearchNormal1, Home} from "iconsax-react"
import { DashboardBanner } from "../../components/events/DashboardBanner";


const Dashboard = () => {
  const [tabIndex, setTabIndex] =useState(0);
  const [showCalendar, setShowCalendar] =useState(false)


  return (
    <EventLayout>
      <DashboardBanner />
      <div className="mdl:ml-5 mt-5 mr-11 mb-28 mdl:mb-0 flex flex-col-reverse md:flex-row"
      >
       <EventTabs pageTabs={["All event", "Hosting", "Attending"]} />
        <div className={`${showCalendar? "block" : "hidden"} h-[400px] w-screen mdl:inline mdl:w-2/5`}>
          <div className="p-6 bg-deepPurple mdl:rounded-2xl mdl:border mdl:border-white mdl:ml-2">
          <CalendarEvent />
          </div>
        </div>
      </div>
      <div className="mdl:hidden fixed w-screen  bottom-0 flex justify-evenly items-center h-28 px-[5%] border-t-[1px] border-[#fff] bg-deepBlue z-50">
        <Link href={"/events"}>
          <div className="p-3 bg-[#fff]/[.15]  rounded-full">
            <Home size="20" color="#eee"/>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="p-3 bg-[#fff]/[.15] rounded-full">
          <SearchNormal1 size="20" color="#eee"/>
          </div>
        </Link>

        <Link href={"/"}>
          <div className="p-3 bg-[#fff] rounded-full mb-10">
            <img
              src={"/icons/plus-large.svg"}
              alt={"add-Event"}
              width={32}
              height={32}
            />
          </div>
        </Link>
        <Link href={"/"}>
          <div className="p-3 bg-[#fff]/[.15] rounded-full">
          <Message size="20" color="#FF8A65"/>
          </div>
        </Link>
        <Link href={"/"}>
          <img
            src={"/icons/monkey-NFT.png"}
            alt={"home"}
            width={40}
            height={40}
          />
        </Link>
      </div>

      
      </EventLayout>  );
};

export default Dashboard;
