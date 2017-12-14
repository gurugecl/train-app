import React from 'react';
import { shallow } from 'enzyme';
import CalibrateLight from 'src/containers/CalibrateLight';

describe('CalibrateLight', () => {
    const CalibrateLight = shallow(<CalibrateLight />);

    it('renders the component placeholder text' , () => {
        expect(CalibrateLight.find('h1').text()).toEqual('Light Calibrator')
    });

});