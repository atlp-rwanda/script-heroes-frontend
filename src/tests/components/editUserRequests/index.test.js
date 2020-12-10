import React from 'react';
import { mount } from 'enzyme';
import { Form, Input } from 'reactstrap';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import UpdateRequest from '../../../components/editUserRequests';
import validate from '../../../components/editUserRequests/validate';

describe('<UpdateRequests/>', () => {
  const initialState = {
    locations: { locations: [] },
    accommodations: { accommodations: [] },
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store;
  let wrapper;
  let preventDefault = jest.fn();
  let state = [
    { name: 'location', value: 'Kigali' },
    { name: 'destination', value: 'Kigali' },
    { name: 'start', value: '01-01-2021' },
    { name: 'end', value: '10-01-2021' },
    { name: 'reason', value: 'Vacation' },
    { name: 'accomodation', value: 'Mariot Hotel' },
  ];
  let testState = {};
  let newState = {
    location: 'Kigali',
    destination: 'Kenya',
    start: '01-01-2021',
    end: '10-01-2021',
    reason: 'Vacation',
    accomodation: 'Mariot Hotel',
  };
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <UpdateRequest />
        </Router>
      </Provider>
    );
  });
  it('Should render without errors', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Should not submit invalid input', () => {
    wrapper.find(Form).at(0).simulate('submit', { preventDefault });
    expect(preventDefault).toBeCalled();
  });
  it('Should test on change', () => {
    let inputs = wrapper.find(Input);
    for (let index = 0; index < inputs.length; index++) {
      inputs.at(index).simulate('change', {
        target: {
          name: state[index].name,
          value: state[index].value,
        },
      });
    }
    wrapper.find(Form).at(0).simulate('submit', { preventDefault });
    expect(preventDefault).toBeCalled();
  });

  it('Should test validation function', () => {
    expect(validate(testState)).toStrictEqual({
      accomodationError: 'Accommodation is required',
      destinationError: 'Destination is required',
      endError: 'End Date is required',
      locationError: 'Location is required',
      reasonError: 'Travel Reason is required',
      startError: 'Start Date is required',
    });
  });
  it('Should test validation function with no errors', () => {
    expect(validate(newState)).toStrictEqual({});
  });
});
