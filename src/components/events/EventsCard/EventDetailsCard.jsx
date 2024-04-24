import { extractTimestampInfo } from '../../../utils/helpers';
import { Clock, Location, Menu } from 'iconsax-react';
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { EventAttendees } from './EventAttendees';
import EventAction from './EventActions';

const EventDetailsCard = ({ event, edit }) => {
  const baseUrl = process.env.REACT_APP_baseURL
  const { timestamp, title, location, attendees, id, eventImage, role } = event;
  const { monthDay, monthName, time } = extractTimestampInfo(timestamp);
  const [showPopup, setShowPopup] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showPopup && ref.current && !ref.current.contains(e.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showPopup]);
  return (
    <div className="relative flex mt-8 border-b border-solid border-lightWhite pb-6 pr-2">
      <div className="flex justify-between w-full pr-4 pb-2">
        <div className="flex justify-evenly">
          <div className="w-12">
            <p className="text-white text-sm mdl:text-base font-normal">
              {monthName}
            </p>
            <div className="w-3 mdl:w-5 h-[1px] bg-amberYellow my-1"></div>
            <div className="text-white text-2xl mdl:text-4xl font-normal">
              {monthDay}
            </div>
          </div>
          <div className="w-[200px] h-[100px] mr-1 mdl:mr-4">
            <img
              width={100}
              height={200}
              className={`min-w-[150px] min-h-[120px] mdl:min-w-[200px] mdl:min-h-[170px]`}
              src={eventImage}
              alt="Single Event"
            />
          </div>

          <div className="mr-4 w-[50%]">
            <div className="flex flex-col">
              <Link to={role === "Hosting" ? `${baseUrl}manage-events/${id}` : `${baseUrl}all-events/${id}`}>

                <div className="flex justify-between">
                  <p className="text-white text-normal mdl:text-xl font-medium leading-tight line-clamp-1">
                    {title}
                  </p>
                </div>
              </Link>

              <div className="my-2 mdl:my-4">
                <EventAttendees attendees={attendees} />
              </div>

              <div className="flex flex-col mdl:gap-2">
                <div className="flex items-center">
                  <Clock className='w-[16px] mdl:w-[32px]' color="#eee" />
                  <div className="ml-2 text-white text-xs mdl:text-sm font-normal leading-none">
                    {time}
                  </div>
                </div>

                <div className="flex items-center">
                  <Location className='w-[16px] mdl:w-[32px]' color="#eee" />
                  <div className="ml-2 text-white text-xs mdl:text-sm font-normal leading-none">
                    {location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer flex mr-2 min-w-[24px] min-h-[24px]">
          {!showPopup && (
            <Menu size="32" color="#eee" />
          )}
        </div>
      </div>

      {showPopup && (
        <div className="absolute top-0 right-2">
          <EventAction ref={ref} edit />
        </div>
      )}
    </div>

  )
}

export default EventDetailsCard