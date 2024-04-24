import React from "react";
import QRCode from "react-qr-code";
import { extractTimestampInfo } from "../../../utils/helpers";
import { events } from "../../CONSTANT";

const Ticket = () => {
  const timestamp = new Date().getTime();
  const { monthDay, monthName, time } = extractTimestampInfo(timestamp);
  return (
    <>
      {events.map((items) => {
        const { location, host, price, id, type, description, attendees } =
          items;
        return (
          <div
            key={id}
            className="w-[400px] h-[250px] bg-[#ffff] rounded-md flex flex-col justify-between"
          >
            <div className="flex justify-between items-center bg-[#e03131] py-4 px-2 text-[#dee2e6] rounded-t-md">
              <p className="font-bold text-[#fff]">Event Ticket</p>
              <p className="italic">{type}</p>
            </div>

            <div className="px-3 flex flex-col justify-between gap-[1rem]">
              <div className="flex justify-between items-center">
                <div>
                  <div>
                    <p className="text-[#adb5bd]">Name</p>
                    <p>{host}</p>
                  </div>
                </div>
                <div>
                  <p className="text-[#adb5bd]">Date</p>
                  <p>
                    {monthDay}/{monthName}
                  </p>
                </div>
                <div>
                  <p className="text-[#adb5bd]">Price</p>
                  <p>$ {price}</p>
                </div>
                <div>
                  <div>
                    <p className="text-[#adb5bd]">Time</p>
                    <p>{time}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[#adb5bd]">Location</p>
                  <p>{location}</p>
                </div>

                <div>
                  <p className="text-[#adb5bd]">Seat No.</p>
                  <p>{attendees.total}</p>
                </div>

                <QRCode
                  size={70}
                  bgColor="white"
                  fgColor="black"
                  value={description}
                />
              </div>
            </div>

            <div className="bg-[#e03131] pb-[1rem] rounded-b-md "></div>
          </div>
        );
      })}
    </>
  );
};

export default Ticket;
