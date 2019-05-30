import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";

import "./styles/nav.scss";

export default function NavBar(props) {
  return (
    <Grid fluid>
      <Col xs={12}>
        <Row start='md' center='xs'>
          <Col xs={12} md={6}>
            {/* <img
              className='logo'
              src='LOGO_URL'
              alt='logo'
            /> */}
            <h1>SHEETR DEMO</h1>
          </Col>
          <Col xs={12} md={6}>
            <Row center='xs' end='md'>
              <div className='nav'>
                <ul>
                  <li>
                    <NavLink exact to='/'>
                      HOME
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/program'>PROGRAM</NavLink>
                  </li>
                  <li>
                    <NavLink to='/about'>ABOUT</NavLink>
                  </li>
                </ul>
              </div>
            </Row>
          </Col>
        </Row>
      </Col>
    </Grid>
  );
}
