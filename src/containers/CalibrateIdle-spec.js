import React from 'react';
import { shallow } from 'enzyme';
import CalibrateIdle from 'src/containers/CalibrateIdle';

describe('CalibrateIdle', () => {
    const CalibrateIdle = shallow(<CalibrateIdle />);

    it('renders the component placeholder text' , () => {
        expect(CalibrateIdle.find('h1').text()).toEqual('Idle Calibrator')
    });

});