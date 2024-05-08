import React from "react";
import QRCode from "react-qr-code";
import useGetAllUserTicket from "../../../Functions/useGetAllUserTicket";
import { TbLoaderQuarter } from "react-icons/tb";
import { Link } from "react-router-dom";

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
                const startDate = new Date(startTime * 1000);
                const eventStartYear = startDate.getFullYear();
                const eventStartMonth = startDate.getMonth();
                const eventStartMonthName = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"][eventStartMonth];
                const eventStartDay = startDate.getDate();
                const eventStartHour = startDate.getHours();
                const eventStartMinute = startDate.getMinutes();

                const endDate = new Date(endTime * 1000);
                const eventEndYear = endDate.getFullYear();
                const eventEndMonth = endDate.getMonth();
                const eventEndMonthName = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"][eventEndMonth];
                const eventEndDay = endDate.getDate();
                const eventEndHour = endDate.getHours();
                const eventEndMinute = endDate.getMinutes();
return(
                <div className="bg-white mt-4 dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold">{eventName}</h2>
                      <p className="text-gray-500 dark:text-gray-400">{`${eventStartMonthName} ${eventStartDay}, ${eventStartYear}` === `${eventEndMonthName} ${eventEndDay}, ${eventEndYear}` ? `${eventStartMonthName} ${eventStartDay}, ${eventStartYear}: ${eventStartHour}:${eventStartMinute} - ${eventEndHour}:${eventEndMinute}` : `${eventStartMonthName} ${eventStartDay}, ${eventStartYear} - ${eventEndMonthName} ${eventEndDay}, ${eventEndYear}`}</p>
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