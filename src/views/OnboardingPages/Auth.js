import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopHeader from "./TopHeader";
import Login from "./Login";
import Signup from "./Signup";
import Verify from "./Verify";
import Signup2 from "./Signup2";

const Auth = () => {
  return (
    <>
      <TopHeader />
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/verify" component={Verify} />
          <Route path="/signup2" component={Signup2} />
        </Switch>
      </Router>
    </>
  );
};

export default Auth;
