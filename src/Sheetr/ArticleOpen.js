import React from "react";
import { Link } from "react-router-dom";

import formatDateTime from "./formatDateTime.js";
import { Grid, Row, Col } from "react-flexbox-grid";
import ProgressiveImage from "react-progressive-image";

import "./../styles/articleopen.scss";

export default function ArticleOpen(props) {
  const createMarkup = raw => {
    return { __html: raw };
  };

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
      image,
      text,
      photoCredit,
      photoLink,
    } = props.article;
    return (
      <Grid fluid className="article-open">
        <Col xs={12}>
          <Link
            className="pinklink"
            to={`/program/`}
            onClick={() => props.closeArticle()}
          >
            &lsaquo; BACK
          </Link>
          <br />
          <h2>{title}</h2>
          <br />

          <ProgressiveImage
            src={image}
            placeholder={`https://drive.google.com/uc?id=1m_AKM-NObKai64_ErCrVm8uQD3009m5z`}
          >
            {(src, loading) => (
              <img
                className="article-photo"
                style={{
                  margin: loading ? "10% 33.3% 10% 33.3%" : "0 auto",
                  maxWidth: loading ? "33.3%" : "100%",
                }}
                src={src}
                alt={title}
              />
            )}
          </ProgressiveImage>
          <Row>
            <Col xs={12} md={8}>
              <p dangerouslySetInnerHTML={createMarkup(text)} />
              <br />
              Photo by{" "}
              <a className="pinklink" href={photoLink}>
                {photoCredit}
              </a>
            </Col>
            <Col xs={12} md={4}>
              <Row>
                <div className="icon-and-info">
                  <img
                    alt="when"
                    src="http://www.unframedfestival.de/images/ico/icons8-calendar-50.png"
                  />
                  <h4>{formatDateTime(days, times, id)}</h4>
                </div>
                <div className="icon-and-info">
                  <img
                    alt="who"
                    src="http://www.unframedfestival.de/images/ico/icons8-contacts-32.png"
                  />
                  <h4>{artists}</h4>
                </div>
                <div className="icon-and-info">
                  <img
                    alt="categories"
                    src="http://www.unframedfestival.de/images/ico/icons8-two-tickets-50.png"
                  />
                  <h4>{categories}</h4>
                </div>
                <div className="icon-and-info">
                  <img
                    alt="where"
                    src="http://www.unframedfestival.de/images/ico/icons8-map-pin-50.png"
                  />
                  <h4>{location}</h4>
                </div>
              </Row>
            </Col>
          </Row>
        </Col>
      </Grid>
    );
  }
}
