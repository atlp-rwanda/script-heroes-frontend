import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Input,
  Label,
  FormGroup,
  Alert,
} from 'reactstrap';

import './style.scss';
import { getAccommodations } from '../../../redux/actions/accommodations';
import { getLocations } from '../../../redux/actions/locations';
import validate from './validate';

const UpdateRequest = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocations());
  }, []);
  useEffect(() => {
    dispatch(getAccommodations());
  }, []);
  const locations = useSelector((state) => state.locations.locations);
  const accommodations = useSelector(
    (state) => state.accommodations.accommodations
  );

  const [state, setState] = useState({
    location: '',
    destination: '',
    start: '',
    end: '',
    reason: '',
    accomodation: '',
  });
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(state));
    console.log(state);
  };
  const { location, destination, start, end, reason, accomodation } = state;
  const {
    locationError,
    destinationError,
    startError,
    endError,
    reasonError,
    accomodationError,
  } = errors;
  return (
    <Container className='mb-5 p-5'>
      <Form className='mt-5' onSubmit={onSubmit}>
        <h3 className='text-center mt-3 text-color-new'>Update Request</h3>
        <Row className='mt-5 background-new'>
          <Col md='2'>
            <FormGroup>
              <Label>Location</Label>
              <Input
                type='select'
                name='location'
                onChange={onChange}
                value={location}
                className={locationError ? 'border-error' : 'border-success'}
              >
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.city}-{location.country}
                  </option>
                ))}
              </Input>
              {locationError ? (
                <Alert className='alert alert-danger back-none'>
                  {locationError}
                </Alert>
              ) : (
                ''
              )}
            </FormGroup>
          </Col>
          <Col md='2'>
            <FormGroup>
              <Label>Destination</Label>
              <Input
                type='select'
                name='destination'
                onChange={onChange}
                value={destination}
                className={destinationError ? 'border-error' : 'border-success'}
              >
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.city}-{location.country}
                  </option>
                ))}
              </Input>
              {destinationError ? (
                <Alert className='alert alert-danger back-none'>
                  {destinationError}
                </Alert>
              ) : (
                ''
              )}
            </FormGroup>
          </Col>

          <Col md='2'>
            <FormGroup>
              <Label>Start Date</Label>
              <Input
                type='date'
                name='start'
                onChange={onChange}
                value={start}
                className={startError ? 'border-error' : 'border-success'}
              />
              {startError ? (
                <Alert className='alert alert-danger back-none'>
                  {startError}
                </Alert>
              ) : (
                ''
              )}
            </FormGroup>
          </Col>
          <Col md='2'>
            <FormGroup>
              <Label>Return Date</Label>
              <Input
                type='date'
                name='end'
                onChange={onChange}
                value={end}
                className={endError ? 'border-error' : 'border-success'}
              />
              {endError ? (
                <Alert className='alert alert-danger back-none'>
                  {endError}
                </Alert>
              ) : (
                ''
              )}
            </FormGroup>
          </Col>
          <Col md='2'>
            <FormGroup>
              <Label>Travel Reasons</Label>
              <Input
                type='text'
                name='reason'
                onChange={onChange}
                value={reason}
                className={reasonError ? 'border-error' : 'border-success'}
                placeholder='eg: Trip'
              />
              {reasonError ? (
                <Alert className='alert alert-danger back-none'>
                  {reasonError}
                </Alert>
              ) : (
                ''
              )}
            </FormGroup>
          </Col>
          <Col md='2'>
            <FormGroup>
              <Label>Accommodation</Label>
              <Input
                type='select'
                name='accomodation'
                onChange={onChange}
                value={accomodation}
                className={
                  accomodationError ? 'border-error' : 'border-success'
                }
              >
                {accommodations.map((accommodation) => (
                  <option value={accommodation.id} key={accommodation.id}>
                    {accommodation.facilityName}
                  </option>
                ))}
              </Input>
              {accomodationError ? (
                <Alert className='alert alert-danger back-none'>
                  {accomodationError}
                </Alert>
              ) : (
                ''
              )}
            </FormGroup>
          </Col>
        </Row>
        <div className=' text-center mt-3 mb-3'>
          <Button className='btn-color'>SEND</Button>
        </div>
      </Form>
    </Container>
  );
};

export default UpdateRequest;
