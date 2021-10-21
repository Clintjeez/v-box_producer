import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Button } from "antd";

import "./styles/Verify.scss";

const Verify = () => {
  const [otp, setOtp] = useState("");

  return (
    <div className="verify">
      <div className="container d-flex">
        <div className="form-wrapper">
          <div className="form-header">
            <div className="header-txt">
              <h3>Sign Up</h3>
              <p>Enter the OTP sent to your phone number</p>
            </div>
            <div className="header-steps">
              <p>2/3</p>
            </div>
          </div>
          <div className="form-group">
            <OtpInput
              value={otp}
              onChange={setOtp}
              containerStyle={"auth-input"}
              inputStyle={"otp-input"}
              numInputs={6}
              separator={<span> </span>}
              isInputNum="true"
            />
            <Button type="primary" htmlType="submit" className="auth-btn">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
