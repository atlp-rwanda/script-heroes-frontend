import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Spinner,
} from "reactstrap";
import Alert from "../commons/Alert";
import styles from "./signup.module.scss";

/**
 * Represenst signup form component
 *
 * @SignupForm
 *
 * @param {error} error - error from the inputs
 * @param {response} response - Response from the server
 * @param {loading} loading - Redux action to set or unset loading state
 * @param {signupAction} action - Dispatching action for sending data to the server
 * @param {errorSetting} action - Dispatching action for seting errors
 * @param {user} user - Object to contain all users data from inputs:
 *  - first name
 *  - last name
 *  - email
 *  - phone number
 *  - password
 *  - confirmation of the password
 */

const Signup = ({ error, response, loading, signupAction, errorSetting }) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState(null);
  const [color, setColor] = useState("");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      confirmPassword,
    } = user;
    const nameFormat = /^[a-z]{2}([a-z][\W]*)/i;
    const emailFormat = /^[a-z][\w-\.]*\@[a-z]+\.[a-z]{2,3}$/;
    const phoneFormat = /^(\+\d{1,2})?[0][1-9]\d{8}$/;
    const passwordFormat = /^[a-z]{4,}\d+/i;
    if (!nameFormat.test(firstName) || !nameFormat.test(lastName)) {
      errorSetting(
        "Please enter a valid name for both first name or last name"
      );
      setUser((user) => ({ ...user, password: "", confirmPassword: "" }));
    } else if (!emailFormat.test(email)) {
      errorSetting('Your email should be valid; example: "email@example.com"');
      setUser((user) => ({ ...user, password: "", confirmPassword: "" }));
    } else if (!phoneFormat.test(phoneNumber)) {
      errorSetting(
        'Your phone number should be valid; example: "+250780000000"'
      );
      setUser((user) => ({ ...user, password: "", confirmPassword: "" }));
    } else if (!passwordFormat.test(password)) {
      errorSetting(
        "Password must be at least 5 characters including 4 letters and numbers"
      );
      setUser((user) => ({ ...user, password: "", confirmPassword: "" }));
    } else if (password !== confirmPassword) {
      errorSetting("Passwords don't match");
      setUser((user) => ({ ...user, password: "", confirmPassword: "" }));
    } else {
      signupAction({ firstName, lastName, phoneNumber, email, password });
    }
  };

  useEffect(() => {
    if (error) {
      setMessage(error);
      setVisible(true);
      setUser((user) => ({ ...user, password: "", confirmPassword: "" }));
      setColor("danger");
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    }
    if (response) {
      setMessage(`${response}, Verification email has sent to your inbox`);
      setVisible(true);
      setColor("info");
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      });
      setTimeout(() => {
        window.location = "./login";
      }, 5000);
    }
  }, [error, response]);

  return (
    <Form onSubmit={handleSubmit} className={styles.SignupForm}>
      <h1>Create an Account</h1>
      <p>The world is a book and those who don't travel read only one page</p>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="John"
              value={user.firstName}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="lastName">Last name</Label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Doe"
              value={user.lastName}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="example@email.com"
              value={user.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="phoneNumber">Phone number</Label>
            <Input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="(+250)780 000 000"
              value={user.phoneNumber}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="confirmPassword">Confirm your password</Label>
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Password"
              value={user.confirmPassword}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>
      </Row>
      <div className={styles.Response}>
        {loading && <Spinner color="secondary" />}
        <Alert message={message} isOpen={visible} color={color} />
      </div>
      <Row className={styles.Button}>
        <Col md={6}>
          <Button style={{ width: "100%" }}>Sign up</Button>
        </Col>
        <Col md={6} className={styles.Link}>
          Already have an account? <Link to="./login">Login</Link>
        </Col>
      </Row>
    </Form>
  );
};

export default Signup;
