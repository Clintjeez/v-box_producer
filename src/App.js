import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LandingPage from "./views/LandingPage";
import Auth from "./views/OnboardingPages/Auth";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/">
            <Auth />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
