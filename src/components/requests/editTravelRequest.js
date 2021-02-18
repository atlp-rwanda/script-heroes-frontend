import React, { useEffect, useState } from "react";
import DatePicker from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Spinner,
  Alert,
  Table,
  Input,
  Modal,
  ModalHeader,
  ButtonToggle,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "./travelRequest.scss";

import {
  DeleteUserTripRequest,
  GetUserTripRequests,
  UpdateUserTripRequest,
} from "../../../redux/actions/tripRequest";

const isValid = ({ target }) => {
  if (target.value.length < 1) {
    target.classList.add("is-invalid");
    target.classList.remove("is-valid");
  } else {
    target.classList.remove("is-invalid");
    target.classList.add("is-valid");
  }
};

// disable past dates
const yesterday = moment().subtract(1, "day");
const disablePastDt = (current) => {
  return current.isAfter(yesterday);
};

const EditTravelRequest = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState(null);
  const [color, setColor] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const [requestId, setRequestId] = useState(null);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [from, setFrom] = useState("");
  const [till, setTill] = useState("");
  const [accomodationId, setAccomodationId] = useState(null);
  const [travelReasons, setTravelReasons] = useState("");

  const handleStartDate = (e) => {
    let value = moment(e.toDate()).format("YYYY-MM-DD");
    setFrom(value);
  };

  const handleEndDate = (e) => {
    let value = moment(e.toDate()).format("YYYY-MM-DD");
    setTill(value);
  };

  const updateRequestModel = (data, e) => {
    setRequestId(data.id);
    setOrigin(data.origin);
    setDestination(data.destination);
    setFrom(data.from);
    setTill(data.till);
    setTravelReasons(data.travelReasons);
    setAccomodationId(data.accomodationId);
    setModal(!modal);
  };

  const dispatch = useDispatch();
  const { deleted, deleteErr, updated, updateErr } = useSelector(
    (state) => state.tripRequest
  );
  const locations = useSelector((state) => state.locations.locations);
  const accomodationsObj = useSelector(
    (state) => state.accommodation.accomodationsObj
  );
  const requestsObj = useSelector((state) => state.tripRequest.requestsObj);

  const deleteTripRequest = (id, e) => {
    setLoading(true);
    dispatch(DeleteUserTripRequest(id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModal(!modal);
    const data = {
      origin: origin,
      destination: destination,
      from: from,
      till: till,
      accomodationId: accomodationId,
      travelReasons: travelReasons,
    };
    setLoading(true);
    dispatch(UpdateUserTripRequest(data, requestId));
  };

  useEffect(() => {
    if (updated) {
      dispatch(GetUserTripRequests());
      setLoading(false);
      setMessage(updated);
      setVisible(true);
      setColor("success");
      setTimeout(() => {
        setVisible(false);

        //window.location = "/edit-travel-request";
      }, 5000);
    }
    if (updateErr) {
      setLoading(false);
      setMessage(updateErr);
      setVisible(true);
      setColor("danger");
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    }
    if (deleted) {
      dispatch(GetUserTripRequests());
      setLoading(false);
      setMessage(deleted);
      setVisible(true);
      setColor("success");
      setTimeout(() => {
        setVisible(false);
        //window.location = "/edit-travel-request";
      }, 5000);
    }
    if (deleteErr) {
      setLoading(false);
      setMessage(deleteErr);
      setVisible(true);
      setColor("danger");
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    }
  }, [deleted, deleteErr, updated, updateErr, dispatch]);

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
              <h4 className="header">Manage Travel Request</h4>
              <h6>Your Requests appeared here!</h6>
            </Form>
          </center>
        </Col>
        <Col>
          <div>
            <Table striped hover size="sm" responsive>
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Destination</th>
                  <th>Start Date</th>
                  <th>Return Date</th>
                  <th>Reason</th>
                  <th>Accommodation</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {requestsObj.map((request, index) => (
                  <tr>
                    <td>{request.Origin.country}</td>
                    <td>{request.Destination.country}</td>
                    <td>{request.from}</td>
                    <td>{request.till}</td>
                    <td>{request.travelReasons}</td>
                    <td>{request.Accomodation.facilityName}</td>
                    <td>{request.Request.status}</td>
                    <td>
                      <ButtonToggle
                        color="success"
                        className="btn-update btns"
                        onClick={(e) => updateRequestModel(request, e)}
                      >
                        Edit
                      </ButtonToggle>
                      <ButtonToggle
                        color="danger"
                        className="btn-delete btns"
                        onClick={(e) => deleteTripRequest(request.id, e)}
                      >
                        Delete
                      </ButtonToggle>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <center>
              <div className="update-request-modal">
                <Modal isOpen={modal} toggle={updateRequestModel}>
                  <ModalHeader toggle={updateRequestModel}>
                    Edit Trip Request
                  </ModalHeader>
                  <ModalBody>
                    <Form onSubmit={handleSubmit} id="FormUpdate">
                      <FormGroup>
                        <Label className="align-left" for="exampleSelect">
                          Location
                        </Label>
                        <Input
                          className="input"
                          onBlur={isValid}
                          type="select"
                          name="origin"
                          value={origin}
                          onChange={({ target }) => setOrigin(target.value)}
                          id="origin"
                        >
                          {locations.map((location, index) => (
                            <option value={location.id} key={location.id}>
                              {location.country}
                            </option>
                          ))}
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label className="align-left" for="exampleSelect">
                          Destination
                        </Label>
                        <Input
                          className="input"
                          onBlur={isValid}
                          type="select"
                          name="destination"
                          value={destination}
                          onChange={({ target }) =>
                            setDestination(target.value)
                          }
                          id="destination"
                        >
                          {locations.map((location, index) => (
                            <option value={location.id} key={location.id}>
                              {location.country}
                            </option>
                          ))}
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label className="align-left">Start Date</Label>

                        <DatePicker
                          timeFormat={false}
                          dateFormat="DD-MM-YYYY"
                          closeOnSelect={true}
                          initialValue={from}
                          isValidDate={disablePastDt}
                          onChange={handleStartDate}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label className="align-left" for="exampleSelect">
                          Return Date
                        </Label>
                        <DatePicker
                          timeFormat={false}
                          dateFormat="DD-MM-YYYY"
                          closeOnSelect={true}
                          initialValue={till}
                          isValidDate={disablePastDt}
                          onChange={handleEndDate}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label className="align-left" for="exampleSelect">
                          Trip reason
                        </Label>
                        <Input
                          className="input"
                          onBlur={isValid}
                          type="text"
                          value={travelReasons}
                          name="travelReasons"
                          onChange={({ target }) =>
                            setTravelReasons(target.value)
                          }
                          id="travelReasons"
                          required
                        />
                        <p className="invalid-feedback">
                          this field is required
                        </p>
                      </FormGroup>
                      <FormGroup>
                        <Label className="align-left" for="exampleSelect">
                          Accommodation
                        </Label>
                        <Input
                          className="input"
                          onBlur={isValid}
                          type="select"
                          value={accomodationId}
                          name="accomodationId"
                          onChange={({ target }) =>
                            setAccomodationId(target.value)
                          }
                          id="accomodationId"
                          required
                        >
                          {accomodationsObj.map((accom, index) => (
                            <option value={accom.id} key={accom.id}>
                              {accom.facilityName}
                            </option>
                          ))}
                        </Input>
                        <p className="invalid-feedback">
                          this field is required
                        </p>
                      </FormGroup>
                    </Form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={updateRequestModel}>
                      Cancel
                    </Button>
                    <Button color="primary" form="FormUpdate" type="submit">
                      Update
                    </Button>{" "}
                  </ModalFooter>
                </Modal>
              </div>
            </center>

            <center>
              <div className="response">
                {loading && <Spinner color="primary" />}
                <Alert isOpen={visible} color={color}>
                  {message}
                </Alert>
              </div>
            </center>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EditTravelRequest;
