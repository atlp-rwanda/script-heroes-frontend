import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Spinner,
  Alert,
  Container,
  Row,
} from "reactstrap";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
import loginImage from "../../src/assets/img/loginImage.png";

import "./Login.scss";

const Login = ({ error, response, loading, loginAuthAction, errorSetting }) => {
  const [visible, setVisible] = useState(false);
  const [loginButton, setButton] = useState(true);
  const [message, setMessage] = useState(null);
  const [color, setColor] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;
    const emailFormat = /^[a-z][\w-\.]*\@[a-z]+\.[a-z]{2,3}$/;
    const passwordFormat = /^[a-z]{4,}\d+/i;

    if (!emailFormat.test(email)) {
      errorSetting('Your email should be valid; example: "email@example.com"');
    } else if (!password) {
      errorSetting("Passwords can't be empty");
    } else if (!passwordFormat.test(password)) {
      errorSetting(
        "Password must be at least 5 characters including 4 letters and numbers"
      );
    } else {
      loginAuthAction({ email, password });
    }
  };

  useEffect(() => {
    if (error) {
      setMessage(error);
      setVisible(true);
      setButton(false);
      setColor("danger");
      setTimeout(() => {
        setVisible(false);
        setButton(true);
      }, 5000);
    }
    if (response) {
      setMessage(response);
      setVisible(true);
      setButton(false);
      setColor("success");
      setTimeout(() => {
        setVisible(false);
        window.location = "./";
      }, 5000);
    }
  }, [error, response]);

  return (
    <Router>
      <Container className="container-login">
        <Row>
          <Col md="6">
            <h2>Make Your Tour Amazing With Us</h2>
            <img src={loginImage} alt="Login Image" className="login_image" />
          </Col>
          <Col md="6" className="login">
            <h2 className="sub_title">Sign In</h2>

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="exampleInputEmail1">Email</Label>

                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="exampleInputPassword1">Password</Label>

                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <Col md={6}>
                <Link to="./forgot-password">Forgot Password</Link>
              </Col>

              <center>
                <div className="response">
                  {loading && <Spinner color="secondary" />}
                  <Alert isOpen={visible} color={color}>
                    {message}
                  </Alert>
                </div>
                {loginButton && !loading && (
                  <Button type="submit">Sign in</Button>
                )}
              </center>
            </Form>

            <center>
              <div className="form_part">
                <button>Sign in With Facebook</button>
                <button>Sign in With Google</button>
              </div>
            </center>
            <Col md={10}>
              Dont have an account yet ? <Link to="/signup">Register</Link>
            </Col>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
};

export default Login;
