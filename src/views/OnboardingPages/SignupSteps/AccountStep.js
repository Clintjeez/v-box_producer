import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Form, Button, notification } from "antd";
import TextField from "@mui/material/TextField";

import { signupHandler, verifyRequest } from "../../../services/authService";

import "../styles/Signup.scss";

const AccountStep = (props) => {
  const [loading, setLoading] = useState(false);

  // const nextSlide = (props) => {
  //   props.next;
  // };

  const onSubmit = async (values) => {
    const data = {
      fullname: values.fullname,
      email: values.email,
      telephone: values.telephone,
      password: values.password,
      rpassword: values.confirm,
    };
    setLoading(true);
    await signupHandler(data)
      .then((res) => {
        console.log(res);
        notification.success({
          message: "Account created",
          description: "Your account has been created successfully",
        });
        props.next();
      })
      // await verifyRequest(data.telephone)
      //   .then((res) => {
      //     console.log(res);
      //   })
      .catch((err) => {
        console.log("erros", err.response);
        console.log(err.response.data.errors[0]?.message);
        notification.error({
          message: "Error",
          description: err.response
            ? err.response.data.errors[0]?.message
            : "Error occured",
        });
      });
    setLoading(false);
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
        onFinish={onSubmit}
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
          <TextField
            id="fullname"
            label="Full name"
            variant="outlined"
            className="auth-input"
          />
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
          <TextField
            id="email_address"
            label="Email Address"
            variant="outlined"
            className="auth-input"
          />
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
          <TextField
            id="phone_number"
            label="Phone Number"
            variant="outlined"
            className="auth-input"
          />
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
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            className="auth-input"
            type="password"
          />
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
          <TextField
            id="password"
            label="Comfirm Password"
            variant="outlined"
            className="auth-input"
            type="password"
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
