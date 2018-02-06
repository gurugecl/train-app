//redcuer setup for redux-easy

import {addReducer} from 'redux-easy';

//Light dial reducer
addReducer('setLight', (state, lightLevel) => {
    const {light} = state;
    return {...state, light: {...light, lightLevel}};
});

//Power Dial reducer
addReducer('setPower', (state, powerLevel) => {
    const {power} = state;
    return {...state, power: {...power, powerLevel}};
});

//Data DB Reducers
addReducer('setDBProfile', (state, profileValue) => {
    const {profileDB} = state;
    return {...state, profileDB: {...profileDB, profileValue}};
});

addReducer('setDBLight', (state, lightValue) => {
    const {lightDB} = state;
    return {...state, lightDB: {...lightDB, lightValue}};
});

addReducer('setDBVoltage', (state, voltageValue) => {
    const {voltageDB = state;
    return {...state, voltageDB: {...voltageDB, voltageValue}};
});