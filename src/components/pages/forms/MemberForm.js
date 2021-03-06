import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import style from "../../styles/formStyle.module.css";
import { sendMsg } from "../../../API";

class MemberForm extends Component {
  constructor() {
    super();
    this.state = {
      to: "blacktechphilly@gmail.com",
      name: "",
      from: "",
      subject: "",
      text: "",
      error: "",
      confirmSent: false,
    };
  }

  handleChange = (name) => (event) => {
    this.setState({ error: "" });
    this.setState({ [name]: event.target.value });
  };

  submit = (event) => {
    event.preventDefault();
    const { to, from, subject, text } = this.state;
    const msg = {
      to,
      from,
      subject,
      text,
    };
    console.log(msg);
    sendMsg(msg).then((msg) => {
      if (msg.error) this.setState({ eror: msg.error });
      else
        this.setState({
          error: "",
          from: "",
          subject: "",
          text: "",
        });
    });
    this.setState({ confirmSent: true });
  };
  contactForm = (name, from, text, subject) => (
    <div>
      <div>
        <h3
          style={{
            textAlign: "center",
            color: "grey",
            padding: "10px",
          }}
        >
          Prospective Members
        </h3>
        <Form className={style.formMain}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ marginLeft: "10px" }}></Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={this.handleChange("name")}
              value={name}
              className={style.formBox}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ marginLeft: "10px" }}> </Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={this.handleChange("from")}
              value={from}
              className={style.formBox}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label style={{ marginLeft: "10px" }}></Form.Label>
            <Form.Control
              as="select"
              title="Subject"
              value={text}
              placeholder=""
              onChange={this.handleChange("subject")}
              className={style.formBox}
            >
              <option>Please Select a Subject...</option>
              <option>General Inquiry</option>
              <option>
                I would like to learn more about Black Tech Philly
              </option>
              <option>
                I would like to be invited to the Black Tech Philly Slack
                channel
              </option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              placeholder="additional message...(optional)"
              onChange={this.handleChange("text")}
              value={subject}
              className={style.formBox}
            />
          </Form.Group>
          <Button
            className={style.submitButton}
            size="lg"
            type="Send"
            style={{}}
            onClick={this.submit}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );

  render() {
    const { name, from, subject, text } = this.state;
    if (this.state.confirmSent === false) {
      return <div>{this.contactForm(name, from, subject, text)}</div>;
    } else if (this.state.confirmSent === true) {
      return (
        <div className={style.formMain}>
          <h2> Thank you!</h2>
          <p
            style={{
              fontSize: "20px",
              fontFamily: "Eina01-Regular",
            }}
          >
            Thank you for your message. We'll be in touch very soon!
          </p>
        </div>
      );
    }
  }
}
export default MemberForm;
