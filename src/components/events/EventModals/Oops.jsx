import React from "react";

const Oops = ({ setShowPopup }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-modalBg z-50" onClick={() => setShowPopup((oldState) => !oldState)}>
      <div className="mx-6 bg-deepPurple text-white border border-white w-[500px] rounded-2xl p-6 flex flex-col justify-center items-center z-50">
        <img src="/icons/Ellipse-55.png" alt="Congrats Image" width={98} height={98} />
        <h1 className="font-medium text-2xl text-white text-center my-1">Oops!!</h1>
        <p className="text-base font-light text-white text-center mb-6">
          Your event has not been created and has been saved in draft. You need to stake before you can successfully create an event.
        </p>
       
      </div>
    </div>
  );
};

export default Oops;
