import { CalendarEvent } from "../../components/events/EventCalendar/CalendarEvent";
import EventLayout from "../../components/events/Layout/Layout";
import React, {useState} from "react";
import EventTabs from "../../components/events/EventTabs/EventTabs";
import AboutDashboard from "../../components/events/DashboardAbout/AboutDashboard";
import useGetAllEvents from "../../Functions/useGetAllEvents";
import { TbLoaderQuarter } from "react-icons/tb";

const Dashboard = () => {
  const [showCalendar, setShowCalendar] =useState(false)
  const allEvents = useGetAllEvents()

  return (
    <EventLayout>
      {
        allEvents.loading ?  <section className='w-full h-full fixed top-0 left-0 flex justify-center items-center layoutBg overflow-hidden z-[99999]'>
        <h2 className="text-gray-200 font-barlow text-lg md:text-xl flex items-center gap-1">
            <TbLoaderQuarter className="animate-spin text-4xl mr-3" />
            fetching Events...
        </h2>
    </section>: 
    <>
      <AboutDashboard eventAttended={2} eventHosted={2} poa={0} totalEvents={2}/>
      <div className="mdl:ml-5 mt-5 mr-11 mb-28 mdl:mb-0 flex flex-col-reverse md:flex-row gap-8 mdl:h-[600px]"
      >
       <EventTabs pageTabs={["Hosting", "Attending"]} data={allEvents.data}/>
        <div className={`${showCalendar? "block" : "hidden"} h-[400px] w-screen mdl:inline mdl:w-2/5`}>
          <div className="p-6 bg-[#222222]/50 mdl:rounded-2xl mdl:border mdl:border-white mdl:ml-2">
          <CalendarEvent />
          </div>
        </div>
      </div>
      </>
        }
      
      </EventLayout>  );
};

export default Dashboard;
