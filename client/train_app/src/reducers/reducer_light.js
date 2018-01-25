import { LIGHT_SELECTED, LIGHT_VALUE } from '../constants';

const initialLightStatus = 'Auto';
const initialLightValue = 50;

export const LightStatusReducer = (state = initialLightStatus, action) => {
  switch (action.type) {
    case LIGHT_SELECTED:
      return action.payload;
    // this should not be action.payload because it returns all the state
    default:
      return state;
  }
};

export const LightValueReducer = (state = initialLightValue, action) => {
  switch (action.type) {
    case LIGHT_VALUE:
      return action.payload;
    // this should not be action.payload because it returns all the state
    default:
      return state;
  }
};
