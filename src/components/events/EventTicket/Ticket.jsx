import React from "react";
import QRCode from "react-qr-code";
import { extractTimestampInfo } from "../../../utils/helpers";
import { events } from "../../CONSTANT";
import useGetAllUserTicket from "../../../Functions/useGetAllUserTicket";

const Ticket = () => {
  const sogo = useGetAllUserTicket()
  console.log(sogo)
  return (
    <div className="flex flex-row gap-6 flex-wrap w-full">
      {events.map((items) => {
        const { location, host, price, id, type, description, attendees, timestamp} =
          items;
          const { monthDay, monthName, time } = extractTimestampInfo(timestamp);

        return (
          <div
            key={id}
            className="w-[90%] mdl:w-[400px] h-[250px] bg-[#ddd] rounded-xl flex flex-col justify-between"
          >
            <div className="flex justify-between items-center bg-[#222222] py-4 px-2 text-[#dee2e6] rounded-t-md">
              <p className="font-bold text-[#fff]">Event Ticket</p>
              <p className="italic">{type}</p>
            </div>

            <div className="px-3 flex flex-col justify-between gap-[1rem]">
              <div className="flex justify-between items-center">
                <div>
                  <div>
                    <p className="text-[#666]">Name</p>
                    <p>{host}</p>
                  </div>
                </div>
                <div>
                  <p className="text-[#666]">Date</p>
                  <p>
                    {monthDay}/{monthName}
                  </p>
                </div>
                <div>
                  <p className="text-[#666]">Price</p>
                  <p>{price} ETH</p>
                </div>
                <div>
                  <div>
                    <p className="text-[#666]">Time</p>
                    <p>{time}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[#666]">Location</p>
                  <p>{location}</p>
                </div>

                <div>
                  <p className="text-[#666]">Seat No.</p>
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

            <div className=" pb-[1rem] rounded-b-md "></div>
          </div>
        );
      })}
    </div>
  );
};

export default Ticket;
