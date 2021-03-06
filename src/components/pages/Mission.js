import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

import TPP from "./TPP/ThreePointPlan";

const Mission = () => (
  <div>
    <Jumbotron fluid style={{ margin: "10px" }}>
      <Container>
        <h1 style={{ textAlign: "center" }}>Mission</h1>
        <p
          style={{
            fontFamily: "Eina01-Regular",
            fontSize: "20px",
            padding: "4px",
            textAlign: "center",
          }}
        >
          Black Tech Philly is a predominantly virtual, inclusive space where
          Black tech professionals can discuss technology, share knowledge and
          experiences, find industry related opportunities, and work
          collaboratively on open source, community driven projects for the
          benefit of the denizens of Philadelphia and the surrounding areas.
        </p>
      </Container>
    </Jumbotron>

    <TPP />
  </div>
);

export default Mission;
