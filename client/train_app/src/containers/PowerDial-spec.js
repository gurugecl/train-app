import React from 'react';
import { shallow } from 'enzyme';
import PowerDial from 'src/containers/PowerDial';

describe('PowerDial', () => {
  const PowerDial = shallow(<PowerDial />);

  it('renders the component placeholder text', () => {
    expect(PowerDial.find('h1').text()).toEqual('Power');
  });
});
