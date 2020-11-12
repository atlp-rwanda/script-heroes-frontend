import React, { useEffect } from 'react';
import { Table, Row, Col } from 'reactstrap';
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
    <Row>
      <Col md='6'>
        <Table borderless>
          <thead>
            <tr>
              <td className='text-color'>
                <i className='fas fa-user mr-3 text-color'></i>FIRST NAME:
              </td>
              <td>{firstName}</td>
            </tr>
            <tr>
              <td className='text-color'>
                <i className='fas fa-user mr-3 text-color'></i>LAST NAME:
              </td>
              <td>{lastName}</td>
            </tr>
            <tr>
              <td className='text-color'>
                <i className='fas fa-envelope mr-3 text-color'></i>EMAIL:
              </td>
              <td>{email}</td>
            </tr>
            <tr>
              <td className='text-color'>
                <i className='fas fa-transgender mr-3 text-color'></i>
                GENDER:
              </td>
              <td>{gender}</td>
            </tr>
            <tr>
              <td className='text-color'>
                <i className='fas fa-calendar-day mr-3 text-color'></i>DATE OF
                BIRTH:
              </td>
              <td>{date}</td>
            </tr>
            <tr>
              <td className='text-color'>
                <i className='fas fa-phone-alt mr-3 text-color'></i>PHONE
                NUMBER:
              </td>
              <td>{phoneNumber}</td>
            </tr>
          </thead>
        </Table>
      </Col>
      <Col md='6'>
        <Table borderless>
          <thead>
            <tr>
              <td className='text-color'>
                <i className='fas fa-flag mr-3 text-color'></i>COUNTRY OF
                RESIDENCE:
              </td>
              <td>{country}</td>
            </tr>
            <tr>
              <td className='text-color'>
                <i className='fas fa-coins mr-3 text-color'></i>CURRENCY:
              </td>
              <td>{currency}</td>
            </tr>
            <tr>
              <td className='text-color'>
                <i className='fas fa-language mr-3 text-color'></i>LANGUAGE:
              </td>
              <td>{language}</td>
            </tr>
            <tr>
              <td className='text-color'>
                <i className='fas fa-building mr-3 text-color'></i>
                DEPARTMENT:
              </td>
              <td>{department}</td>
            </tr>
            <tr>
              <td className='text-color'>
                <i className='fas fa-user-edit mr-3 text-color'></i>LINE
                MANAGER:
              </td>
              <td>{linemanager}</td>
            </tr>
          </thead>
        </Table>
      </Col>
    </Row>
  );
  return (
    <div className='background clearfix mt-5 height'>
      <h1 className='text-center text-color mb-5'>Profile Information</h1>
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
    </div>
  );
};
View.propTypes = {
  profile: PropTypes.object,
  getProfile: PropTypes.func,
};

export default View;
