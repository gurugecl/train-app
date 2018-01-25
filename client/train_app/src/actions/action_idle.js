import { IDLE_VALUE } from '../constants';

export const selectIdleValue = idleValue => {
  return {
    type: IDLE_VALUE,
    payload: idleValue,
  };
};
