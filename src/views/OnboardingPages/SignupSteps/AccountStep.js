import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";

import "../styles/Signup.scss";

const AccountStep = (props) => {
  return (
    <div className="form-wrapper">
      <div className="form-header">
        <div className="header-txt">
          <p>Hi,</p>
          <h3>Create login details</h3>
        </div>
        <div className="header-steps">
          <p>3/3</p>
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
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="Email address" className="auth-input" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Password" className="auth-input" />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Comfirm Password"
            className="auth-input"
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 12,
          }}
        >
          <Button
            onClick={props.next}
            type="primary"
            htmlType="submit"
            className="auth-btn"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AccountStep;
