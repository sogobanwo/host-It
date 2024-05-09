import TagsButton from "../../../components/events/Buttons/TagsButton";
import EventLayout from "../../../components/events/Layout/Layout";
import React, { useEffect, useRef, useState } from "react";
import RegisterationCard from "../../../components/events/EventsCard/RegisterEvent";
import EachEventBanner from "../../../components/events/EventBanner/EachEventBanner";
import { useParams } from "react-router-dom";
import useGetEventDetails from "../../../Functions/useGetEventDetails"
import useGetEventTicketSupply from "../../../Functions/useGetEventTicketSupply";
import useGetCreatedTickets from "../../../Functions/useGetCreatedTickets";
import FacebookShare from "../../../components/Share/FacebookShare";
import TwitterShare from "../../../components/Share/TwitterShare";
import LinkedINShare from "../../../components/Share/LinkedInShare";


const ManageEventDetails = () => {
  const baseURL=process.env.REACT_APP_baseURL

  const {id} = useParams()

  const event = useGetEventDetails(id)
  const ticketSupply = useGetEventTicketSupply(id)
  const tickets = useGetCreatedTickets(id)

  console.log(tickets)
  
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
    <EventLayout>
       <EachEventBanner
       edit
        event={event.data}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        ref={ref}
      />
      <div className="w-screen flex justify-center items-center mdl:hidden">
        <RegisterationCard
          setShowPopup={setShowPopup}
          event={event}
          edit
          price={0}
          // type={type}
          ref={ref}
        />
      </div>
      <div className="flex mdl:flex-row flex-col my-8 text-white">
        <div className="w-screen p-4 mdl:w-[58%] mdl:mx-[1%]">
          <div>
            <div className="mb-4">
              <h1 className="text-xl  font-bold mb-2">Description</h1>
              <p className=" text-xl font-normal">{event.data.description}</p>
            </div>
            <div className="mb-4">
              <h1 className="text-xl font-bold mb-2">Hours</h1>
              <p className="text-xl font-normal mb-2">
                {/* {`${eventStartMonthName} ${eventStartDay}, ${eventStartYear}` === `${eventEndMonthName} ${eventEndDay}, ${eventEndYear}` ? `${eventStartMonthName} ${eventStartDay}, ${eventStartYear}: ${eventStartHour}:${eventStartMinute} - ${eventEndHour}:${eventEndMinute}` : `${eventStartMonthName} ${eventStartDay}, ${eventStartYear} - ${eventEndMonthName} ${eventEndDay}, ${eventEndYear}`} */}
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
        
        <div className="w-screen p-4 mdl:w-auto msl:mx-[1%]">
          <div className="bg-deepBlue text-white border border-white w-full rounded-2xl p-6">
            <h1 className="mb-3">My Event Analysis</h1>
            <div className="flex justify-between">
              <div>
                <div>
                  <small className="text-[10px]">Expected guests</small>
                  <h1 className="text-2xl">{ticketSupply.data}</h1>
                </div>
              </div>
              <div>
                <div>
                  <small className="text-[10px]">No. of ticket sold</small>
                  <h1 className="text-2xl">{event.data.soldTickets}</h1>
                </div>
              </div>
              <div>
                <div>
                  <small className="text-[10px]">Available Tickets</small>
                  <h1 className="text-2xl">{ticketSupply.data - event.data.soldTickets}</h1>
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
