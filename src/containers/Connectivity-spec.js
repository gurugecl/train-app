import React from 'react';
import { shallow } from 'enzyme';
import Connectivity from 'src/containers/Connectivity';

describe('Connectivity', () => {
    const Connectivity = shallow(<Connectivity />);

    it('renders the component placeholder text' , () => {
        expect(Connectivity.find('h1').text()).toEqual('Connectivity')
    });

});