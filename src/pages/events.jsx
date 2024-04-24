import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import { events } from "../components/CONSTANT";
import EventCard from "../components/events/explore-all-events/EventCard";

const Events = () => {
  return (
    <>
      <div className="bg-hero">
        <Navbar />
        <div className="py-5 px-10 lg:px-20">
          <Tabs>
            <TabList style={{ color: "white" }}>
              <Tab>All Event</Tab>
              <Tab>Latest Event</Tab>
              <Tab>Your Event(s)</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <div className="mb-5 grid flex-col items-center justify-center pt-5  lg:grid-cols-3 md:grid-cols-2 gap-3 mdl:ml-3">
                  {events.map((event, index) => (
                    <div key={index} className="w-full mb-10 cursor-pointer">
                      <EventCard key={index} event={event} />
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="mb-5 grid items-center justify-center pt-5  lg:grid-cols-3 md:grid-cols-2 gap-3 mdl:ml-3">
                  {events.map((event, index) => (
                    <div key={index} className="w-full mb-10 cursor-pointer">
                      <EventCard key={index} event={event} />
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <p className="text-neutral-100 italic">No Registered event!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Events;
