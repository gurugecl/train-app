import { PROFILE_DBDATA, LIGHT_DBDATA, VOLTAGE_DBDATA } from '../constants';

export const profileFromDb = (profileDbValue) => {
    return {
        type: PROFILE_DBDATA,
        payload: profileDbValue
    }
};

export const lightFromDb = (lightDbValue) => {
    return {
        type: LIGHT_DBDATA,
        payload: lightDbValue
    }
};

export const voltageFromDb = (voltageDbValue) => {
    return {
        type: VOLTAGE_DBDATA,
        payload: voltageDbValue
    }
};