import React from "react";
import { extractTimestampInfo } from "../../../utils/helpers";
import { Clock, Heart, Location, TransmitSqaure2 } from "iconsax-react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
    const { timestamp, title, location, type, eventImage, id } = event;
    const { monthDay, monthName, time } = extractTimestampInfo(timestamp);

    return (
        <div className="min-w-[340px] w-full px-4 rounded-xl border-3 border-red">
            <div className="relative h-52">
                <div className="flex justify-between mx-4 items-center absolute top-2 right-0 left-0 z-10">
                    <p className="flex justify-center items-center bg-[#fff] text-[#5D35FF] px-4 py-0.5  rounded-md absolute top-0 left-0">
                        {type}
                    </p>
                    <div className="flex gap-2 absolute top-0 right-0">
                        <TransmitSqaure2 size="32" className="text- border-lightWhite" />
                        <Heart size="32" className="text- border-lightWhite" />
                    </div>
                </div>
                <img src={eventImage} alt="" layout="fill" className="rounded-t-xl" />
            </div>

            <div className="flex h-auto gap-4 border-b bg-[#fff] border-solid border-lightWhite py-2 rounded-b-xl">
                <div className="pl-3">
                    <p className="text-gradientColor text-sm font-normal leading-3 mt-2 mb-3"
                    >
                        {monthName}
                    </p>
                    <div className="text-gradientColor text-2xl font-normal leading-3">
                        {monthDay}
                    </div>
                </div>

                <div className="mr-4 grow">
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <Link to={`${id}`}>
                                <p className="text-cardText text-base font-medium leading-tight mt-1">
                                    {title}
                                </p>
                            </Link>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <Clock size="20" className="text- border-lightWhite" />
                                <div className="ml-2 text-cardText text-sm font-normal leading-none">
                                    {time}
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Location size="20" className="text- border-lightWhite" />
                                <div className="ml-2 text-cardText text-sm font-normal leading-none">
                                    {location}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
