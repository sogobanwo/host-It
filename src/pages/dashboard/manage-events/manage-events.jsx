import EventLayout from "../../../components/events/Layout/Layout";
import React from "react";
import CardBox from "../../../components/ui/card.jsx";

const ManageEvents = () => {
  return (
    <EventLayout>
      <div className="px-10 pt-10">
        <div className="flex justify-between item-center px-5">
          <h1 className="text-2xl text-slate-50">Manage My Events</h1>
          <button className="bg-white py-3 px-5 border rounded-full">
            Host an event
          </button>
        </div>
      </div>

      <div className="flex item-center px-10 mt-5">
        <div>
          <div className="flex gap-x-4">
            <button className="bg-white py-2 px-10 border rounded-xl">
              Hosting
            </button>
            <button className="bg-white py-2 px-8 border rounded-xl">
              Completed
            </button>
            <button className="bg-white py-2 px-8 border rounded-xl">
              Draft
            </button>
          </div>

          {/* Details */}
          <CardBox />
          <CardBox />
          <CardBox />
        </div>

        <div className="w-1/2 p-5">
          <div className="p-3 w-4/5 bg-spi-blue-2 mx-auto my-auto rounded-2xl">
            <h1 className="pt-1 pl-3">My Event Analysis</h1>
            <div className="p-3 flex gap-x-5">
              <div>
                <p1 className="text-sm">Amt of ticket sold</p1>
                <h1>$100</h1>
              </div>
              <div>
                <p1 className="text-sm"> no of ticket sold</p1>
                <h1>100</h1>
              </div>
              <div>
                <p1 className="text-sm">no. of attendees</p1>
                <h1>$100</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EventLayout>
  );
};

export default ManageEvents;
