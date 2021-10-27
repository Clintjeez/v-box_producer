import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";

import "./styles/Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="container d-flex">
        <div className="form-wrapper">
          <div className="form-header">
            <p>Hi,</p>
            <h3>Please sign in..</h3>
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

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 4,
                span: 12,
              }}
            >
              <Button type="primary" htmlType="submit" className="auth-btn">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <Link className="link-txt" to="/">
            Forget password?
          </Link>
        </div>
        <p className="link-txt">
          New to V-BOX? <Link to="/signup"> Sign up </Link> to upload your
          movies
        </p>
      </div>
    </div>
  );
};

export default Login;
