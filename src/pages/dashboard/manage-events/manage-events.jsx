import EventLayout from "../../../components/events/Layout/Layout";
import React from "react";
import EventDetailsCard from "../../../components/events/EventsCard/EventDetailsCard";
import useGetAllEvents from "../../../Functions/useGetAllEvents";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button"; // Add this import
import { TbLoaderQuarter } from "react-icons/tb";
import useGetAllUserTicket from "../../../Functions/useGetAllUserTicket";

const ManageEvents = () => {
  const tickets = useGetAllUserTicket()
  const allEvents = useGetAllEvents();
  const { address } = useWeb3ModalAccount();
  const events = allEvents.data.filter((event) => event.organizer === address);

  return (
    <EventLayout>
      <div className="flex justify-between mx-3 my-3">
        <h1 className="font-bold text-4xl text-[#fff]">Manage Events</h1>
      </div>
      {allEvents.loading ? (
        <section className="w-full h-full fixed top-0 left-0 flex justify-center items-center layoutBg overflow-hidden z-[99999]">
          <h2 className="text-gray-200 font-barlow text-lg md:text-xl flex items-center gap-1">
            <TbLoaderQuarter className="animate-spin text-4xl mr-3" />
            fetching Events...
          </h2>
        </section>
      ) : events.length > 0 ? (
        <div className="ml-5 mt-5 mr-11 mb-4 mdl:mb-0 flex flex-col mdl:flex-row">
          <div className="w-screen mdl:w-3/5 whitespace-no-wrap">
            <div className="flex">
              <div className="overflow-y-scroll h-[80vh]">
                {events.map((event, index) => (
                  <EventDetailsCard key={index} event={event} />
                ))}
              </div>
            </div>
          </div>
          <div className="hidden h-[300px] mdl:inline bg-deepblue text-white border border-white ml-3 w-[500px] rounded-2xl p-6">
              <h1 className="mb-3 text-3xl">My Event Analysis</h1>
              <div className="flex justify-between">
                <div>
                  <div>
                    <small className="text-[14px]">No. of Events</small>
                    <h1 className="text-3xl">{events.length}</h1>
                  </div>
                  <div>
                    <small className="text-[14px]">Amt of ticket sold</small>
                    <h1 className="text-2xl">0</h1>
                  </div>
                  <div>
                    <small className="text-[14px]">Amt of ticket bought</small>
                    <h1 className="text-2xl">0</h1>
                  </div>
                </div>
                <div>
                  <div>
                    <small className="text-[14px]">No. of event hosted</small>
                    <h1 className="text-3xl">{events.length}</h1>
                  </div>
                  <div>
                    <small className="text-[14px]">No. of ticket sold</small>
                    <h1 className="text-2xl">0</h1>
                  </div>
                  <div>
                    <small className="text-[14px]">Total no. of attendees</small>
                    <h1 className="text-2xl">0</h1>
                  </div>
                </div>
                <div>
                  <div>
                    <small className="text-[14px]">No. of event attended</small>
                    <h1 className="text-3xl">0</h1>
                  </div>
                  <div>
                    <small className="text-[14px]">No. ticket bought</small>
                    <h1 className="text-2xl">{tickets.data.length}</h1>
                  </div>
                  <div>
                    <small className="text-[14px]">Ave. ticket Price</small>
                    <h1 className="text-2xl">0</h1>
                  </div>
                </div>
              </div>
            </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col gap-8 justify-center items-center">
          <h1 className="text-2xl text-white">
            You have not created any event
          </h1>
          <Link to="/create-event">
            <Button className="bg-white text-black text-2xl hover:text-white px-5 pt-4 font-medium">
              Create Event
            </Button>
          </Link>
        </div>
      )}
    </EventLayout>
  );
};

export default ManageEvents;