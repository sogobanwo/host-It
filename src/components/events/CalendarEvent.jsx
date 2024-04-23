import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { events } from '../CONSTANT'
// import { INITIAL_EVENTS, createEventId } from './event-utils'

export const CalendarEvent = () => {
  const calendarEvents = events
  console.log(calendarEvents)
  function renderEventContent(events) {

    <>
      <b>{events.title}</b>
      <i>{events.timeStamp}</i>
    </>

  }
  return (

    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      headerToolbar={{
        left: 'title',
        center: '',
        right: "prev,next"
      }}
      initialView='dayGridMonth'
      editable={false}
      selectable={false}
      selectMirror={false}
      dayMaxEvents={true}
      // weekends={this.state.weekendsVisible}

      eventContent={renderEventContent} // custom render function

      events={calendarEvents}
      customViewRender={function (view, element) {
        // Change the skeletal lines color
        element
          .querySelector('.fc-daygrid-view')
          .classList.add('calcolor');

        // Change the day numbers color
        element
          .querySelectorAll('.fc-daygrid-day-number')
          .forEach(function (el) {
            el.classList.add('calcolor');
          });
      }}
    />
  )

}



export class CalendarEventTwo extends React.Component {

  state = {
    weekendsVisible: true,
    currentEvents: []
  }

  render() {
    return (
      <div className='demo-app'>
        {this.renderSidebar()}
        <div className='demo-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'title',
              center: '',
              right: 'prev,next'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={renderEventContentr} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed

          />
        </div>
      </div>
    )
  }

  renderSidebar() {
    return (
      <div className='demo-app-sidebar'>


        <div className='demo-app-sidebar-section'>
          <ul>
            {this.state.currentEvents.map(renderSidebarEventr)}
          </ul>
        </div>
      </div>
    )
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }




  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

}

function renderEventContentr(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEventr(events) {
  return (
    <li key={events.id}>
      {/* <b>{formatDate(events.timeStamp, {year: 'numeric', month: 'short', day: 'numeric'})}</b> */}
      <i>{events.title}</i>
    </li>
  )
}