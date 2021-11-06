import React from "react";
import { Row, Col } from "antd";

import MovieDefaultImg from "../../../../assets/dasboard-icons/movie-list-default.png";
import WalletDefaultImg from "../../../../assets/dasboard-icons/wallet-default.png";
import CommentDefaultImg from "../../../../assets/dasboard-icons/comments-default.png";
import ActivityDefaultImg from "../../../../assets/dasboard-icons/activities-default.png";

import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-home">
      <Row gutter={16}>
        <Col span={10}>
          <div className="movie-list">
            <div className="title">
              <p>My Movies</p>
              <p>See all</p>
            </div>
            <div className="content">
              <div className="items">
                <img src={MovieDefaultImg} />
              </div>
            </div>
          </div>
        </Col>
        <Col span={14}>
          <Row gutter={16}>
            <Col span={12}>
              <div className="wallet">
                <div className="title">
                  <p>Wallet</p>
                  <p>Wallet ID</p>
                </div>
                <div className="content">
                  <div className="items">
                    <img src={WalletDefaultImg} />
                  </div>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="wallet">
                <div className="title">
                  <p>Comments</p>
                </div>
                <div className="content">
                  <div className="items">
                    <img src={CommentDefaultImg} />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="activities">
            <div className="title">
              <p>Activities</p>
            </div>
            <div className="content">
              <div className="items">
                <img src={ActivityDefaultImg} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

//write a multi step fomr react typescript
