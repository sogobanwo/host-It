import TagsButton from "../../../components/events/Buttons/TagsButton";
import EventLayout from "../../../components/events/Layout/Layout";
import React, { useRef, useState } from "react";
import RegisterationCard from "../../../components/events/RegisterEvent";
import EachEventBanner from "../../../components/events/EachEventBanner";
import { useParams } from "react-router-dom";
import { events } from "../../../components/CONSTANT";

const ManageEventDetails = () => {
  const [showPopup, setShowPopup] = useState(false);
  const ref = useRef(null);
  const param = useParams()
  const eventId= param.id
  const event = events.find((event) => event.id === eventId)
  const { description, price, type} = event;
  return (
    <EventLayout>
       <EachEventBanner
       edit
        event={event}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        ref={ref}
      />
      <div className="w-screen flex justify-center items-center mdl:hidden">
        <RegisterationCard
          setShowPopup={setShowPopup}
          event={event}
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
              <h1 className="text-xl font-bold mb-2">Hours</h1>
              <p className="text-xl font-normal mb-2">
                Saturday: <span>12:00pm - 3:00pm</span>
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
                  <h1 className="text-2xl">$100</h1>
                </div>
              </div>
              <div>
                <div>
                  <small className="text-[10px]">No. of ticket sold</small>
                  <h1 className="text-2xl">100</h1>
                </div>
              </div>
              <div>
                <div>
                  <small className="text-[10px]">No. of attendees</small>
                  <h1 className="text-2xl">100</h1>
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
