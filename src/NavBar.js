import React from "react";
import { NavLink } from "react-router-dom";

import "./styles/nav.css";

export default function NavBar(props) {
  return (
    <div className='nav-and-logo'>
      <img
        className='logo'
        src='http://www.unframedfestival.de/images/logo.png'
        alt='logo'
      />
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
    </div>
  );
}
