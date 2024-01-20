import { useState, useEffect } from "react";
import axios from "axios";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "react-big-calendar/lib/css/react-big-calendar.css";

import EventInfo from "./EventInfo";

const localizer = momentLocalizer(moment);

const CalendarComp = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [toShowEvents, setToShowEvents] = useState([]);
  const [category, setCategory] = useState("all");
  const [type, setType] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/events`
        );
        const formattedEvents = response.data.map((event) => ({
          ...event,
          title: event.eventName,
          startDateTime: moment(event.startDateTime).toDate(),
          endDateTime: moment(event.endDateTime).toDate(),
        }));
        setEvents(formattedEvents);
        setToShowEvents(formattedEvents);
      } catch (error) {
        alert("API Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleEventDisplay = (event) => {
    setSelectedEvent(event);
    setIsOpen(true);
  };

  const closeEventInfo = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleChange = () => {
      if (category === "all" && type === "all") {
        setToShowEvents(events);
      } else if (category !== "all" && type === "all") {
        setToShowEvents(() =>
          events.filter((event) => event.category === category)
        );
      } else if (category === "all" && type !== "all") {
        setToShowEvents(() => events.filter((event) => event.type === type));
      } else {
        setToShowEvents(() =>
          events.filter(
            (event) => event.type === type && event.category === category
          )
        );
      }
    };
    handleChange();
  }, [category, type]);

  return (
    <div>
      {isOpen && <EventInfo event={selectedEvent} toggle={closeEventInfo} />}
      <p className="text-5xl text-blue-700 font-semibold italic text-center mt-8">
        College Calendar
      </p>

      <div className="flex justify-between mx-4 my-2 md:my-0 md:mx-8">
        <div>
          <Select
            className="w-[100px] md:w-fit text-xl"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="all">All Categories</option>
            <option value="academic">Academic</option>
            <option value="club">Club</option>
            <option value="placement">Placement</option>
            <option value="sports">Sports</option>
          </Select>
          <Select
            className="w-[100px] md:w-fit text-xl"
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option value="all">All Types</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="hybrid">Hybrid</option>
          </Select>
        </div>
        <div className="flex flex-row">
          <label className="text-lg font-bold mb-2 md:mt-2">Go To:</label>
          <input
            type="date"
            className="p-2 border border-gray-300 rounded w-fit ml-5"
            value={moment(selectedDate).format("YYYY-MM-DD")}
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
          />
        </div>
      </div>
      <div style={{ height: 700 }}>
        <Calendar
          localizer={localizer}
          events={toShowEvents}
          //views={["month", "week", "day"]}
          defaultView="month"
          startAccessor="startDateTime"
          endAccessor="endDateTime"
          onSelectEvent={(event) => handleEventDisplay(event)}
          date={selectedDate}
          onNavigate={(date) => setSelectedDate(date)}
          className="mx-5 rounded-xl"
        />
      </div>
      <div className="flex mr-5 md:mr-20 my-5 justify-end">
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded mr-8">
          <Link to="/addevent">Add a Event</Link>
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          <Link to="/showevents">Delete a Event</Link>
        </button>
      </div>
    </div>
  );
};

export default CalendarComp;
