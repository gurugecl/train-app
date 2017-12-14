import React from 'react';
import { shallow } from 'enzyme';
import LightingDial from 'src/containers/LightingDial';

describe('LightingDial', () => {
    const LightingDial = shallow(<LightingDial />);

    it('renders the component placeholder text' , () => {
        expect(LightingDial.find('h1').text()).toEqual('Lighting Dial')
    });

});