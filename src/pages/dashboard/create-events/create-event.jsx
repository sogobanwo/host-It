import Form2 from '../../../components/events/EventForm/Step2';
import Form1 from '../../../components/events/EventForm/Step1';
import EventLayout from '../../../components/events/Layout/Layout'
import React, { useEffect, useRef, useState } from 'react'

const CreateEvent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [form1Data, setForm1Data] = useState(null);
  const [form2Data, setForm2Data] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const ref = useRef(null);

  const handleNext = (data) => {
    setForm1Data(data);
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (data) => {
    setForm2Data(data);
    // Here you can submit both form1Data and form2Data to your server or perform any other action.
    console.log('Form 1 Data:', form1Data);
    console.log('Form 2 Data:', form2Data);
  };

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
        {currentStep === 1 ? (
        <Form1 handleNext={handleNext}/>
      ) : currentStep === 2 ? (
        <Form2 handleBack={handleBack} handleSubmit={handleSubmit} setShowPopup={setShowPopup} ref={ref} showPopup={showPopup}/>
      ) : null}
      <p className="text-">abc</p>
    </EventLayout>
  )
}

export default CreateEvent