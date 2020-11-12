import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { useDispatch, useSelector } from 'react-redux';

import ViewProfile from '../../../../components/profile/View';

const mockDispatch = jest.fn();
const mockSelector = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: () => mockSelector,
  useDispatch: () => mockDispatch,
}));

describe('<ViewProfile/>', () => {
  let wrapper;
  beforeEach(() => {
    act(() => {
      wrapper = mount(<ViewProfile />);
    });
  });
  it('Should render with no errors', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Should render a link', () => {
    expect(wrapper.text().includes('COMPLETE')).toBe(true);
  });
});
