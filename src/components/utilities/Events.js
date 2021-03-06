import React, { Component } from "react";
import request from "superagent";
import { Card, Col } from "react-bootstrap";
import reactStringReplace from "react-string-replace";

class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      eventOne: [],
      eventTwo: [],
      eventThree: [],
      eventFour: [],
    };
  }

  componentDidMount = () => {
    const calendarId = process.env.REACT_APP_CALENDAR_ID;
    const googleKey = process.env.REACT_APP_GOOGLE_KEY;

    let url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${googleKey}`;
    request.get(url).end((err, res) => {
      if (err) {
        // console.log(err);
      } else {
        this.setState({
          eventOne: res.body.items[0],
          eventTwo: res.body.items[1],
          eventThree: res.body.items[2],
          eventFour: res.body.items[3],
        });
      }
    });
  };

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          height: "auto",
          width: "auto",
          fontSize: "12px",
        }}
      >
        <Col
          sm="auto"
          md="auto"
          lg="auto"
          xl={6}
          style={{
            height: "auto",
            display: "inline-block",
          }}
        >
          <Card
            style={{
              width: "auto",
              height: "auto",
              color: "white",
              fontSize: "20px",
              backgroundColor: "#008BE0",
              margin: "5px",
            }}
          >
            <Card.Body style={{}}>
              <Card.Title>
                <u>{this.state.eventFour.summary}</u>
              </Card.Title>

              <Card.Text style={{ fontFamily: "Eina01-Regular" }}>
                {reactStringReplace(
                  this.state.eventFour.description,
                  /(\^)/g,
                  (match, i) => (
                    <p key={i}>{match}</p>
                  )
                )}
              </Card.Text>
              <Card.Link
                style={{ color: "#FFD355" }}
                href={this.state.eventFour.hangoutLink}
                target="_blank"
                rel="noreferrer"
              >
                Google Hangouts Link
              </Card.Link>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "auto",
              height: "auto",
              color: "white",
              fontSize: "20px",
              backgroundColor: "#008BE0",
              margin: "5px",
            }}
          >
            <Card.Body style={{}}>
              <Card.Title>
                {" "}
                <u>{this.state.eventThree.summary}</u>
              </Card.Title>
              <Card.Text style={{ fontFamily: "Eina01-Regular" }}>
                {reactStringReplace(
                  this.state.eventThree.description,
                  /(\^)/g,
                  (match, i) => (
                    <p key={i}>{match}</p>
                  )
                )}
              </Card.Text>
              <Card.Link
                style={{ color: "#FFD355" }}
                href={this.state.eventThree.hangoutLink}
                target="_blank"
                rel="noreferrer"
              >
                Google Hangouts Link
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col
          sm="auto"
          md="auto"
          lg="auto"
          xl={6}
          style={{
            height: "auto",
            display: "inline-block",
          }}
        >
          <Card
            style={{
              width: "auto",
              height: "auto",
              color: "white",
              fontSize: "20px",
              backgroundColor: "#008BE0",
              margin: "5px",
            }}
          >
            <Card.Body style={{}}>
              <Card.Title>
                <u>{this.state.eventTwo.summary}</u>{" "}
              </Card.Title>
              <Card.Text style={{ fontFamily: "Eina01-Regular" }}>
                {reactStringReplace(
                  this.state.eventTwo.description,
                  /(\^)/g,
                  (match, i) => (
                    <p key={i}>{match}</p>
                  )
                )}
              </Card.Text>
              <Card.Link
                style={{ color: "#FFD355" }}
                href={this.state.eventTwo.hangoutLink}
                target="_blank"
                rel="noreferrer"
              >
                Google Hangouts Link
              </Card.Link>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "auto",
              height: "auto",
              color: "white",
              fontSize: "20px",
              backgroundColor: "#008BE0",
              margin: "5px",
            }}
          >
            <Card.Body style={{}}>
              <Card.Title>
                <u> {this.state.eventOne.summary}</u>
              </Card.Title>
              <Card.Text style={{ fontFamily: "Eina01-Regular" }}>
                {reactStringReplace(
                  this.state.eventOne.description,
                  /(\^)/g,
                  (match, i) => (
                    <p key={i}>{match}</p>
                  )
                )}
              </Card.Text>
              <Card.Link
                style={{ color: "#FFD355" }}
                href={this.state.eventOne.hangoutLink}
                target="_blank"
                rel="noreferrer"
              >
                Google Hangouts Link
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}

export default Events;
