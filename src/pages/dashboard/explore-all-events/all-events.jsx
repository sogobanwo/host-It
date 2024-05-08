import EventLayout from '../../../components/events/Layout/Layout'
import React, { useState } from 'react'
import { FilterSearch, SearchNormal } from 'iconsax-react'
import EventCard from '../../../components/events/EventsCard/EventCard'
import MainButton from '../../../components/events/Buttons/MainButton'
import useGetAllEvents from '../../../Functions/useGetAllEvents'
import { TbLoaderQuarter } from 'react-icons/tb'
import { Item } from '@radix-ui/react-dropdown-menu'

const AllEvents = () => {
      const allEvents = useGetAllEvents();

      const [activeTab, setActiveTab] = useState(0);

      const cancelledEvent = allEvents.data.filter(Item => Item.isCancelled == true);

      const ongoingEvent = allEvents.data.filter(Item => Item.isCancelled != true);

      console.log(allEvents)
 
  return (
    <EventLayout>
      {
        allEvents.loading ? <section className='w-full h-full fixed top-0 left-0 flex justify-center items-center layoutBg overflow-hidden z-[99999]'>
          <h2 className="text-gray-200 font-barlow text-lg md:text-xl flex items-center gap-1">
            <TbLoaderQuarter className="animate-spin text-4xl mr-3" />
            fetching  all available Events...
          </h2>
        </section> :
          <>
            <div className="flex flex-col mdl:flex-row justify-between mx-3 my-3">
              <h1 className="font-bold text-2xl mdl:text-4xl text-[#fff]">
                Find your next event
              </h1>
              <div className="hidden mdl:flex items-center">
                <div className="relative flex items-center bg-lightBlack mdl:ml-5 rounded-full w-66 mdl:w-80">
                  <input
                    type="text"
                    style={{ backgroundColor: "transparent" }}
                    className="flex items-center bg-transparent text-white rounded-full py-4 px-12 text-opacity-60 text-base font-normal leading-none font-mono"
                    placeholder="Search for Events"
                  />
                  <div className="absolute inset-y-0 left-2 flex items-center pl-3 ">
                    <SearchNormal size="24" className='text-white' />
                  </div>
                </div>
                <div className="ml-2 rounded-full p-3 bg-lightBlack hover:bg-lightWhite ">
                  <FilterSearch size="24" className='text-white' />
                </div>
              </div>
            </div>
            <div className="flex gap-3 mb-2 px-3 overflow-x-scroll w-screen mdl:w-full ">
              <MainButton
                title={`All Events (${allEvents.data.length})`}
                link={"/"}
                active={true}
                handleTab={() => { setActiveTab(0)}}
              />
              <MainButton title={`ongoing (${ongoingEvent.length})`}  handleTab={() => { setActiveTab(2)}} />
              <MainButton title={`canceled (${cancelledEvent.length})`} handleTab={() => { setActiveTab(3)}} />
              <MainButton title={"Paid"} link={"/"} />
              <MainButton title={"Private"} link={"/"} />

            </div>

            <div className="overflow-y-scroll mb-5 flex flex-col items-center justify-center mdl:flex-row  mdl:flex-wrap gap-3 mdl:ml-3 -ml-3">
              {activeTab == 0 && allEvents.data.map((event, index) => (
                <div key={index} className="w-[80%] mdl:w-[420px]">
                  <EventCard key={index} event={event} />
                </div>
              ))}


            {activeTab == 2 && ongoingEvent.map((event, index) => (
                <div key={index} className="w-[80%] mdl:w-[420px]">
                  <EventCard key={index} event={event} />
                </div>
              ))}

            {activeTab == 3 && cancelledEvent.map((event, index) => (
                <div key={index} className="w-[80%] mdl:w-[420px]">
                  <EventCard key={index} event={event} />
                </div>
              ))}
            </div>
          </>}
    </EventLayout>

  )
}

export default AllEvents