import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import MainButton from "../Buttons/MainButton";
import Poap from "../EventTicket/Poap";
import Ticket from "../EventTicket/Ticket";


const EventTabsTP = ({ pageTabs }) => {
  const [tabIndex, setTabIndex] = useState(0);
  return (

    <Tabs selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)} className="w-full ml-2 mdl:ml-3  whitespace-no-wrap">
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
      <TabPanel key={0}>
        <Ticket />
      </TabPanel>
      <TabPanel key={1} className={"flex w-full"}>
        <Poap />
      </TabPanel>

    </Tabs>
  );
};

export default EventTabsTP;
