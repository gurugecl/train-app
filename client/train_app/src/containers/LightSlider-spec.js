import React from 'react';
import { shallow } from 'enzyme';
import LightSlider from 'src/containers/LightSlider';

describe('LightSlider', () => {
    const LightSlider = shallow(<LightSlider />);

    it('renders the component placeholder text' , () => {
        expect(LightSlider.find('h1').text()).toEqual('Lights')
    });

});