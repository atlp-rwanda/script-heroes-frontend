import React, { useEffect } from 'react';
import { Table, Row, Col, Container } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile } from '../../../../redux/actions/profile';
import PropTypes from 'prop-types';

import '../style.scss';

const View = () => {
  /**
   * Component for showing details of the user.
   *
   * @viewprofilecomponent
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
   *   <ViewProfile />
   * )
   */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const profile = useSelector((state) => state.profile.profile);
  const {
    id,
    firstName,
    lastName,
    email,
    phoneNumber,
    gender,
    birthdate,
    language,
    currency,
    country,
    department,
    linemanager,
  } = profile;
  const date = new Date(birthdate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const profileInfo = (
    <Row className=''>
      <Col md='6'>
        <Table borderless>
          <tbody>
            <tr>
              <td className='text-uppercase text-color'>
                <i className='fas fa-user mr-3 text-color'></i>FIRST NAME:
              </td>
              <td className='text-capitalize'>{firstName}</td>
            </tr>
            <tr>
              <td className='text-uppercase text-color'>
                <i className='fas fa-user mr-3 text-color'></i>last NAME:
              </td>
              <td className='text-capitalize'>{lastName}</td>
            </tr>
            <tr>
              <td className='text-uppercase text-color'>
                <i className='fas fa-envelope mr-3 text-color'></i>email:
              </td>
              <td>{email}</td>
            </tr>
            <tr>
              <td className='text-uppercase text-color'>
                <i className='fas fa-transgender mr-3 text-color'></i>gender:
              </td>
              <td className='text-capitalize'>{gender}</td>
            </tr>
            <tr>
              <td className='text-uppercase text-color'>
                <i className='fas fa-calendar-day mr-3 text-color'></i>Date of
                birth:
              </td>
              <td className='text-capitalize'>
                {new Date(birthdate).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </td>
            </tr>
            <tr>
              <td className='text-uppercase text-color'>
                <i className='fas fa-phone-alt mr-3 text-color'></i>Phone
                number:
              </td>
              <td className='text-capitalize'>{phoneNumber}</td>
            </tr>
          </tbody>
        </Table>
      </Col>
      <Col md='6'>
        <Table borderless>
          <tbody>
            <tr>
              <td className='text-uppercase text-color'>
                <i className='fas fa-flag mr-3 text-color'></i>country of
                residence:
              </td>
              <td className='text-capitalize'>{country}</td>
            </tr>
            <tr>
              <td className='text-uppercase text-color'>
                <i className='fas fa-coins mr-3 text-color'></i>currency:
              </td>
              <td className='text-capitalize'>{currency}</td>
            </tr>
            <tr>
              <td className='text-uppercase text-color'>
                <i className='fas fa-language mr-3 text-color'></i>language:
              </td>
              <td className='text-capitalize'>{language}</td>
            </tr>
            <tr>
              <td className='text-uppercase text-color'>
                <i className='fas fa-building mr-3 text-color'></i>department:
              </td>
              <td className='text-capitalize'>{department}</td>
            </tr>
            <tr>
              <td className='text-uppercase text-color'>
                <i className='fas fa-user-edit mr-3 text-color'></i>line
                manager:
              </td>
              <td className='text-capitalize'>{linemanager}</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
  return (
    <Container className='background height text-color'>
      <h3 className='text-center mb-2'>Profile Information</h3>
      {profileInfo}
      {!linemanager || !gender || !department ? (
        <a
          href={`/profile/complete/${id}`}
          className='float-right text-color none m-1'
        >
          <strong> COMPLETE </strong>
        </a>
      ) : (
        <a
          href={`/profile/update/${id}`}
          className='float-right text-color none m-1'
        >
          <strong> UPDATE </strong>
        </a>
      )}
    </Container>
  );
};
View.propTypes = {
  profile: PropTypes.object,
  getProfile: PropTypes.func,
};

export default View;
