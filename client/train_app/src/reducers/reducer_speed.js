import {SPEED_SELECTED} from "../constants";

const initialSpeed = 0;

export const SpeedReducer = (state = initialSpeed, action) => {
    switch (action.type) {
        case SPEED_SELECTED:
            return action.payload;
        default:
            return state;
    }
};