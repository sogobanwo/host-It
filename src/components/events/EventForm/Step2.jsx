import React from "react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
// import Congratulations from "../EventModals/Congratulations";
// import Oops from "../EventModals/Oops";
import { DatePickerWithRange } from "../DateTimePicker/DatePicker";

const Form2 = ({ handleSubmit, handleBack, showPopup, setShowPopup, ref }) => {
 return (
    <>
      <div className="flex justify-center items-center w-screen mdl:w-full mt-8">
        <div className="bg-deepPurple text-white border border-white ml-0 mdl:ml-3 w-[90%] mdl:w-[500px]  rounded-2xl p-6 mb-3">
          <h1 className="text-center text-2xl mb-4">Create an Event</h1>
          <div className="flex gap-2 mdl:gap-4 w-full">
          <div className="flex flex-col mb-4">
          <label htmlFor="" className="mb-2">
              Event Date
            </label>
          <DatePickerWithRange />
          </div>

          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="" className="mb-2">
              Event Location
            </label>
            <div className="relative inline-flex">
              <Input
                placeholder="Event Location"
                // onChange={(evt) => {
                //   getPlacePredictions({ input: evt.target.value });
                // }}
                // loading={isPlacePredictionsLoading}
                className="bg-lightWhite py-2 px-5 rounded-full focus:outline-none focus:ring focus:border-[#F1DA60] w-full font-sans"
              />
              {/* {placePredictions.map((item) => renderItem(item))} */}
            </div>{" "}
          </div>
          <div className="flex flex-col mb-4 w-full">
            <label htmlFor="" className="mb-2">
              Banner
            </label>
            <div className="relative inline-flex">
              <Input
                type="file"
                id=""
                placeholder="Upload the Event Banner"
                className="appearance-none bg-lightWhite py-3 px-5 h-40 rounded-xl focus:outline-none focus:ring focus:border-[#F1DA60] w-full font-sans"
              />
            </div>{" "}
          </div>
          <div className="flex gap-4">
            <Button
              className="w-full bg-gradientColor border border-white py-2 rounded-full flex items-center justify-center"
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              className="w-full bg-gradientColor border border-white py-2 rounded-full flex items-center justify-center"
              onClick={() => {
                setShowPopup((oldState) => !oldState);
                handleSubmit();
              }}
            >
              Create Event
            </Button>
          </div>
        </div>
      </div>
      {/* {showPopup &&
        (() => {
          switch (status) {
            case "free":
              return <Congratulations setShowPopup={setShowPopup} ref={ref} />;
            case "paid":
              return <Oops setShowPopup={setShowPopup} ref={ref} />;
            default:
              return <Congratulations setShowPopup={setShowPopup} ref={ref} />;
          }
        })()} */}
    </>
  );
};

export default Form2;
