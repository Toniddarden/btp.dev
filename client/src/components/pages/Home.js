import React from "react";
import { Jumbotron, Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/btp.png";
import style from "../styles/landingStyle.module.css";

import Events from "../utilities/Events";

const Home = () => (
  <div>
    <Jumbotron className={style.landingImage}>
      <Container className={style.homeTextContainer}>
        <Row>
          <img
            className={style.logo}
            src={logo}
            alt="Black Tech Philly Color Logo"
          />

          <div
            style={{
              textAlign: "center",
              color: "white",
              margin: "auto",
              padding: "10px",
            }}
          >
            <h1>Welcome to Black Tech Philly</h1>
            <p style={{ fontFamily: "Eina01-Regular" }}>
              Philadelphia's Virtual Community for Black Tech Professionals
            </p>
            <Link to="/mission">
              <Button className={style.moreInfoBtn}>Learn More</Button>
            </Link>
          </div>
        </Row>
      </Container>
    </Jumbotron>
    <Row style={{ textAlign: "center", margin: "10px" }}>
      <Col
        sm="auto"
        md={6}
        lg={6}
        style={{
          height: "400px",
        }}
      >
        <div style={{ alignContent: "center" }}>
          <h1 style={{ color: "008BE0" }}>Events</h1> <Events />
        </div>
      </Col>
      <Col
        sm="auto"
        md={6}
        lg={6}
        style={{
          height: "400px",
        }}
      >
        <div>
          <h1>Latest</h1>
        </div>
      </Col>
    </Row>
  </div>
);

export default Home;
