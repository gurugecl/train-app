import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from 'src/components/Home';

// it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<App />, div);
// });

describe('App', () => {
    const app = shallow(<App />);

    it('renders the `Train WebApp` title', () => {
        expect(app.find('h1').text()).toEqual('Welcome to The Train WebApp')
    });

    // it('renders the StackList', () => {
    //     expect(app.find('Connect(StackList)').exists()).toBe(true);
    // });
    //
    // it('renders a link to create new stacks', () => {
    //     expect(app.find('Link h4').text()).toEqual('Create a New Stack');
    // });
});