import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";

import "./styles/nav.scss";

const NavBar = () => {
  return (
    <Grid fluid>
      <Col xs={12}>
        <Row start="md" center="xs">
          <Col xs={12} md={6}>
            <h1>DEMO-SHEETR</h1>
          </Col>
          <Col xs={12} md={6}>
            <Row center="xs" end="md">
              <div className="nav">
                <ul>
                  <li>
                    <NavLink exact to="/">
                      HOME
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/program">PROGRAM</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">ABOUT</NavLink>
                  </li>
                </ul>
              </div>
            </Row>
          </Col>
        </Row>
      </Col>
    </Grid>
  );
};

export default NavBar;
