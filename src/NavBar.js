import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./styles/nav.css";

export default function NavBar(props) {
  return (
    <div class='nav-and-logo'>
      <img
        className='logo'
        src='http://www.unframedfestival.de/images/logo.png'
        alt='logo'
      />
      <div class='nav'>
        <ul>
          {/* <li>
            <NavLink exact to='/'>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to='/program'>PROGRAM</NavLink>
          </li>
          <li>
            <NavLink to='/about'>ABOUT</NavLink>
          </li> */}
          <li>
            <NavLink to='#the-intro'>HOME</NavLink>
          </li>
          <li>
            <Link to='the-program'>PROGRAM</Link>
          </li>
          <li>
            <NavLink to='/about'>ABOUT</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
