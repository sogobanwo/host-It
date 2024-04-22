import EventLayout from "../../../components/events/Layout/Layout";
import React from "react";

const ManageEventDetails = () => {
  return (
    <EventLayout>
      <div className='flex items-center bg-gradient-to-r from-purple-500 to-pink-500 min-h-20"'>
        <div className="text-white pt-20 pl-14 font-bold w-1/2">
          <h1 className="text-5xl">
            Bragtime official App <br />
            Launching
          </h1>
          <p className="text-xs mt-3">Host by:</p>
          <div>
            <img className="inline" src="" alt="icon" />
            <span className="ml-2 pb-3">AJ Moses</span>
          </div>
          <div className="pt-2 pb-4">
            {/* icon and street name*/}
            <h>1 Kent street Melbourne</h>
          </div>
        </div>
        <div className="bg-slate-50 p-5 mx-auto my-auto h-56 w-72 mr-20 rounded-xl text-zinc-700">
          <p1>Date and Time</p1>
          <h1 className="text-lg text-zinc-700">Saturday, Sept 16, 2023</h1>
          <button className="border mt-4 py-2 px-12 bg-slate-800 text-slate-50 font-medium rounded-full ">
            Edit Event{" "}
          </button>
          <p className="mt-3 text-xs">share with friends</p>
        </div>
      </div>

      {/* Description */}
      <div className="flex gap-x-5 text-slate-50 p-10">
        <div className="w-1/2">
          <h1 className="font-semibold text-2xl">Description</h1>
          <p className="py-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <h1 className="font-semibold text-2xl">Hours</h1>
          <p className="py-2">
            Saturday: <span className="ml-3">12:00pm - 3:00pm</span>
          </p>
          <h1 className="font-semibold text-2xl">Tags</h1>
          <div className="flex mt-3 gap-x-4">
            <button className="bg-white py-2 px-10 border rounded-xl">
              Music
            </button>
            <button className="bg-white py-2 px-8 border rounded-xl">
              Family
            </button>
            <button className="bg-white py-2 px-8 border rounded-xl">
              Free
            </button>
          </div>
          <h1 className="mt-3">Share with friends</h1>
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

export default ManageEventDetails;
