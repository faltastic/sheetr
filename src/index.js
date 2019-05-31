import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";

// import * as serviceWorker from "./serviceWorker";

import { Route, HashRouter } from "react-router-dom";
import NavBar from "./NavBar.js";
import Intro from "./Intro.js";
import Sheetr from "./Sheetr/Sheetr.js";
import About from "./About.js";
import Footer from "./Footer.js";

// import { Grid, Row, Col } from "react-flexbox-grid";
import "./styles/base.scss";

const routing = (
  <HashRouter>
    <div className='container'>
      <NavBar />
      <Route exact path='/' component={Intro} />
      <Route path='/about' component={About} />
      <Route exact path='/program' component={Sheetr} />
      <Route path='/program/:id' component={Sheetr} />
      <Footer />
    </div>
  </HashRouter>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
