import React from "react";
import PropTypes from "prop-types";

import formatDateTime from "./formatDateTime.js";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";

import "./../styles/article.scss";

const Article = ({
  article: {
    id,
    title,
    artists,
    days,
    times,
    location,
    categories,
    teaser_text,
    image_teaser,
  },
  openArticle,
}) => {
  const createMarkup = (raw) => {
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
                onClick={() => openArticle(id)}
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

        <Link to={`/program/${id}`} onClick={() => openArticle(id)}>
          Read More
        </Link>
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artists: PropTypes.string.isRequired,
    days: PropTypes.string.isRequired,
    times: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    categories: PropTypes.string.isRequired,
    teaser_text: PropTypes.string.isRequired,
    image_teaser: PropTypes.string.isRequired,
  }).isRequired,
  openArticle: PropTypes.func.isRequired,
};

export default Article;
