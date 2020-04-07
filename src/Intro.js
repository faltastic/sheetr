import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { NavLink } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";

import "./styles/intro.scss";

const Intro = () => {
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
              <br />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8} mdOffset={2}>
            <div id="intro-inverse">
              <h3 className="highlighted">What is it?</h3>
              <p>
                A website template built on React and a filterable database on
                Google Sheets.
              </p>
              <p>
                {" "}
                You can use this database to hold any type of linked media
                content, plain text or even HTML. This means you can create
                pages like a portfolio, an events program, or a personal blog.
              </p>
              <p>
                This page is a demo, and you can find the code and a tutorial on
                usage at the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/faltastic/sheetr"
                >
                  github repo
                </a>
                .
              </p>

              <h3 className="highlighted">Why?</h3>
              <p>
                Because your team's working spreadsheet is already a database.
              </p>
              <p>
                Because small teams use spreadsheets anyway to prepare their
                data before publishing them online.
              </p>
              <p>
                Because they don't need to re-enter the data somewhere else.
              </p>
              <p>
                For small projects, this makes it easier to prototype and
                maintain a website without having to use an additional database
                or a special user interface for data entry and editing like on
                Wordpress or tumblr.
              </p>
              <p>
                To simplify things, this app takes the data directly from your
                working sheet, and whenever it's updated, it's instantly visible
                on the live website.
              </p>
              <h3 className="highlighted">Data for this Demo</h3>
              <p>
                The <NavLink to="/program">program</NavLink> section is a demo
                of a program of events filterable by dates and categories. Each
                event has data such as title, artist/author, photo, location,
                teaser_text, and text. You can view{" "}
                <a
                  href="https://docs.google.com/spreadsheets/d/117qsaEFQLenUyr6RPyYMPYJtkur_7vBK_NA9hepH6xQ/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  the demo spreadsheet here.
                </a>
              </p>
              <p>
                This dataset is itself a small experiment in using machine
                generated demo content for webpages. The text data were entirely
                generated with the help of{" "}
                <a
                  href="https://talktotransformer.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TalkToTransformer
                </a>{" "}
                which uses the OpenAI{" "}
                <a
                  href="https://openai.com/blog/better-language-models/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GPT-2 language model
                </a>
                .
              </p>

              <p>
                The images are custom curated to the text. Each photo is
                credited in its article's text and they are "beautiful, free
                images gifted by the world’s most generous community of
                photographers" from{" "}
                <a
                  href="https://unsplash.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unsplash
                </a>
                .
              </p>
            </div>
          </Col>
        </Row>
      </Grid>
    </section>
  );
};

export default Intro;
