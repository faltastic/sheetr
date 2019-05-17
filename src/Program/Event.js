import React from "react";
import formatDateTime from "./formatDateTime.js";
import { Link } from "react-router-dom";

export default function Event(props) {
  const {
    id,
    title,
    artists,
    days,
    times,
    location,
    categories,
    teaser_image,
    teaser_text
  } = props.event;

  const createMarkup = raw => {
    return { __html: raw };
  };

  return (
    <div className='event'>
      <div class='event-info'>
         <Link to={`/program/${id}`}>
            <img
              id={`img-event-${id}`}
              onClick={() => props.openEvent(id)}
              src={`http://www.unframedfestival.de/2019/img/events/${teaser_image}`}
              alt={title}
            />
        </Link>

        <div class='name-and-icon'>
          <h3>{title}</h3>
        </div>
        <div class='name-and-icon'>
          <h4>{artists}</h4>
        </div>
        <div class='name-and-icon'>
          <img
            src='http://www.unframedfestival.de/images/ico/icons8-calendar-50.png'
            alt='calender'
          />
          <h5>{formatDateTime(days, times, id)}</h5>
        </div>
        <div class='name-and-icon'>
          <img
            src='http://www.unframedfestival.de/images/ico/icons8-two-tickets-50.png'
            alt='category'
          />
          <h5>
            {categories} @ {location}
          </h5>
        </div>
        <p>
          <span dangerouslySetInnerHTML={createMarkup(teaser_text)} />
        </p>

        <Link to={`/program/${id}`} onClick={() => props.openEvent(id)}>
          Read More
        </Link>
      </div>
    </div>
  );
}