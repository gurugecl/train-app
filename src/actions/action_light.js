import { LIGHT_SELECTED } from '../constants';

export const selectLight = (lightStatus)=> {
    console.log("Light switched to " + lightStatus);
    return {
        type: LIGHT_SELECTED,
        payload: lightStatus
    }
};