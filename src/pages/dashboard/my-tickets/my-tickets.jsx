import EventLayout from "../../../components/events/Layout/Layout";
import React from "react";
import EventTabsTP from "../../../components/events/EventTicketPOAPTab";

const MyTickets = () => {
  return (
    <EventLayout>
      {/* <Tabs>
        <TabList style={{ color: "white" }}>
          <Tab>Ticket(s)</Tab>
          <Tab>POAP</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <div className="mb-5 grid flex-col items-center justify-center pt-5  lg:grid-cols-2 md:grid-cols-2 gap-3 mdl:ml-3">
              <Ticket />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid items-center justify-center pt-5  lg:grid-cols-3 md:grid-cols-2 gap-5 mdl:ml-3">
              <Poap />
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs> */}
      <div className="m-3">

      <EventTabsTP pageTabs={["Tickets", "POAP"]}  />
      </div>
    </EventLayout>
  );
};

export default MyTickets;
