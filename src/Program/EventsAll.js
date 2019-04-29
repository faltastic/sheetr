import React from "react";
import { useState, useEffect } from "react";
import { withRouter } from "react-router";

import Masonry from "react-masonry-css";

import Event from "./Event.js";
import EventModal from "./EventModal.js";

const EventsAll = props => {
  const dayButtons = ["1 May", "2 May", "3 May", "4 May"];
  const categoryButtons = ["Party", "Exhibition"];

  const [visibleEvents, setVisibleEvents] = useState(false);
  const [theDay, setTheDay] = useState(1);
  const [theCat, setTheCat] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalEventID, setModalEventID] = useState(false);

  const openModal = id => {
    setModalEventID(id);
    setModalIsOpen(true);
    // window.location = "https://www.bbc.co.uk";
    props.history.replace(`/program/` + id);
    // console.log(id);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    props.history.push(`/program/`);
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
    if (props.eventIDRoute > 0) {
      openModal(props.eventIDRoute);
    }
  }, []);

  useEffect(() => {
    filterEvents({ day: theDay, cat: theCat });
    console.log(props);
  }, [props, theDay, theCat]);

  return (
    <div className='program' id='the-program'>
      <div className='buttons-and-f'>
        <div className='buttons button-group filters-button-group'>
          {dayButtons.map((btn, key) => {
            return (
              <button
                className={"button" + (theDay === key + 1 ? " is-checked" : "")}
                onClick={() => {
                  setTheDay(key + 1);
                  setTheCat(false);
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
                  setTheCat(btn);
                  setTheDay(false);
                }}>
                {btn}
              </button>
            );
          })}
        </div>
      </div>

      {modalIsOpen ? (
        <EventModal
          event={props.events.filter(event => event.id === modalEventID).pop()}
          closeModal={closeModal}
          // to test
          eventIDRoute={modalEventID}
        />
      ) : (
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
      )}
    </div>
  );
};

export default withRouter(EventsAll);
