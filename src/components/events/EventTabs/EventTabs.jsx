import React, { useState, useEffect } from "react";
import MainButton from "../Buttons/MainButton";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import EventDetailsCard from "../EventsCard/EventDetailsCard";
import { getAllEvents } from "../../../Functions/readFunctions";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const EventTabs = ({ pageTabs }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const {address} = useWeb3ModalAccount();

  useEffect(() => {
    const fetchEvents = async () => {
      const allEvents = await getAllEvents();
      setEvents(allEvents);
      setFilteredEvents(allEvents);
    };
    fetchEvents();
  }, []);

  const handleTabChange = (index) => {
    setTabIndex(index);
    const currentTab = pageTabs[index];
    if (currentTab !== "All events") {
      const filtered = events.filter((event) => event.organizer === currentTab);
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(events);
    }
  };

  const getEventsToDisplay = () => {
    switch (pageTabs[tabIndex]) {
      case "Attending":
        return filteredEvents.filter((event) => event.organizer !== address).map((event, index) => (
          <EventDetailsCard key={index} event={event} />
        ));
      case "Hosting":
        return filteredEvents.filter((event) => event.organizer === address).map((event, index) => (
          <EventDetailsCard key={index} event={event} />
        ));
      default:
        return filteredEvents.map((event, index) => (
          <EventDetailsCard key={index} event={event} />
        ));
    }
  };

  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={handleTabChange}
      className="w-screen ml-3 mdl:w-3/5 whitespace-no-wrap"
    >
      <TabList className="flex gap-3 mb-2 overflow-x-auto w-screen mdl:w-full">
        {pageTabs.map((pageTab, index) => (
          <Tab key={index}>
            <MainButton
              title={pageTab}
              active={true}
              className="w-[140px]"
            />
          </Tab>
        ))}
      </TabList>
      {pageTabs.map((pageTab, index) => (
        <TabPanel key={index}>
          {getEventsToDisplay()}
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default EventTabs;