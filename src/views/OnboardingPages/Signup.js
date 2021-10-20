import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";

import "./styles/Signup.scss";

const Signup = () => {
  return (
    <div className="signup">
      <div className="container d-flex">
        <div className="form-wrapper">
          <div className="form-header">
            <div className="header-txt">
              <h3>Sign Up</h3>
              <p>First step on getting your movies on V-Box</p>
            </div>
            <div className="header-steps">
              <p>1/3</p>
            </div>
          </div>
          <Form
            className="form-group"
            name="login"
            initialValues={{
              remember: true,
            }}
            autoComplete="on"
          >
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                className="auth-input"
                style={{
                  width: "100%",
                }}
                placeholder="Enter Phone Number"
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 4,
                span: 12,
              }}
            >
              <Button type="primary" htmlType="submit" className="auth-btn">
                Continue
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;