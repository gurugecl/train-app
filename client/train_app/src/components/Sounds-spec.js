import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Sounds from 'Sounds';

describe('Sounds', () => {
  const sounds = shallow(<Sounds />);

  it('renders the Sounds component', () => {
    expect(sounds.find('h1').text()).toEqual('Sounds');
  });
});
