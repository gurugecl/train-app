import { SPEED_SELECTED } from '../constants';

export const selectSpeed = (speedStatus)=> {
    console.log("Speed switched to " + speedStatus);
    return {
        type: SPEED_SELECTED,
        payload: speedStatus
    }
};