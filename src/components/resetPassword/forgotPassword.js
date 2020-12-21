import React, { useState, useEffect } from "react";
import image from "../../../Assets/forgot.png";
import "./reset.scss";
import { useDispatch, useSelector } from "react-redux";
import { forgotAction } from "../../../redux/actions/forgotPassword";
import "bootstrap/dist/css/bootstrap.min.css";
import Mybutton from "./button";
import {
  Col,
  Button,
  Form,
  Label,
  Input,
  Spinner,
  Alert,
  Container,
  Row,
} from "reactstrap";

const ForgotPassword = () => {
  //Create states
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState("");
  const [email, setEmail] = useState("");

  //Add function to dispatch data when submitted and make input an object
  const handleSubmit = (e) => {
    const newEmail = { email };
    e.preventDefault();
    if (!email) setMessage(error);
    setEmail("");
    dispatch(forgotAction(newEmail));
  };

  //Get data from API
  const error = useSelector((state) => state.forgot.error);
  const response = useSelector((state) => state.forgot.message);
  const loading = useSelector((state) => state.forgot.loading);

  //Add changes incase a state changes
  useEffect(() => {
    if (error) {
      setMessage(error);
      setVisible("true");
      setColor("danger");
    }

    if (response) {
      setMessage(response);
      setVisible("true");
      setColor("success");
      setTimeout(() => {
        window.location = "./forgot/success";
      }, 3000);
    }
  }, [error, response]);

  return (
    <Container fluid>
      <div className="forgotPassword">
        <Row>
          <Col md="6">
            <Form id="forgotForm" onSubmit={handleSubmit}>
              <center>
                <h1>Forgot Password?</h1>
              </center>
              <div className="forgotContainer">
                <Label>Email</Label>
                <Input
                  id="emailinput"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                ></Input>
                <center>
                  <br></br>
                  <div>{loading && <Spinner color="primary" />}</div>
                  <Alert isOpen={visible} color={color}>
                    {message}
                  </Alert>
                  <Mybutton label="Submit"></Mybutton>
                </center>
              </div>
            </Form>
          </Col>
          <Col md="6">
            <img src={image} alt="image"></img>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
const Success = () => {
  return (
    <Container>
      <div className="success">
        <center>
          <Form id="successForm">
            <center>
              <h1>
                Please Click On The Link Sent In Your Email To Reset Your
                Password .
              </h1>
            </center>
          </Form>
        </center>
      </div>
    </Container>
  );
};

export { ForgotPassword, Success };
