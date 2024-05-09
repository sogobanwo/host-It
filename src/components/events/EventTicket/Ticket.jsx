import React from "react";
import QRCode from "react-qr-code";
import useGetAllUserTicket from "../../../Functions/useGetAllUserTicket";
import { TbLoaderQuarter } from "react-icons/tb";
import { Link } from "react-router-dom";
import { formatDateTime } from "../../../helpers/formatDate";

const Ticket = () => {
  const tickets = useGetAllUserTicket()
  console.log(tickets.data)
  return (
    <>
      {
        tickets.loading ?
          (
            <section className="w-full h-full fixed top-0 left-0 flex justify-center items-center layoutBg overflow-hidden z-[99999]">
              <h2 className="text-gray-200 font-barlow text-lg md:text-xl flex items-center gap-1">
                <TbLoaderQuarter className="animate-spin text-4xl mr-3" />
                Fetching all your Tickets...
              </h2>
            </section>
          ) : (
            <div className="flex flex-row gap-6 flex-wrap w-full">
              {tickets.data.map((items) => {
                const { eventId, eventName, description, eventAddress, startTime, endTime, isCancelled } = items;
                const startDateTime = formatDateTime(startTime)
                const endDateTime = formatDateTime(endTime)
return(
                <div className="bg-white mt-4 dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold">{eventName}</h2>
                      <p className="text-gray-500 dark:text-gray-400">{`${startDateTime} - ${endDateTime}`}</p>
                      <p className="text-gray-500 dark:text-gray-400">{eventAddress}</p>
                    </div>
                    <div className="w-full max-w-[200px]">
                      <QRCode
                        size={200}
                        bgColor="transparent"
                        fgColor="black"
                        value={description}
                      />
                    </div>
                    <div className="text-center flex flex-col gap-3">
                      <Link className="text-gray-500 dark:text-gray-400 text-sm" to={`/all-events/${eventId}`}>View event details</Link>
                      {
                        isCancelled ?
                          <p>Status: <span className="text-red">Event Cancelled</span></p> : ""
                      }
                    </div>
                  </div>
                </div>)
              })}
            </div>

          )}
    </>
  );
};

export default Ticket;