import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Build from 'Build';

describe('Build', () => {
    const build = shallow(<Build />);

    it('renders the Build component', () => {
        expect(build.find('h1').text()).toEqual('Build ')
    });

});