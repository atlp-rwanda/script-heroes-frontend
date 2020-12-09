import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Alert,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { updateProfile, getProfile } from '../../../../redux/actions/profile';
import { getLineManagers } from '../../../../redux/actions/profile/linemanager';
import Image from '../Image';

const Update = () => {
  /**
   * Component for showing details of the user.
   *
   * @updateprofilecomponent
   * const firstName = 'Emma'
   * const lastName = 'Dushime'
   * const email = 'dushimeemma@gmail.com'
   * const phoneNumber = '+250789078834'
   * id=1,
   * gender='Male',
   * birthdate='saturday,Saturday, Oct 1, 1994'
   * language= 'Kinyarwanda',
   * currency= 'Rwfs',
   * country='Rwanda',
   * department='IT',
   * linemanager='John Doe',
   * return (
   *   <UpdateProfile />
   * )
   */
  const dispatch = useDispatch();
  const [state, newState] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    gender: '',
    birthdate: '',
    language: '',
    currency: '',
    country: '',
    department: '',
    linemanager: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [backMsg, setBackMsg] = useState('');
  const [getBackErrors, setBackErrors] = useState('');

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getLineManagers());
  }, []);

  const updtProfile = useSelector((state) => state.profile.profile);

  const msg = useSelector((state) => state.profile.msg);

  const backErrors = useSelector((state) => state.profileErrors.error);

  const managers = useSelector((state) => state.linemanager.managers);

  useEffect(() => {
    setBackMsg(msg);
  }, [msg]);

  setTimeout(() => {
    setBackMsg('');
  }, 15000);

  useEffect(() => {
    setBackErrors(backErrors);
  }, [backErrors]);

  setTimeout(() => {
    setBackErrors('');
  }, 15000);

  useEffect(() => {
    if (Object.entries(updtProfile).length !== 0) {
      newState({
        firstName: updtProfile.firstName,
        lastName: updtProfile.lastName,
        phoneNumber: updtProfile.phoneNumber,
        gender: updtProfile.gender,
        birthdate: updtProfile.birthdate,
        language: updtProfile.language,
        currency: updtProfile.currency,
        country: updtProfile.country,
        department: updtProfile.department,
        linemanager: updtProfile.linemanagerId,
      });
    }
  }, [updtProfile]);

  const onChange = (e) => {
    const { name, value } = e.target;
    newState({ ...state, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };
  useEffect(() => {
    if (isSubmitting) {
      dispatch(updateProfile(state));
    }
  }, [isSubmitting]);
  const {
    firstName,
    lastName,
    phoneNumber,
    gender,
    birthdate,
    language,
    currency,
    country,
    department,
    linemanager,
  } = state;
  const profile = (
    <Col md='6' className='p-3 background-form'>
      <h3 className='text-center text-color'>Update Your Profile</h3>
      <Form onSubmit={onSubmit}>
        {backMsg ? (
          <Alert color='success' className='text-center'>
            {backMsg}
          </Alert>
        ) : (
          ''
        )}
        {getBackErrors ? (
          <Alert color='danger' className='text-center'>
            {getBackErrors}
          </Alert>
        ) : (
          ''
        )}
        <Row className='mb-3'>
          <Col md='6'>
            <FormGroup>
              <Label className='text-color'>FIRST NAME</Label>
              <Input
                type='text'
                name='firstName'
                onChange={onChange}
                value={firstName}
              />
            </FormGroup>
            <FormGroup>
              <Label className='text-color'>LAST NAME</Label>
              <Input
                type='text'
                name='lastName'
                onChange={onChange}
                value={lastName}
              />
            </FormGroup>
            <FormGroup>
              <Label className='text-color'>PHONE NUMBER</Label>
              <Input
                type='text'
                name='phoneNumber'
                onChange={onChange}
                value={phoneNumber}
              />
            </FormGroup>
            <FormGroup>
              <Label className='text-color'>GENDER</Label>
              <Input
                type='select'
                name='gender'
                id='gender'
                onChange={onChange}
                value={gender}
              >
                <option>CHOOSE GENDER</option>
                <option value='Male'>MALE</option>
                <option value='Female'>FEMALE</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label className='text-color'>LANGUAGE</Label>
              <Input
                type='select'
                name='language'
                id='language'
                onChange={onChange}
                value={language}
              >
                <option value=''>CHOOSE LANGUAGE</option>
                <option value='ENGLISH'>ENGLISH</option>
                <option value='FRENCH'>FRENCH</option>
                <option value='KINYARWANDA'>KINYARWANDA</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md='6'>
            <FormGroup>
              <Label className='text-color'>COUNTRY OF RESIDENCE</Label>
              <Input
                type='text'
                name='country'
                id='country'
                onChange={onChange}
                value={country}
              />
            </FormGroup>
            <FormGroup>
              <Label className='text-color'>DEPARTMENT</Label>
              <Input
                type='select'
                name='department'
                id='department'
                onChange={onChange}
                value={department}
              >
                <option value=''>CHOOSE DEPARTMENT</option>
                <option value='IT'>IT</option>
                <option value='MANAGER'>MANAGEMENT</option>
                <option value='MARKETING'>MARKETING</option>
                <option value='SUPPLIER'>SUPPLIER</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label className='text-color'>DATE OF BIRTH</Label>
              <Input
                type='text'
                name='birthdate'
                id='birthdate'
                onChange={onChange}
                value={new Date(birthdate).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              />
            </FormGroup>
            <FormGroup>
              <Label className='text-color'>CURRENCY</Label>
              <Input
                type='select'
                name='currency'
                id='currency'
                onChange={onChange}
                value={currency}
              >
                <option>CHOOSE CURRENCY</option>
                <option value='USD'>USD</option>
                <option value='EURO'>EURO</option>
                <option value='RWFS'>RWANDAN FRANCS</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label className='text-color'>LINE MANAGER</Label>
              <Input
                type='select'
                name='linemanager'
                id='linemanager'
                onChange={onChange}
                value={linemanager}
              >
                {managers.map((manager) => (
                  <option
                    value={manager.id}
                    key={manager.id}
                  >{`${manager.firstName} ${manager.lastName}`}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>

        <Button className='float-right btn-save'>UPDATE</Button>
      </Form>
      <a href='/profile' className='btn btn-danger'>
        CANCEL
      </a>
    </Col>
  );
  return (
    <Row className='clearfix  mt-5 height mb-5 pb-5'>
      {profile}
      <Image />
    </Row>
  );
};
Update.propTypes = {
  updtProfile: PropTypes.object,
  updateProfile: PropTypes.func,
  msg: PropTypes.string,
  backErrors: PropTypes.string,
  managers: PropTypes.array,
  getLineManagers: PropTypes.func,
};

export default Update;
