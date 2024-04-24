import EventLayout from "../../../components/events/Layout/Layout";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React from "react";
import Ticket from "../../../components/events/EventTicket/Ticket";
import Poap from "../../../components/events/EventTicket/Poap";

const MyTickets = () => {
  return (
    <EventLayout>
      <Tabs>
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
      </Tabs>
    </EventLayout>
  );
};

export default MyTickets;
