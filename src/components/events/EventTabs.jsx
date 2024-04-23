import React, { useState } from "react";
import MainButton from "./Buttons/MainButton";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { events } from "../CONSTANT";
import EventDetailsCard from "./EventDetailsCard";

const EventTabs = ({ pageTabs }) => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
   
      <Tabs selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)} className="w-screen ml-3 mdl:w-3/5 whitespace-no-wrap">
        <TabList className="flex gap-3 mb-2 overflow-x-auto w-screen mdl:w-full">
          {pageTabs.map((pageTab, index) => {
            return (
              <Tab key={index}>
                <MainButton
                  title={pageTab}
                  active={true}
                  className="w-[140px]"
                />
              </Tab>
            );
          })}
        </TabList>
        {pageTabs.map((pageTab, index) => {
          let filteredEvent = events; 
          if (pageTab !== "All event") {
            filteredEvent = events.filter((event) => event.role === pageTab);
          }
          console.log(filteredEvent);

          return (
            <TabPanel key={index}>
              <div className="h-[510px] overflow-y-scroll">
                {filteredEvent.map((event, index) => (
                  <EventDetailsCard key={index} event={event} />
                ))}
              </div>
            </TabPanel>
          );
        })}
    </Tabs>
  );
};

export default EventTabs;
