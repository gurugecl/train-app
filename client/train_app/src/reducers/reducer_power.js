import { POWER_VALUE } from '../constants';

const initialPowerValue = 0;

export const PowerValueReducer = (state = initialPowerValue, action) => {
    switch (action.type) {
        case POWER_VALUE:
            return action.payload;
        // this should not be action.payload because it returns all the state
        default:
            return state;
    }
};