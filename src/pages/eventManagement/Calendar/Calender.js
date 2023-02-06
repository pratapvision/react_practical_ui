import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from '../../../utils/eventCalendar'

import styled from "@emotion/styled";

export const StyleWrapper = styled.div`
  .fc tr {
    text-align: center;
  }
//   .fc-daygrid-day-frame{
//     margin: -50px;
//   }
  .fc .fc-toolbar-title{
    font-size: 16px;
  }
  .fc .fc-button{
    background-color: #F9F9FB;
    color: black;
    border: 0.1px solid gray;
    border-radius: 8px;
  }
  .fc .fc-button:hover{
    background-color: #FD9C40;
    border-color: #FD9C40;
    color: white;
  }
  .fc .fc-button-primary:not(:disabled).fc-button-active{
    background-color: #FD9C40;
    border-color: #FD9C40;
  }
`

const Calender = () => {
    const [weekendsVisible, setWeekendsVisible] = useState(true)
    const [currentEvents, setCurrentEvents] = useState([])

    const handleDateSelect = (selectInfo) => {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar

        calendarApi.unselect()

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            })
        }

    }

    const renderEventContent = (eventInfo) => {
        console.log("sdf", eventInfo.event.title)
        return (
            <>
                <b>{eventInfo.timeText}</b>
                <i className='text-center'>{eventInfo.event.title}</i>
            </>
        )
    }

    // const handleEventClick = (clickInfo) => {
    //     if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    //         clickInfo.event.remove()
    //     }
    // }

    const handleEvents = (events) => {
        setCurrentEvents(events)

    }
    return (
        <div className=''>
            <h2>Calendar</h2>
            <StyleWrapper>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: 'title',
                        right: 'prev next dayGridMonth timeGridWeek timeGridDay',
                    }}
                    initialView='dayGridMonth'
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={weekendsVisible}
                    initialEvents={INITIAL_EVENTS}
                    select={handleDateSelect}
                    eventContent={renderEventContent}
                    // eventClick={handleEventClick}
                    eventsSet={handleEvents}
                />
            </StyleWrapper>
        </div>
    )
}

export default Calender