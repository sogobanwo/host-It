import React from 'react'
import EventLayout from "../../../components/events/Layout/Layout";
import POAPform from '../../../components/events/EventPOAP/POAPform';

const MintPOAP = () => {
  return (
    <EventLayout>
      <div className='flex items-center justify-center h-[80vh]'>
      <POAPform />
      </div>
    </EventLayout>
  )
}

export default MintPOAP