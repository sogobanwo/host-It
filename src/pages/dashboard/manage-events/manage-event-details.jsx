import TagsButton from "../../../components/events/Buttons/TagsButton";
import EventLayout from "../../../components/events/Layout/Layout";
import React, { useRef, useState } from "react";
import RegisterationCard from "../../../components/events/EventsCard/RegisterEvent";
import EachEventBanner from "../../../components/events/EventBanner/EachEventBanner";
import { useParams } from "react-router-dom";
import { events } from "../../../components/CONSTANT";

const ManageEventDetails = () => {
  const events = useGetAllEvents();
  console.log(events)
  if (!events.loading) {
    event = events.data.find((event) => event.eventId === Number(eventid));
    if (event) {
      ({  startTime, endTime, description, eventAddress} = event);
    }
  }
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
  const [showPopup, setShowPopup] = useState(false);
  const ref = useRef(null);
  const param = useParams()
  const eventId= param.id
  const eventss = events.find((event) => event.id === eventId)
  const { description, price, type} = eventss;
  return (
    <EventLayout>
       <EachEventBanner
       edit
        event={eventss}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        ref={ref}
      />
      <div className="w-screen flex justify-center items-center mdl:hidden">
        <RegisterationCard
          setShowPopup={setShowPopup}
          event={eventss}
          edit
          price={price}
          type={type}
          ref={ref}
        />
      </div>
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
                <img
                  src={"/icons/Facebook.svg"}
                  width={32}
                  height={32}
                  alt="facebook"
                />
                <img
                  src={"/icons/Instagram.svg"}
                  width={32}
                  height={32}
                  alt="instagram"
                />
                <img
                  src={"/icons/Twitter.svg"}
                  width={32}
                  height={32}
                  alt="twitter"
                />
                <img
                  src={"/icons/Copy.svg"}
                  width={20}
                  height={20}
                  alt="twitter"
                  className="w-[32px] h-[32px] bg-white rounded-full p-1"
                />
              </div>
            </div>
          </div>
          <div></div>
        </div>
        
        <div className="w-screen p-4 mdl:w-auto msl:mx-[1%]">
          <div className="bg-deepBlue text-white border border-white w-full rounded-2xl p-6">
            <h1 className="mb-3">My Event Analysis</h1>
            <div className="flex justify-between">
              <div>
                <div>
                  <small className="text-[10px]">Amt of ticket sold</small>
                  <h1 className="text-2xl">$0</h1>
                </div>
              </div>
              <div>
                <div>
                  <small className="text-[10px]">No. of ticket sold</small>
                  <h1 className="text-2xl">0</h1>
                </div>
              </div>
              <div>
                <div>
                  <small className="text-[10px]">No. of attendees</small>
                  <h1 className="text-2xl">0</h1>
                </div>
              </div>
            </div>
            <div className="flex justify-between my-5">
              <p>Ticket Sales</p>
              <p>Last 7 days</p>
            </div>
            <div className="border-b-[1px]">
              <img
                src={"/icons/chart-graphic.png"}
                alt="chart"
                width={"350"}
                height={"250"}
              />
            </div>
            <ul className="flex justify-between text-sm">
              <li>S</li>
              <li>M</li>
              <li>T</li>
              <li>W</li>
              <li>T</li>
              <li>F</li>
              <li>S</li>
            </ul>
          </div>
        </div>
      </div>

    
    </EventLayout>
  );
};

export default ManageEventDetails;
