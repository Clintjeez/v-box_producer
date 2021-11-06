import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox, notification } from "antd";

import { signupHandler, verifyRequest } from "../../../services/authService";

import "../styles/Signup.scss";

const AccountStep = (props) => {
  const [loading, setLoading] = useState(false);

  const nextSlide = () => {
    //props.next;
  };

  const onFinish = (values) => {
    const data = {
      fullname: values.fullname,
      email: values.email,
      telephone: values.telephone,
      password: values.password,
      rpassword: values.confirm,
    };
    setLoading(true);
    signupHandler(data).then((res) => {
      console.log(res);
      notification.success({
        message: "Account created",
        description: "Your account has been created successfully",
      });
      nextSlide();
    });
    verifyRequest(data.telephone)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        notification.error({
          message: "Error",
          description: err.response?.errors?.message,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="form-wrapper">
      <div className="form-header">
        <div className="header-txt">
          <p>Hi,</p>
          <h3>Create login details</h3>
        </div>
        <div className="header-steps">
          <p></p>
        </div>
      </div>
      <Form
        onFinish={onFinish}
        className="form-group"
        name="register"
        initialValues={{
          remember: true,
        }}
        autoComplete="on"
      >
        <Form.Item
          name="fullname"
          rules={[
            {
              required: true,
              message: "Please input your full name",
            },
          ]}
        >
          <Input placeholder="Full name" className="auth-input" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input placeholder="Email address" className="auth-input" />
        </Form.Item>

        <Form.Item
          name="telephone"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input placeholder="Phone number" className="auth-input" />
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
            // onClick={props.next}
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
