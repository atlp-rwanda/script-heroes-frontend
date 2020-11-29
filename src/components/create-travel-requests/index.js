import React from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "./index.scss";
import Footer from "../Footer";
import Navigation from "../Navigation";

const TravelRequests = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <h2 className="header">Travel Requests</h2>
        <Form className="form">
          <Row form>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">Location</Label>
                <Input type="text" name="location" id="location" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">Destination</Label>
                <Input type="text" name="destination" id="destination" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">Start Date</Label>
                <Input type="date" name="startdate" id="date" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">Return Date</Label>
                <Input type="date" name="Return date" id="date" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">Reason</Label>
                <Input type="text" name="Reason" id="reason" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">Accomodation</Label>
                <Input type="text" name="accomodation" id="acc" />
              </FormGroup>
            </Col>
          </Row>
          <Button className="button">Submit</Button>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default TravelRequests;
