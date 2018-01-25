import { SPEED_SELECTED } from '../constants';

export const selectSpeed = speedValue => {
  return {
    type: SPEED_SELECTED,
    payload: speedValue,
  };
};
