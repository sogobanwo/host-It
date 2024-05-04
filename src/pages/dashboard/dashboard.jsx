import { CalendarEvent } from "../../components/events/EventCalendar/CalendarEvent";
import EventLayout from "../../components/events/Layout/Layout";
import React, {useState} from "react";
import EventTabs from "../../components/events/EventTabs/EventTabs";
import AboutDashboard from "../../components/events/DashboardAbout/AboutDashboard";
import { getAllEvents } from "../..//Functions/readFunctions";


const Dashboard = () => {
  const [showCalendar, setShowCalendar] =useState(false)

  const analytics =async ()=> {const sogo = await getAllEvents().length
    return sogo.lenght
  }
  
  return (
    <EventLayout>
      <AboutDashboard eventAttended={2} eventHosted={2} poa={0} totalEvents={2}/>
      <div className="mdl:ml-5 mt-5 mr-11 mb-28 mdl:mb-0 flex flex-col-reverse md:flex-row gap-8 mdl:h-[600px]"
      >
       <EventTabs pageTabs={["All event", "Hosting", "Attending"]} />
        <div className={`${showCalendar? "block" : "hidden"} h-[400px] w-screen mdl:inline mdl:w-2/5`}>
          <div className="p-6 bg-[#222222]/50 mdl:rounded-2xl mdl:border mdl:border-white mdl:ml-2">
          <CalendarEvent />
          </div>
        </div>
      </div>
      
      </EventLayout>  );
};

export default Dashboard;
