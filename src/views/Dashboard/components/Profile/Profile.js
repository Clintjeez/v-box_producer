import React from "react";
import { Form, Input, Row, Col } from "antd";

import ProfileImg from "../../../../assets/producer-avatar.png";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-header">
        <img src={ProfileImg} alt="profile" />
        <button>Change Picture</button>
      </div>

      <Form className="profile-info" layout="vertical">
        <Row>
          <Col span={12}>
            <div className="input-wrapper">
              <label>First Name</label>
              <Input placeholder="First Name" className="input" />
            </div>
            <div className="input-wrapper">
              <label>Address</label>
              <Input placeholder="First Name" className="input" />
            </div>
            <div className="input-wrapper">
              <label>State</label>
              <Input placeholder="First Name" className="input" />
            </div>
            <div className="input-wrapper">
              <label>Email Address</label>
              <Input placeholder="First Name" className="input" />
            </div>
            <button className="profile-btn">Save</button>
          </Col>
          <Col span={12}>
            <div className="input-wrapper">
              <label>Last Name</label>
              <Input placeholder="First Name" className="input" />
            </div>
            <div className="input-wrapper">
              <label>City</label>
              <Input placeholder="First Name" className="input" />
            </div>
            <div className="input-wrapper">
              <label>Phone Number</label>
              <Input placeholder="First Name" className="input" />
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Profile;
