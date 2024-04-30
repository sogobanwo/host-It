import EventLayout from "../../../components/events/Layout/Layout";
import React from "react";
import EventTabsTP from "../../../components/events/EventTabs/EventTicketPOAPTab";

const MyTickets = () => {
  return (
    <EventLayout>
      <div className="m-3">
      <EventTabsTP pageTabs={["Tickets", "POAP"]}  />
      </div>
    </EventLayout>
  );
};

export default MyTickets;
