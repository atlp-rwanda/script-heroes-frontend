import React from 'react';
import { shallow } from 'enzyme';

import ProfileImage from '../../../../components/profile/Image';

describe('<ProfileImage/>', () => {
  it('Should render profile image', () => {
    const component = shallow(<ProfileImage />);
    expect(component).toMatchSnapshot();
  });
});
