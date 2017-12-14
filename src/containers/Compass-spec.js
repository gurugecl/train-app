import React from 'react';
import { shallow } from 'enzyme';
import Compass from 'src/containers/Compass';

describe('Compass', () => {
    const Compass = shallow(<Compass />);

    it('renders the component placeholder text' , () => {
        expect(Compass.find('h1').text()).toEqual('Compass')
    });

});