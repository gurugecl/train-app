import React from 'react';
import { reduxSetup } from 'redux-easy';
// import { shallow } from 'enzyme';
// import LightingDial from 'src/containers/LightingDial';

const initialState = {
  light: { lightLevel: '' },
};

describe('LightingDial', () => {
  test('handle lightLevel change', () => {
    const store = reduxSetup({ initialState, mock: true });
    const jsx = (
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const wrapper = mount(jsx);
    const lightLevelInput = wrapper.find('.light-level-input');

    const lightLevel = 50;
    lightLevelInput.simulate('change', { target: { value: lightLevel } });

    const actions = store.getActions();
    expect(actions.length).toBe(1);

    const [action] = actions;
    expect(action.type).toBe('setLightLevel');
    expect(action.payload).toBe(lightLevel);
  });
});

// describe('LightingDial', () => {
//   const LightingDial = shallow(<LightingDial />);
//
//   it('renders the component placeholder text', () => {
//     expect(LightingDial.find('h1').text()).toEqual('Lighting');
//   });
// });
