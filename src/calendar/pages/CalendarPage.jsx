import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import CalendarEvent from '../components/CalendarEvent';
import CalendarModal from '../components/CalendarModal';
import Navbar from "../components/Navbar";
import esES from 'date-fns/locale/es'

import { addHours, format, parse, startOfWeek, getDay } from 'date-fns';
import { useState } from 'react';

export default function CalendarPage() {

    const locales = {
        'es-ES': esES,
    }

    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
    })

    const messages = {
        allDay: 'Todo el día',
        previous: '<',
        next: '>',
        today: 'Hoy',
        month: 'Mes',
        week: 'Semana',
        day: 'Día',
        agenda: 'Agenda',
        date: 'Fecha',
        time: 'Hora',
        event: 'Evento',
        noEventsInRange: 'No hay eventos en este rango',
        showMore: total => `+ Ver más (${total})`
    };

    const event = [{
        title: 'Birthday',
        notes: 'Buy the cake',
        start: new Date(),
        end: addHours(new Date(), 2),
        user: {
            _id: '123',
            name: "Alejo"

        }
    }]

    const eventStyleGetter=(event, start, end, isSelected)=>{
        const style ={
            backgroundColor: '#347CF7',
            borderRadius: '0px',
            opacity: 0.8,
            color: "white"
        }
        return{
            style
        }
    }
    
    const onDoubleClick = (event) =>{
        console.log({doubleClick: event});
    }
    const onSelect = (event) =>{
        console.log({click: event});
    }
    
    const onViewChanged = (event) =>{

        localStorage.setItem('lastView', event)
        setLastView(event)
    }

     const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week') 

    return (
        <>
            <Navbar />
            <Calendar
               culture='es-ES'
                localizer={localizer}
                events={event}
                defaultView={lastView}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px)' }}
                messages={messages}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChanged}
            />
            <CalendarModal/>

        </>
    )
}