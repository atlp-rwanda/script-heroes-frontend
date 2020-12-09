import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import Login from '../../components/Login';

describe('Footer', () => {
  it('Should match snapshot', () => {
    const wrapper = shallow(<Login />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
