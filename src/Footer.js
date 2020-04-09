import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import { Facebook, Instagram } from "react-feather";

import "./styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <Grid fluid>
        <Row>
          <Col xs={12} sm={12} md={8} lg={6} mdOffset={2} lgOffset={3}>
            <center>
              <p>SHEETR</p>
              <a href="https://www.facebook.com/">
                <Facebook size={48} fill="#ea148c" strokeWidth={0} />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://www.instagram.com/">
                <Instagram
                  size={48}
                  fill="#ea148c"
                  color="#000"
                  strokeWidth={2}
                />
              </a>
              <p>
                This website was built with Love on React using TableTop and
                Masonry.
              </p>
            </center>
          </Col>
        </Row>
      </Grid>
    </footer>
  );
};

export default Footer;
