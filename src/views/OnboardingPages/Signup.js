import React from "react";
import { Link } from "react-router-dom";
import { Steps, Step } from "react-step-builder";

import SignupStep from "./SignupSteps/SignupStep";
import VerifyStep from "./SignupSteps/VerifyStep";
import AccountStep from "./SignupSteps/AccountStep";
import FinalStep from "./SignupSteps/FinalStep";

import "./styles/Signup.scss";

const Signup = ({ history }) => {
  return (
    <div className="wrapper">
      <div className="container d-flex">
        <Steps>
          {/* <Step component={SignupStep} /> */}
          <Step component={AccountStep} />
          <Step component={VerifyStep} />
          <Step component={FinalStep} />
        </Steps>
      </div>
    </div>
  );
};

export default Signup;
