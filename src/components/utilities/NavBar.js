import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../assets/images/btp_white.png";
import style from "../styles/navStyle.module.css";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar
        className={style.navbar}
        collapseOnSelect
        sticky="top"
        expand="lg"
        style={{
          backgroundColor: "#008be0",
          height: "auto",
          borderRadius: "25px",
          margin: "10px",
          padding: "0px",
          overflow: "hidden",
        }}
      >
        <Navbar.Brand style={{ fontSize: "15px" }}>
          <img src={Logo} className={style.logo} alt="Black_Tech_Philly_Logo" />

          <Link
            to="/"
            className={style.lead}
            style={{
              textDecoration: "none",
            }}
          >
            <h1 className={style.primeText}>Black Tech Philly</h1>
            <h2 className={style.subText}>No code switching- Just code.</h2>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle areia-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link
              to="/mission"
              style={{ color: "white", textDecoration: "none" }}
              className={style.links}
            >
              Mission
            </Link>

            <Link
              to="codeofconduct"
              style={{ color: "white", textDecoration: "none" }}
              className={style.links}
            >
              Code of Conduct
            </Link>

            <Link
              to="connect"
              style={{ color: "white", textDecoration: "none" }}
              className={style.links}
            >
              Connect
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);
