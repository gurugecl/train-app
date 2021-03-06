import { LIGHT_SELECTED, LIGHT_VALUE } from '../constants';

export const selectLightStatus = lightStatus => {
  return {
    type: LIGHT_SELECTED,
    payload: lightStatus,
  };
};

export const selectLightValue = lightValue => {
  return {
    type: LIGHT_VALUE,
    payload: lightValue,
  };
};
