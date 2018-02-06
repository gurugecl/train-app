// import React from 'react';
// import { shallow } from 'enzyme';
// import PowerDial from 'src/containers/PowerDial';
//
// describe('PowerDial', () => {
//   const PowerDial = shallow(<PowerDial />);
//
//   it('renders the component placeholder text', () => {
//     expect(PowerDial.find('h1').text()).toEqual('Power');
//   });
// });

import React from 'react';
import { reduxSetup } from 'redux-easy';

const initialState = {
    power: { powerLevel: 0 },
};

describe('PowerDial', () => {
    test('handle powerLevel change', () => {
        const store = reduxSetup({ initialState, mock: true });
        const jsx = (
            <Provider store={store}>
                <Login />
            </Provider>
        );
        const wrapper = mount(jsx);
        const powerLevelInput = wrapper.find('.power-level-input');

        const powerLevel = 50;
        powerLevelInput.simulate('change', { target: { value: powerLevel } });

        const actions = store.getActions();
        expect(actions.length).toBe(1);

        const [action] = actions;
        expect(action.type).toBe('setPowerLevel');
        expect(action.payload).toBe(powerLevel);
    });
});