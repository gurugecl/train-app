import React from 'react';
import { shallow } from 'enzyme';
import SpeedSlider from 'src/containers/SpeedSlider';

describe('SpeedSlider', () => {
  const SpeedSlider = shallow(<SpeedSlider />);

  it('renders the component placeholder text', () => {
    expect(SpeedSlider.find('h1').text()).toEqual('Speed');
  });
});
