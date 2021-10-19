import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopHeader from "./TopHeader";
import Login from "./Login";

const Auth = () => {
  return (
    <>
      <TopHeader />
      <Router>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </>
  );
};

export default Auth;
