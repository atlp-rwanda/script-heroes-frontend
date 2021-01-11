import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { createAccommodation } from "../../../redux/actions/accommodation";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Table,
  Alert,
  Spinner,
  Container,
} from "reactstrap";

import "./accommodations.scss";

const isValid = ({ target }) => {
  if (target.value.length < 1) {
    target.classList.add("is-invalid");
    target.classList.remove("is-valid");
  } else {
    target.classList.remove("is-invalid");
    target.classList.add("is-valid");
  }
};

const AccommodationPage = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState(null);
  const [color, setColor] = useState("");
  const [loading, setLoading] = useState(false);
  const [saveButton, setButton] = useState(true);
  const [accommodation, SetAccommodation] = useState({
    facilityName: "",
    locationId: null,
    description: "",
    roomType: "",
    photoUrl: "https://picsum.photos/id/1/200/300",
  });

  const dispatch = useDispatch();
  const { error, response } = useSelector((state) => state.accommodation);
  const locations = useSelector((state) => state.locations.locations);

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetAccommodation((accommodation) => ({ ...accommodation, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(createAccommodation(accommodation));
  };

  useEffect(() => {
    if (response) {
      setLoading(false);
      setMessage(response.message);
      setButton(false);
      setVisible(true);
      setColor("success");
      setTimeout(() => {
        setVisible(false);
        setButton(true);
        window.location = "./";
      }, 5000);
    }
    if (error) {
      console.log(error.data);
      setLoading(false);
      setMessage(error.data.error);
      setButton(false);
      setVisible(true);
      setColor("danger");
      setTimeout(() => {
        setVisible(false);
        setButton(true);
      }, 5000);
    }
  }, [error, response, dispatch]);

  return (
    <Container fluid="xs" className="content">
      <Row>
        <Col md="3" className="left-nav-bar">
          <center>
            <Form className="seach-form">
              <FormGroup>
                <input
                  type="search"
                  placeholder="&#xf002;"
                  className="search-input"
                />
              </FormGroup>
            </Form>

            <div className="manage">
              <span>Manage Accommodation</span>
              <br></br>
              <span>Manage Trips</span>
            </div>
            <br />
            <Link
              className="nav-link text-warning ml-4"
              to="/accommodation/view"
            >
              View&nbsp; Accommodation
            </Link>
          </center>
        </Col>
        <Col md="" className="accommodationForm">
          <h4>Add Accommodation</h4>
          <center>
            <Form className="accommodation-input-form" onSubmit={handleSubmit}>
              <FormGroup>
                <Label className="align-left">Facility Name</Label>
                <Input
                  className="input"
                  onBlur={isValid}
                  type="text"
                  value={accommodation.facilityName}
                  name="facilityName"
                  id="facilityName"
                  onChange={handleChange}
                  required
                />
                <p className="invalid-feedback">This field is required</p>
              </FormGroup>
              <FormGroup>
                <Label className="align-left" for="exampleSelect">
                  Location
                </Label>
                <Input
                  className="input"
                  onBlur={isValid}
                  type="select"
                  name="locationId"
                  onChange={handleChange}
                  value={accommodation.locationId}
                  id="locationId"
                >
                  {locations.map((location, index) => (
                    <option value={location.id} key={location.id}>
                      {location.country}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label className="align-left">Description</Label>
                <Input
                  className="input"
                  onBlur={isValid}
                  type="text"
                  value={accommodation.description}
                  name="description"
                  id="facilityName"
                  onChange={handleChange}
                  required
                />
                <p className="invalid-feedback">This field is required</p>
              </FormGroup>
              <FormGroup>
                <Label className="align-left" for="exampleSelect">
                  Room Type
                </Label>
                <Input
                  className="input"
                  onBlur={isValid}
                  type="select"
                  name="roomType"
                  value={accommodation.roomType}
                  onChange={handleChange}
                  id="roomType"
                >
                  <option>Classic</option>
                  <option>Ordinary</option>
                </Input>
                <p className="invalid-feedback">Room is required</p>
              </FormGroup>
              <FormGroup>
                <Table borderless>
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td>
                        <Label className="align-left">Image</Label>
                      </td>
                      <td>
                        <Input
                          className="input"
                          type="file"
                          onChange={handleChange}
                          id="photoUrl"
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </FormGroup>
              <div className="response">
                {loading && <Spinner color="primary" />}
                <Alert isOpen={visible} color={color}>
                  {message}
                </Alert>
              </div>
              {saveButton && !loading && (
                <Button className="btn-submit" type="submit">
                  Save
                </Button>
              )}
            </Form>
          </center>
        </Col>
      </Row>
    </Container>
  );
};
export default AccommodationPage;
