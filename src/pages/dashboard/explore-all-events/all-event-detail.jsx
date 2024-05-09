
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import EventLayout from '../../../components/events/Layout/Layout';
import TagsButton from '../../../components/events/Buttons/TagsButton';
import useGetAllEvents from '../../../Functions/useGetAllEvents';
import EachEventBanner from '../../../components/events/EventBanner/EachEventBanner';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";


const AllEventDetail = () => {
  const events = useGetAllEvents();
  console.log(events)

  const baseURL=process.env.REACT_APP_baseURL
  const similarEvents = events.data.slice(0, 4);
  const [showPopup, setShowPopup] = useState(false);
  const ref = useRef(null);
  const param = useParams()
  const eventid = param.id
  let event;
  let startTime, endTime, description, eventAddress, eventId

  if (!events.loading) {
    event = events.data.find((event) => event.eventId === Number(eventid));
    if (event) {
      ({  startTime, endTime, description, eventAddress, eventId} = event);
    }
  }
  console.log(event)
  const startDate = new Date(startTime * 1000);
  const eventStartYear = startDate.getFullYear();
  const eventStartMonth = startDate.getMonth();
  const eventStartMonthName = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec",
  ][eventStartMonth];
  const eventStartDay = startDate.getDate();
  const eventStartHour = startDate.getHours();
  const eventStartMinute = startDate.getMinutes();

  const endDate = new Date(endTime * 1000);
  const eventEndYear = endDate.getFullYear();
  const eventEndMonth = endDate.getMonth();
  const eventEndMonthName = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec",
  ][eventEndMonth];
  const eventEndDay = endDate.getDate();
  const eventEndHour = endDate.getHours();
  const eventEndMinute = endDate.getMinutes();

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
    <EventLayout>
      <EachEventBanner
        event={event}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        ref={ref}
      />
      {/* <div className="w-screen flex justify-center items-center mdl:hidden">
        <RegisterationCard
          setShowPopup={setShowPopup}
          event={event}
          ref={ref}
        />
      </div> */}
      <div className="flex mdl:flex-row flex-col my-8 text-white">
        <div className="w-screen p-4 mdl:w-[58%] mdl:mx-[1%]">
          <div>
            <div className="mb-4">
              <h1 className="text-xl  font-bold mb-2">Description</h1>
              <p className=" text-base font-normal">{description}</p>
            </div>
            <div className="mb-4">
              <h1 className="text-xl font-bold mb-2">Date & Time</h1>
              <p className="text-xl font-normal mb-2">
                {`${eventStartMonthName} ${eventStartDay}, ${eventStartYear}` === `${eventEndMonthName} ${eventEndDay}, ${eventEndYear}` ? `${eventStartMonthName} ${eventStartDay}, ${eventStartYear}: ${eventStartHour}:${eventStartMinute} - ${eventEndHour}:${eventEndMinute}` : `${eventStartMonthName} ${eventStartDay}, ${eventStartYear} - ${eventEndMonthName} ${eventEndDay}, ${eventEndYear}`}
              </p>
            </div>
            <div className="mb-4">
              <h1 className="text-xl text-[#fff] font-bold mb-2">Tags</h1>
              <div className="text-[#fff] flex gap-4">
                <TagsButton title={"Music"} />
                <TagsButton title={"Family"} />
                <TagsButton title={"Free"} />
              </div>
            </div>
            <div className="mb-4">
              <h1 className="text-xl font-bold mb-2">Share with Friends</h1>
              <div className="flex gap-4">
              <FacebookShare />
              <TwitterShare />
              <LinkedINShare />
              </div>

            </div>
          </div>
          <div></div>
        </div>
        <div className="w-screen p-4 mdl:w-[38%] msl:mx-[1%]">
          <h1 className="text-xl font-medium mb-5">Event Location</h1>
          <img
            src={"/icons/Basemap-image.png"}
            alt=""
            width={440}
            height={270}
            className="mb-5"
          />
          <h1 className="text-xl font-normal mb-2">
            {eventAddress}
          </h1>
        </div>
      </div>
      {/* <div className="mb-4">
        <h1 className="font-extrabold text-2xl mb-4 mx-[2%] text-white">
          Similar Events
        </h1>
        <div className="flex ">
          <div className="flex">
            {similarEvents.map((event, index) => (
              <EventCard event={event} key={index} className />
            ))}
          </div>
        </div>
      </div> */}
    </EventLayout>

  )
}

export default AllEventDetail