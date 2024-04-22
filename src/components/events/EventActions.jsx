import { CalendarAdd, CloseCircle, Edit, Share } from "iconsax-react";
import React from "react";

const EventAction = React.forwardRef((props, ref, edit) => {
  return (
    <div
      className="bg-deepPurple flex flex-col py-1 p-3 rounded-lg relative right-5 z-20"
      ref={ref}
    >
      {!edit ? (
        <>
          <div className="flex px-2 py-2 border-b border-lightGrey">
          <CalendarAdd size="16" color="#eee"/>
            <div className="ml-2 text-white text-sm font-normal">
              Book Event
            </div>
          </div>
          <div className="flex px-2 py-2 border-b border-lightGrey">
          <Share size="16" color="#eee"/>
            <div className="ml-2 text-white text-sm font-normal">Share</div>
          </div>
          <div className="flex px-2 py-2">
          <CloseCircle size="16" color="#FF8A65"/>
            <div className="ml-2 text-white text-sm font-normal">
              Not interested
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex px-2 py-2 border-b border-lightGrey">
          <Edit size="32" color="#eee"/>
            <div className="ml-2 text-white text-sm font-normal">Edit Event</div>
          </div>
          <div className="flex px-2 py-2">
          <Share size="32" color="#eee"/>
            <div className="ml-2 text-white text-sm font-normal">
              Share
            </div>
          </div>
        </>
      )}
    </div>
  );
});

export default EventAction;
