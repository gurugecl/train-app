import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Pics from 'Pics';

describe('Pics', () => {
  const pics = shallow(<Pics />);

  it('renders the Pics component', () => {
    expect(pics.find('h1').text()).toEqual('Pictures');
  });
});
