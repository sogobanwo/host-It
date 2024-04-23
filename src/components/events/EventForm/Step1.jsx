import React, { useState } from "react";
import { Input } from "../../ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select"
import { Button } from "../../ui/button";

const Form1 = ({ handleNext }) => {
    const [EventType, setEventType] = useState(null)
    const [EventCategory, setEventCategory] = useState(null)
    const handleTypeChange = (event) => {
        setEventType(event.target.value);
    };
    const handleCategoryChange = (event) => {
        setEventCategory(event.target.value);
    };
    return (
        <div className="flex justify-center items-center mt-8">
            <div className="bg-deepPurple text-white border border-white mdl:ml-3 w-[90%] mdl:w-[500px]  rounded-2xl p-6 mb-3 ">
                <h1 className="text-center text-2xl mb-4">Create an Event</h1>
                <div className="flex flex-col mb-4">
                    <label htmlFor="" className="mb-2">
                        Event name
                    </label>
                    <Input
                        type="text"
                        className="bg-lightWhite py-2 px-5 rounded-full focus:outline-none focus:ring focus:border-[#F1DA60] font-sans"
                        placeholder="E.g Game"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="" className="mb-2">
                        Event Category
                    </label>
                    <div className="relative inline-flex">
                        <Select
                            className=""
                            onChange={handleCategoryChange}
                            value={EventCategory}
                        >
                            <SelectTrigger className="appearance-none bg-transparent py-3 px-5 rounded-full focus:outline-none focus:ring focus:border-[#F1DA60] w-full">
                                <SelectValue placeholder="Event Category" className="text-white"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="music">Music</SelectItem>
                                <SelectItem value="filmShow">Film Show</SelectItem>
                                <SelectItem value="artExhibition">Art Exhibition</SelectItem>
                            </SelectContent>
                        </Select>

                    </div>{" "}
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="" className="mb-2">
                        Descriptions
                    </label>
                    <textarea
                        cols="30"
                        rows="3"
                        className="bg-lightWhite py-2 px-5 rounded-xl focus:outline-none focus:ring focus:border-[#F1DA60]"
                        placeholder="Write about your event"
                    ></textarea>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="" className="mb-2">
                        Event Type
                    </label>
                    <div className="relative inline-flex">
                        <Select
                            className="text-white"
                            placeholder="Select an option"
                            onChange={handleTypeChange}
                            value={EventType}
                        >
                            <SelectTrigger className="appearance-none py-3 px-5 rounded-full focus:outline-none focus:ring focus:border-[#F1DA60] w-full bg-transparent">
                                <SelectValue placeholder="Select event type" className="text-white"/>
                            </SelectTrigger>
                            <SelectContent>

                                <SelectItem value="Free" className="text-darkBlue">Free</SelectItem>
                                <SelectItem value="Paid" className="text-darkBlue">Paid</SelectItem>
                                <SelectItem value="Private" className="text-darkBlue">Private</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                {EventType === "Paid" &&
                    <div className="flex flex-col mb-4">
                        <label htmlFor="" className="mb-2">
                            Amount
                        </label>
                        <Input
                            type="text"
                            className="bg-lightWhite py-2 px-5 rounded-full focus:outline-none focus:ring focus:border-[#F1DA60] font-sans"
                            placeholder="$0.00"
                        />
                    </div>}
                <Button
                    className="w-full bg-gradientColor border border-white py-2 rounded-full"
                    onClick={
                        handleNext
                    }
                >
                    Continue
                </Button>
            </div>
        </div>
    );
};

export default Form1;
