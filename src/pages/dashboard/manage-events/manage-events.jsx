import EventLayout from "../../../components/events/Layout/Layout";
import React, { useEffect, useState } from "react";
import MainButton from "../../../components/events/Buttons/MainButton";
import EventDetailsCard from "../../../components/events/EventsCard/EventDetailsCard";
import { getAllEvents } from "../../../Functions/readFunctions";

const ManageEvents = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const allEvents = await getAllEvents();
      setEvents(allEvents);
      setFilteredEvents(allEvents);
    };
    fetchEvents();
  }, []);
  return (
    <EventLayout>
      <div className=" flex justify-between mx-3 my-3">
        <h1 className="font-bold text-4xl text-[#fff]">Manage Events</h1>
      </div>

      <div className="ml-5 mt-5 mr-11 mb-4 mdl:mb-0 flex flex-col mdl:flex-row">
        <div className="w-screen mdl:w-3/5 whitespace-no-wrap">
          <div className="flex gap-3 mb-2 overflow-x-auto w-screen mdl:w-full">
            <MainButton title={"Hosted Event"} link={"/"} active={true} className="w-[140px]" />
            <MainButton title={"Attending"} link={"/"} className="w-[140px]" />
            <MainButton title={"Wishlist"} link={"/"} className="w-[140px]" />
          </div>
          <div className="flex">
            <div className="overflow-y-scroll h-[80vh]">
              {events.map((event, index) => (
                <EventDetailsCard key={index} event={event} />
              ))}
            </div>
          </div>
        </div>
        <div className="hidden h-[300px] mdl:inline bg-deepblue text-white border border-white ml-3 w-[370px] rounded-2xl p-6">
          <h1 className="mb-3">My Event Analysis</h1>
          <div className="flex justify-between">
            <div>
              <div>
                <small className="text-[10px]">No. of Events</small>
                <h1 className="text-3xl">0</h1>
              </div>
              <div>
                <small className="text-[10px]">Amt of ticket sold</small>
                <h1 className="text-2xl">0</h1>
              </div>
              <div>
                <small className="text-[10px]">Amt of ticket bought</small>
                <h1 className="text-2xl">0</h1>
              </div>
            </div>
            <div>
              <div>
                <small className="text-[10px]">No. of event hosted</small>
                <h1 className="text-3xl">0</h1>
              </div>
              <div>
                <small className="text-[10px]">No. of ticket sold</small>
                <h1 className="text-2xl">0</h1>
              </div>
              <div>
                <small className="text-[10px]">Total no. of attendees</small>
                <h1 className="text-2xl">0</h1>
              </div>
            </div>
            <div>
              <div>
                <small className="text-[10px]">No. of event attended</small>
                <h1 className="text-3xl">0</h1>
              </div>
              <div>
                <small className="text-[10px]">No. ticket bought</small>
                <h1 className="text-2xl">0</h1>
              </div>
              <div>
                <small className="text-[10px]">Ave. ticket Price</small>
                <h1 className="text-2xl">0</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EventLayout>
  );
};

export default ManageEvents;
