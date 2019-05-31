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
      image_teaser,
      text,
      photoCredit,
      photoLink
    } = props.article;

    return (
    <Grid fluid className='article-open'>
      <Col xs={12}> 
        <Link
          class='pinklink'
          to={`/program/`}
          onClick={() => props.closeArticle()}>
          &lsaquo;  BACK 
        </Link>
        <br />
        <h2>{title}</h2>
        {/* <img
          class='article-photo'
          src={`https://drive.google.com/uc?id=${image_teaser}`}
          alt={title}
        /> */}
        <br />

        <ProgressiveImage src={`https://drive.google.com/uc?id=${image_teaser}`} placeholder='https://drive.google.com/uc?id=1tJD_nYc43SqmWbCzgmbSIKpoxR-BevrT'>
          {(src, loading) => (
            <img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt={title} />
          )}
        </ProgressiveImage>


    <Row>
      <Col xs={12} md={8}>

        <p dangerouslySetInnerHTML={createMarkup(text)} />
        <br />

        Photo by <a class='pinklink' href={photoLink}>
                    {photoCredit}
                  </a>        
    </Col>
    <Col xs={12} md={4}>
      <Row>
    
        <div class='icon-and-info'>
          <img
            alt='when'
            src='http://www.unframedfestival.de/images/ico/icons8-calendar-50.png'
          />
          <h4>{formatDateTime(days, times, id)}</h4>
        </div>
        <div class='icon-and-info'>
          <img
            alt='who'
            src='http://www.unframedfestival.de/images/ico/icons8-contacts-32.png'
          />
          <h4>{artists}</h4>
        </div>
        <div class='icon-and-info'>
          <img
            alt='categories'
            src='http://www.unframedfestival.de/images/ico/icons8-two-tickets-50.png'
          />
          <h4>{categories}</h4>
        </div>
        <div class='icon-and-info'>
          <img
            alt='where'
            src='http://www.unframedfestival.de/images/ico/icons8-map-pin-50.png'
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
