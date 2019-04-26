import React from "react";
import ReactDOM from "react-dom";

// import * as serviceWorker from "./serviceWorker";

import { HashRouter } from "react-router-dom"; // { Route, HashRouter }
import NavBar from "./NavBar.js";
import Intro from "./Intro.js";
import Program from "./Program/Program.js";
import About from "./About.js";
import Footer from "./Footer.js";

import "./styles/base.css";

const routing = (
  <HashRouter>
    <div className='container'>
      <NavBar />
      <Intro />
      <Program />
      <About />
      {/* <Route exact path='/' component={Intro} />
      <Route path='/about' component={About} />
      <Route path='/program' component={Program} />
      <Route path="/program/:id" component={App} /> */}
      <Footer />
    </div>
  </HashRouter>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
