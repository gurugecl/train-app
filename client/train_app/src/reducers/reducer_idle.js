import { IDLE_VALUE } from '../constants';

const initialIdleValue = 50;

export const IdleValueReducer = (state = initialIdleValue, action) => {
  switch (action.type) {
    case IDLE_VALUE:
      return action.payload;
    // this should not be action.payload because it returns all the state
    default:
      return state;
  }
};
