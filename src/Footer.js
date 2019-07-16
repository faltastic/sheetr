import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import "./styles/footer.scss";

export default function Footer(props) {
  return (
    <footer>
      <Grid fluid>
        <Row>
          <Col xs={12} sm={12} md={8} lg={6} mdOffset={2} lgOffset={3}>
            <center>
              <p>SHEETR</p>
              <a href="https://www.facebook.com/">
                <img
                  alt="facebook"
                  src="http://www.unframedfestival.de/images/ico/social/facebook-3-48.png"
                />
              </a>
              &nbsp; &nbsp;&nbsp;
              <a href="http://www.instagram.com/">
                <img
                  alt="instagram"
                  src="http://www.unframedfestival.de/images/ico/social/instagram-48.png"
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
}
