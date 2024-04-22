// import Layout from "../../components/events/Layout/Layout";
// import React from "react";

const CardBox = () => {
  return (
    <div className="flex gap-5 mt-5 text-white">
      <div>
        <h1 className="text-white">
          <span>Sep</span> <br /> 23
        </h1>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600"
          width="250px"
          alt="event page"
        />
      </div>
      <div>
        <h1 className="font-bold">Bragtime official App Launching</h1>
        <div>12:00pm</div>
        <div>1 Kent street, Melbourne</div>
      </div>
    </div>
  );
};

export default CardBox;
