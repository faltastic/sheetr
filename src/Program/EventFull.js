import React from "react";
import { Link } from "react-router-dom";

import formatDateTime from "./formatDateTime.js";

import "./../styles/eventfull.scss";

export default function EventFull(props) {
  const createMarkup = raw => {
    return { __html: raw };
  };

  if (props.event === null || props.event === undefined) {
    return null;
  } else {
    const {
      id,
      title,
      artists,
      days,
      times,
      location,
      categories,
      image_teaser,
      text,
      language,
      links,
      photoCredit,
      photoLink
    } = props.event;

    return (
      <div className='event-full'>
        <Link
          class='pinklink'
          to={`/program/`}
          onClick={() => props.closeEvent()}>
          &lsaquo;  BACK 
        </Link>
        <br />
        <h1>{title}</h1>
        <img
          class='event-photo'
          src={`https://drive.google.com/uc?id=${image_teaser}`}
          alt={title}
        />
        <br />
        {language && (
          <p>
            <strong>Languages:</strong> {language}
          </p>
        )}
        <p dangerouslySetInnerHTML={createMarkup(text)} />
        <br />

        Photo by <a class='pinklink' target="_blank" href={photoLink}>
                    {photoCredit}
                  </a>
                  

        {links && (
          <div>
            {" "}
            <h3> Links </h3>
            <ul>
              {links.split(",").map(link => (
                <li>
                  <a class='pinklink' href={link}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <br /> <br />
        <div class='icon-and-info'>
          <img
            alt='when'
            src='http://www.unframedfestival.de/images/ico/icons8-calendar-50.png'
          />
          <h3>{formatDateTime(days, times, id)}</h3>
        </div>
        <div class='icon-and-info'>
          <img
            alt='who'
            src='http://www.unframedfestival.de/images/ico/icons8-contacts-32.png'
          />
          <h3>{artists}</h3>
        </div>
        <div class='icon-and-info'>
          <img
            alt='categories'
            src='http://www.unframedfestival.de/images/ico/icons8-two-tickets-50.png'
          />
          <h3>{categories}</h3>
        </div>
        <div class='icon-and-info'>
          <img
            alt='where'
            src='http://www.unframedfestival.de/images/ico/icons8-map-pin-50.png'
          />
          <h3>{location}</h3>
        </div>
      </div>
    );
  }
}
