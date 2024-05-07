import React, { useState, useEffect } from "react";
import MainButton from "../Buttons/MainButton";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import EventDetailsCard from "../EventsCard/EventDetailsCard";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";

const EventTabs = ({ pageTabs, data }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const { address } = useWeb3ModalAccount();

  useEffect(() => {
    if (pageTabs[tabIndex] === "Hosting") {
      setFilteredEvents(data.filter((event) => event.organizer === address));
    } else if (pageTabs[tabIndex] === "Attending") {
      setFilteredEvents(data.filter((event) => event.organizer === address));
    } else {
      setFilteredEvents([]);
    }
  }, [pageTabs, tabIndex, data, address]);

  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
      className="w-screen ml-3 mdl:w-3/5 whitespace-no-wrap"
    >
      <TabList className="flex gap-3 mb-2 overflow-x-auto w-screen mdl:w-full">
        {pageTabs.map((pageTab, index) => (
          <Tab key={index}>
            <MainButton title={pageTab} active={true} className="w-[140px]" />
          </Tab>
        ))}
      </TabList>
      {pageTabs.map((pageTab, index) => (
        <TabPanel key={index}>
          <div className="h-[510px] overflow-y-scroll">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <EventDetailsCard key={index} event={event} />
              ))
            ) : (
              <>
                {tabIndex === 0 ? (
                  <div className="w-full h-full flex flex-col gap-8 justify-center items-center">
                    <h1 className="text-2xl text-white">
                      You have not created any event
                    </h1>
                    <Link to="/create-event">
                      <Button className="bg-white text-black text-2xl hover:text-white px-5 pt-4 font-medium">
                        Create Event
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col gap-8 justify-center items-center">
                    <h1 className="text-2xl text-white">
                      Explore events to attend
                    </h1>
                    <Link to="/all-events">
                      <Button className="bg-white text-black text-2xl hover:text-white px-5 pt-4 font-medium">
                        Explore Events
                      </Button>
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default EventTabs;