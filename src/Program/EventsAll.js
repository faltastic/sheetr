import React from "react";
import { useState, useEffect } from "react";
import { withRouter } from "react-router";

import Masonry from "react-masonry-css";

import Event from "./Event.js";
import EventFull from "./EventFull.js";

import "./../styles/program.scss";

const dayButtons = ["1 May", "2 May", "3 May", "4 May"];
const categoryButtons = ["Party", "Exhibition"];

const EventsAll = props => {
  const [visibleEvents, setVisibleEvents] = useState(false);
  const [theDay, setTheDay] = useState(1);
  const [theCat, setTheCat] = useState(false);
  const [eventIsOpen, setEventIsOpen] = useState(false);
  const [eventID, setEventID] = useState(false);

  const openEvent = id => {
    setEventID(id);
    setEventIsOpen(true);
  };

  const closeEvent = () => {
    setEventIsOpen(false);
  };

  const filterEvents = filter => {
    let filtered = props.events;
    if (filter.day !== false) {
      filtered = filtered.filter(event => event.days.includes(filter.day));
    } else if (filter.cat !== false) {
      filtered = filtered.filter(event =>
        event.categories.includes(filter.cat)
      );
    }
    setVisibleEvents(
      filtered.map(event => {
        return <Event event={event} openEvent={openEvent} key={event.id} />;
      })
    );
    setTheDay(filter.day);
    setTheCat(filter.cat);
    sessionStorage.setItem("filters", JSON.stringify(filter));
  };

  useEffect(() => {
    if (props.eventIDRoute > 0 && props.eventIDRoute <= props.events.length) {
      openEvent(props.eventIDRoute);
    }

    let savedfilters = sessionStorage.getItem("filters");
    if (savedfilters) {
      savedfilters = JSON.parse(savedfilters);
      setTheDay(savedfilters.day);
      setTheCat(savedfilters.cat);
      filterEvents(savedfilters);
    } else {
      filterEvents({ day: theDay, cat: theCat });
    }
  }, [props]);

  return (
    <div className='program' id='the-program'>
      {eventIsOpen ? (
        <EventFull
          event={props.events.filter(event => event.id === eventID).pop()}
          closeEvent={closeEvent}
        />
      ) : (
        <div>
          <div className='filters'>
            <div className='buttons button-group filters-button-group'>
              {dayButtons.map((btn, key) => {
                return (
                  <button
                    className={
                      "button" + (theDay === key + 1 ? " is-checked" : "")
                    }
                    onClick={() => {
                      filterEvents({ day: key + 1, cat: false });
                    }}>
                    {btn}
                  </button>
                );
              })}
              {categoryButtons.map((btn, key) => {
                return (
                  <button
                    className={"button" + (theCat === btn ? " is-checked" : "")}
                    onClick={() => {
                      filterEvents({ day: false, cat: btn });
                    }}>
                    {btn}
                  </button>
                );
              })}
            </div>
          </div>
          <div className='all-events'>
            <Masonry
              breakpointCols={{
                default: 3,
                960: 3,
                768: 2,
                600: 1
              }}
              className='my-masonry-grid'
              columnClassName='my-masonry-grid_column'>
              {visibleEvents}
            </Masonry>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(EventsAll);
