import React from "react";
import Modal from "react-responsive-modal";
import formatDateTime from "./formatDateTime.js";

import "./../styles/modal.css";

export default function EventModal(props) {
  const {
    id,
    title,
    artists,
    days,
    times,
    location,
    categories,
    images,
    text,
    language,
    links
  } = props.event;

  const createMarkup = raw => {
    return { __html: raw };
  };

  return (
    <Modal
      open={true}
      onClose={props.closeModal}
      center
      classNames={{
        overlay: "customOverlay",
        modal: "customModal"
      }}>
      <div id='modal-inner-content'>
        <h1>{title}</h1>
        <img
          class='event-photo'
          src={`http://www.unframedfestival.de/2019/img/events/${images}`}
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
        <div class='date'>
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
        </div>
        <div class='tickets'>
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
      </div>
    </Modal>
  );
}
