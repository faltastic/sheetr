import React from "react";
import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";

import Event from "./Event.js";
import EventModal from "./EventModal.js";

export default function EventsAll(props) {
  const buttons = ["1 May", "2 May", "3 May", "4 May"];

  const [visibleEvents, setVisibleEvents] = useState(false);
  const [theDay, setTheDay] = useState(1);
  const [theCat, setTheCat] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalEventID, setModalEventID] = useState(false);

  const openModal = id => {
    setModalEventID(id);
    setModalIsOpen(true);
    // console.log(id);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    // setModalEventID(0);
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
        return <Event event={event} openModal={openModal} key={event.id} />;
      })
    );
  };

  useEffect(() => {
    filterEvents({ day: theDay, cat: theCat });
  });

  return (
    <div className='program' id='the-program'>
      {modalIsOpen ? (
        <EventModal
          event={props.events.filter(event => event.id === modalEventID).pop()}
          closeModal={closeModal}
        />
      ) : (
        <div>
          <div className='buttons-and-f'>
            <div className='buttons button-group filters-button-group'>
              {buttons.map((btn, key) => {
                return (
                  <button
                    className={
                      "button" + (theDay === key + 1 ? " is-checked" : "")
                    }
                    onClick={() => {
                      setTheDay(key + 1);
                      setTheCat(false);
                    }}>
                    {btn}
                  </button>
                );
              })}
              <button
                className={"button" + (theCat === "Party" ? " is-checked" : "")}
                onClick={() => {
                  setTheCat("Concert");
                  setTheDay(false);
                }}>
                Party
              </button>
              <button
                className={
                  "button" + (theCat === "Exhibiton" ? " is-checked" : "")
                }
                onClick={() => {
                  setTheCat("Exhibition");
                  setTheDay(false);
                }}>
                Exhibition
              </button>
            </div>
          </div>
          <div className='all-events'>
            <Masonry
              breakpointCols={{
                default: 4,
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
}
