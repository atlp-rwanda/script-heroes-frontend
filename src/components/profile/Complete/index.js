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
  Container,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { completeProfile } from '../../../../redux/actions/profile';
import { getLineManagers } from '../../../../redux/actions/profile/linemanager';
import Image from '../Image';

const Complete = () => {
  /**
   * Component for showing details of the user.
   *
   * @completeprofilecomponent
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
   *   <CompleteProfile />
   * )
   */
  const msg = useSelector((state) => state.profile.msg);
  const backErrors = useSelector((state) => state.profileErrors.error);
  const managers = useSelector((state) => state.linemanager.managers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLineManagers());
  }, []);

  const [state, newState] = useState({
    gender: '',
    birthdate: '',
    language: '',
    currency: '',
    country: '',
    department: '',
    linemanager: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [backMsg, setBackMsg] = useState('');
  const [getBackErrors, setBackErrors] = useState('');

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

  const validate = (state) => {
    let errors = {};
    if (!state.gender) {
      errors.gender = 'Gender is required';
    }
    if (!state.birthdate) {
      errors.birthdate = 'Date of birth is required';
    }
    if (!state.language) {
      errors.language = 'Language is required';
    }
    if (!state.currency) {
      errors.currency = 'Currency is required';
    }
    if (!state.country) {
      errors.country = 'Country is required';
    }
    if (!state.department) {
      errors.department = 'Department is required';
    }
    if (!state.linemanager) {
      errors.linemanager = 'Line manager is required';
    }
    return errors;
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    newState({ ...state, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(state));
    setIsSubmitting(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      dispatch(completeProfile(state));
      setTimeout(() => {
        newState({
          gender: '',
          birthdate: '',
          language: '',
          currency: '',
          country: '',
          department: '',
          linemanager: '',
        });
      }, 3000);
    }
  }, [errors]);
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
      <h3 className='text-center text-color'>Complete Your Profile</h3>
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
              <Label className='text-color'>GENDER</Label>
              <Input
                type='select'
                name='gender'
                id='gender'
                onChange={onChange}
                value={gender}
                className={errors.gender ? `border-error` : ''}
                placeholder='eg: Male'
              >
                <option value=''>CHOOSE GENDER</option>
                <option value='Male'>MALE</option>
                <option value='Female'>FEMALE</option>
              </Input>

              {errors.gender ? (
                <Alert color='danger' className='back-error'>
                  {errors.gender}
                </Alert>
              ) : (
                ''
              )}
            </FormGroup>
            <FormGroup>
              <Label className='text-color'>LANGUAGE</Label>
              <Input
                type='select'
                name='language'
                id='language'
                onChange={onChange}
                value={language}
                className={errors.gender ? `border-error` : ''}
                placeholder='eg: English'
              >
                <option value=''>CHOOSE LANGUAGE</option>
                <option value='ENGLISH'>ENGLISH</option>
                <option value='FRENCH'>FRENCH</option>
                <option value='KINYARWANDA'>KINYARWANDA</option>
              </Input>
              {errors.language ? (
                <Alert color='danger' className='back-error'>
                  {errors.language}
                </Alert>
              ) : (
                ''
              )}
            </FormGroup>
            <FormGroup>
              <Label className='text-color'>COUNTRY OF RESIDENCE</Label>
              <Input
                type='text'
                name='country'
                id='country'
                onChange={onChange}
                value={country}
                className={errors.gender ? `border-error` : ''}
                placeholder='eg: RWANDA'
              />
              {errors.country ? (
                <Alert color='danger' className='back-error'>
                  {errors.country}
                </Alert>
              ) : (
                ''
              )}
            </FormGroup>
            <FormGroup>
              <Label className='text-color'>DEPARTMENT</Label>
              <Input
                type='select'
                name='department'
                id='department'
                onChange={onChange}
                value={department}
                className={errors.gender ? `border-error` : ''}
              >
                <option value=''>CHOOSE DEPARTMENT</option>
                <option value='IT'>IT</option>
                <option value='TRAVELMANAGER'>TRAVEL MANAGEMENT</option>
                <option value='MARKETING'>MARKETING</option>
                <option value='SUPPLIER'>SUPPLIER</option>
              </Input>
              {errors.department ? (
                <Alert color='danger' className='back-error'>
                  {errors.department}
                </Alert>
              ) : (
                ''
              )}
            </FormGroup>
          </Col>
          <Col md='6'>
            <FormGroup>
              <Label className='text-color'>DATE OF BIRTH</Label>
              <Input
                type='date'
                name='birthdate'
                id='birthdate'
                onChange={onChange}
                value={birthdate}
                className={errors.gender ? `border-error` : ''}
                placeholder='eg: YYYY-MM-DD'
              />
              {errors.birthdate ? (
                <Alert color='danger' className='back-error'>
                  {errors.birthdate}
                </Alert>
              ) : (
                ''
              )}
            </FormGroup>
            <FormGroup>
              <Label className='text-color'>CURRENCY</Label>
              <Input
                type='select'
                name='currency'
                id='currency'
                onChange={onChange}
                value={currency}
                className={errors.gender ? `border-error` : ''}
              >
                <option value=''>CHOOSE CURRENCY</option>
                <option value='USD'>USD</option>
                <option value='EURO'>EURO</option>
                <option value='RWFS'>RWANDAN FRANCS</option>
              </Input>
              {errors.currency ? (
                <Alert color='danger' className='back-error'>
                  {errors.currency}
                </Alert>
              ) : (
                ''
              )}
            </FormGroup>
            <FormGroup>
              <Label className='text-color'>LINE MANAGER</Label>
              <Input
                type='select'
                name='linemanager'
                id='linemanager'
                onChange={onChange}
                value={linemanager}
                className={errors.gender ? `border-error` : ''}
              >
                <option value=''>CHOOSE LINE MANAGER</option>
                {managers.map((manager) => (
                  <option
                    value={manager.id}
                    key={manager.id}
                  >{`${manager.firstName} ${manager.lastName}`}</option>
                ))}
              </Input>
              {errors.linemanager ? (
                <Alert color='danger' className='back-error'>
                  {errors.linemanager}
                </Alert>
              ) : (
                ''
              )}
            </FormGroup>
          </Col>
        </Row>

        <Button className='float-right btn-save'>SAVE</Button>
      </Form>
      <a href='/profile' className='btn btn-secondary'>
        BACK
      </a>
    </Col>
  );
  return (
    <Container>
      <Row className='clearfix mt-5 height mb-5 pb-5'>
        {profile}
        <Image />
      </Row>
    </Container>
  );
};
Complete.propTypes = {
  msg: PropTypes.string,
  backErrors: PropTypes.string,
  managers: PropTypes.array,
  completeProfile: PropTypes.func,
  getLineManagers: PropTypes.func,
};

export default Complete;
