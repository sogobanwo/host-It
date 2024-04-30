import { CalendarEvent } from "../../components/events/EventCalendar/CalendarEvent";
import EventLayout from "../../components/events/Layout/Layout";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import EventTabs from "../../components/events/EventTabs/EventTabs";
import {Message, SearchNormal1, Home} from "iconsax-react"
import AboutDashboard from "../../components/events/DashboardAbout/AboutDashboard";


const Dashboard = () => {
  const [showCalendar, setShowCalendar] =useState(false)
  
  return (
    <EventLayout>
      <AboutDashboard eventAttended={0} eventHosted={0} poa={0} totalEvents={0}/>
      <div className="mdl:ml-5 mt-5 mr-11 mb-28 mdl:mb-0 flex flex-col-reverse md:flex-row gap-8 mdl:h-[600px]"
      >
       <EventTabs pageTabs={["All event", "Hosting", "Attending"]} />
        <div className={`${showCalendar? "block" : "hidden"} h-[400px] w-screen mdl:inline mdl:w-2/5`}>
          <div className="p-6 bg-[#222222]/50 mdl:rounded-2xl mdl:border mdl:border-white mdl:ml-2">
          <CalendarEvent />
          </div>
        </div>
      </div>
      {/* <div className="mdl:hidden fixed w-screen  bottom-0 flex justify-evenly items-center h-28 px-[5%] border-t-[1px] border-[#fff] bg-deepBlue z-50">
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
      </div> */}
      </EventLayout>  );
};

export default Dashboard;
