import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import ProgressiveImage from "react-progressive-image";

import "./styles/intro.scss";

export default function Intro(props) {
  return (
    <section>
      <Grid fluid>
        <Row id="intro">
          <Col xs={12}>
            <ProgressiveImage
              src={`https://drive.google.com/uc?id=1cs6SGriScKVD20wIVkUVi4UNw_unJQ4q`}
              placeholder={`https://drive.google.com/uc?id=1m_AKM-NObKai64_ErCrVm8uQD3009m5z`}
            >
              {(src, loading) => (
                <img
                  style={{
                    margin: loading ? "33.3%" : "0",
                    width: loading ? "33.3%" : "100%",
                  }}
                  src={src}
                  alt="banner"
                />
              )}
            </ProgressiveImage>

            <div className="large-text">
              <h2>
                React for frontend <br />+ <br />
                Google Sheets for content
              </h2>
              <br />

              <p>A React App template with a Google Sheets backend</p>

              <p className="highlighted">
                <strong>"MATTER OF WORDS"</strong>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8} mdOffset={2}>
            <div id="intro-inverse">
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
              <p className="highlighted">
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
