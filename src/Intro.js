import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./styles/intro.scss";

export default function Intro(props) {
  return (
    <section id='intro'>
      <Grid fluid>
        <Row>
          <Col xs={12} sm={12} md={8} lg={6} mdOffset={2} lgOffset={3}>
            <img
              alt='banner'
              src='http://www.unframedfestival.de/2019/img/banner-600.jpg'
            />

            <div className='large-text'>
              <h1>Our Festival</h1>
              <h2>1-4 May 2019</h2>

              <p>
                Welcome to the fourth edition of the Unframed Festival titled
              </p>
              <p className='pink-100'>
                <strong>"MATTER OF WORDS"</strong>
              </p>
              <p>
                As unframed people, we want to focus on socio-political debates,
                that are struggling to exist in our societies.
              </p>
              <p>
                It is not about convincing people but about collecting material
                to stimulate critical reflection, for those who are interested.
                It is a space to gather as individuals and to discuss the
                pluralities of transformation in society.
              </p>
              <p>
                The Topic of this year, MATTER OF WORDS, will go from the spoken
                self-empowerment, to the strength through languages of a group.
                From the power of words into radical definitions, to the power
                of words that cradle us. From the words we blind ourselves with,
                to the ones that brand us forever. From the words that are
                banned by societies, to the ones that are(miss)- used for
                propagandas. From the silence of oppressive violences, to the
                noise left by liberating actions. And much more.
              </p>
              <p>
                We may not understand all of them, we may leave with more
                questions than we came with - that&rsquo;s okay
              </p>
              <p className='pink-100'>
                <strong>*</strong>{" "}
                <em>
                  +++++++ We do not tolerate any kind of sexism, racism and
                  other forms of discrimination ++++++++&nbsp;
                </em>
              </p>
            </div>
          </Col>
        </Row>
      </Grid>
    </section>
  );
}
