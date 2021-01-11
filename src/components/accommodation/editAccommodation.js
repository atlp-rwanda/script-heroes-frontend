import React, { useEffect, useState } from "react";
import {
  getAccommodation,
  deleteAccommodation,
  updateAccommodation,
} from "../../../redux/actions/accommodation";
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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
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

const UpdateAccomodationsPage = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [facilityName, setFacilityName] = useState("");
  const [locationId, setLocationId] = useState(null);
  const [description, setDescription] = useState("");
  const [roomType, setRoomType] = useState("");
  const [photoUrl, setPhotoUrl] = useState(
    "https://picsum.photos/id/1/200/300"
  );

  const [accomId, setAccomId] = useState(null);
  const onDismiss = () => {
    setMessage("");
    setVisible(false);
  };

  const { deleted, deleteErr, updated, updateErr } = useSelector(
    (state) => state.accommodation
  );
  const locations = useSelector((state) => state.locations.locations);

  const [modal, setModal] = useState(false);

  const updateAccomModel = (data, e) => {
    setFacilityName(data.facilityName);
    setLocationId(data.locationId);
    setDescription(data.description);
    setRoomType(data.roomType);
    setAccomId(data.id);
    setModal(!modal);
  };

  const dispatch = useDispatch();
  const accomodationsObj = useSelector(
    (state) => state.accommodation.accomodationsObj
  );

  const deleteAccom = (id, e) => {
    setLoading(true);
    dispatch(deleteAccommodation(id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModal(!modal);
    const accData = {
      facilityName: facilityName,
      locationId: locationId,
      roomType: roomType,
      description: description,
      photoUrl: photoUrl,
    };
    setLoading(true);
    dispatch(updateAccommodation(accData, accomId));
  };

  useEffect(() => {
    if (updated) {
      setLoading(false);
      setVisible(true);
      setMessage(updated);
      dispatch(getAccommodation());
    }
    if (updateErr) {
      setLoading(false);
      setVisible(true);
      setMessage(updateErr.message);
    }
    if (deleted) {
      setLoading(false);
      setVisible(true);
      setMessage(deleted.message);
      dispatch(getAccommodation());
    }
    if (deleteErr) {
      setLoading(false);
      setVisible(true);
      setLoading(false);
      setMessage(deleteErr.message);
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
            </Form>

            <div className="manage">
              <span>Manage Accommodation</span>
              <br></br>
              <span>Manage Trips</span>
            </div>
            <br />
          </center>
        </Col>
        <Col className="get-all-accommodations">
          <Table striped>
            <thead>
              <tr>
                <th>Facility Name</th>
                <th>Location</th>
                <th>Description</th>
                <th colSpan="">Room Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {accomodationsObj.map((accom, index) => (
                <tr key={accom.id}>
                  <th scope="row">{accom.facilityName}</th>
                  <td>{accom.locations.country}</td>
                  <td>{accom.description}</td>

                  {accom.rooms?.map((room) => (
                    <td key={room.id}>{room.roomType}</td>
                  ))}
                  <td>
                    <button
                      className="btn-update"
                      onClick={(e) => updateAccomModel(accom, e)}
                    >
                      Update
                    </button>
                    <button
                      className="btn-delete"
                      onClick={(e) => deleteAccom(accom.id, e)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <center>
            <Alert isOpen={visible} color="info" toggle={onDismiss}>
              {message}
            </Alert>
            {loading && <Spinner color="primary" />}

            <div className="update-accom-modal">
              <Modal isOpen={modal} toggle={updateAccomModel}>
                <ModalHeader toggle={updateAccomModel}>
                  Edit Accommodation
                </ModalHeader>
                <ModalBody>
                  <Form onSubmit={handleSubmit} id="FormUpdate">
                    <FormGroup>
                      <Input
                        className="input"
                        onBlur={isValid}
                        type="text"
                        value={facilityName}
                        name="facilityName"
                        id="facilityName"
                        onChange={({ target }) => setFacilityName(target.value)}
                        required
                      />
                      <p className="invalid-feedback">
                        Facility Name is required
                      </p>
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
                        value={locationId}
                        onChange={({ target }) => setLocationId(target.value)}
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
                        value={description}
                        name="description"
                        onChange={({ target }) => setDescription(target.value)}
                        id="description"
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
                        value={roomType}
                        onChange={({ target }) => setRoomType(target.value)}
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
                                id="photoUrl"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </FormGroup>
                  </Form>
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={updateAccomModel}>
                    Cancel
                  </Button>
                  <Button color="primary" form="FormUpdate" type="submit">
                    Update
                  </Button>{" "}
                </ModalFooter>
              </Modal>
            </div>
          </center>
        </Col>
      </Row>
    </Container>
  );
};

export default UpdateAccomodationsPage;
