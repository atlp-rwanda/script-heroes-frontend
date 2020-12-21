import React, { useState, useEffect } from "react";
import image from "../../../Assets/reset.png";
import "./reset.scss";
import { useDispatch, useSelector } from "react-redux";
import { resetAction } from "../../../redux/actions/resetPassword";
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
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;

function ResetPassword() {
  //Create states
  const token = useParams();
  const dispatch = useDispatch();
  const [visibility2, setVisibility2] = useState("password");
  const [visibility, setVisibility] = useState("password");
  
  const togglePasswordVisiblity = () => {
    if (visibility == "password") {
      setVisibility("text");
    } else {
      setVisibility("password");
    }
  };
  const togglePasswordVisiblity2 = () => {
    if (visibility2 == "password") {
      setVisibility2("text");
    } else {
      setVisibility2("password");
    }
  };
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState("");

  //Add function to dispatch data when submitted and make input an object
  const handleSubmit = (e) => {
    const newPassword = { password };
    const newConfirm = { confirmPassword };
    e.preventDefault();
    if (!(password && confirmPassword))  {
      setMessage(error);
    }
    if (password != confirmPassword) {
      setMessage('Passwords do not match')
      setVisible("true");
      setColor("danger");
    };
    dispatch(resetAction({ token, password, confirmPassword }));
  };

  //Get data from API
  const error = useSelector((state) => state.resetPassword.err);
  const response = useSelector((state) => state.resetPassword.message);
  const loading = useSelector((state) => state.resetPassword.loading);

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
        window.location = "../login";
      }, 3000);
    }
  }, [error, response]);

  return (
    <Container fluid>
      {/* <Navigation /> */}
      <div className="resetPassword">
        <Row>
          <Col md="6">
            <Form id="resetForm" onSubmit={handleSubmit}>
              <center>
                <h1>Reset Password</h1>
              </center>
              <div className="resetContainer">
                <Label>New Password</Label>
                <br></br>
                <div className="passwordInput">
                  <Input
                    type={visibility}
                    placeholder="Enter your new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></Input>
                  <i onClick={togglePasswordVisiblity}>{eye}</i>
                </div>
                <br></br>
                <label>Confirm Password</label>
                <br></br>
                <div className="passwordInput">
                  <Input
                    type={visibility2}
                    placeholder="Repeat your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  ></Input>
                  <i id = 'myEye' onClick={togglePasswordVisiblity2}>{eye}</i>
                </div>
                <center>
                  <div id="response">
                    {loading && <Spinner color="primary" />}
                  </div>
                  <Alert isOpen={visible} color={color}>
                    {message}
                  </Alert>
                  <Button type="submit" id="resetBtn">
                    Reset
                  </Button>
                </center>
              </div>
            </Form>
          </Col>
          <Col md="6">
            <img className="resetImg" src={image} alt="image"></img>
          </Col>
        </Row>
      </div>
      {/* <Footer /> */}
    </Container>
  );
}

export default ResetPassword;
