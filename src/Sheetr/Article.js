import React from "react";
import formatDateTime from "./formatDateTime.js";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";

import "./../styles/article.scss";

export default function Article(props) {
  if (props.article === null || props.article === undefined) {
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
      teaser_text,
      image_teaser,
    } = props.article;

    const createMarkup = raw => {
      return { __html: raw };
    };

    return (
      <div className="article">
        <div className="article-info">
          <Link to={`/program/${id}`}>
            <ProgressiveImage
              src={image_teaser}
              placeholder={`https://drive.google.com/uc?id=1m_AKM-NObKai64_ErCrVm8uQD3009m5z`}
            >
              {(src, loading) => (
                <img
                  id={`img-article-${id}`}
                  onClick={() => props.openArticle(id)}
                  style={{
                    margin: loading ? "33.3%" : "0",
                    width: loading ? "33.3%" : "100%",
                  }}
                  src={src}
                  alt={title}
                />
              )}
            </ProgressiveImage>
          </Link>

          <h4>{title}</h4>

          {artists && <h4 className="secondary">{artists}</h4>}
          <div className="name-and-icon">
            <h5>{formatDateTime(days, times, id)}</h5>
            <img
              className="icon"
              src="http://www.unframedfestival.de/images/ico/icons8-calendar-50.png"
              alt="calender"
            />
          </div>
          <div className="name-and-icon">
            <h5>
              {categories} @ {location}
            </h5>
            <img
              className="icon"
              src="http://www.unframedfestival.de/images/ico/icons8-two-tickets-50.png"
              alt="category"
            />
          </div>
          <p>
            <span dangerouslySetInnerHTML={createMarkup(teaser_text)} />
          </p>

          <Link to={`/program/${id}`} onClick={() => props.openArticle(id)}>
            Read More
          </Link>
        </div>
      </div>
    );
  }
}
