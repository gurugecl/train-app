//redcuer setup for redux-easy

import {addReducer} from 'redux-easy';

addReducer('setLight', (state, lightLevel) => {
    const {light} = state;
    return {...state, power: {...light, lightLevel}};
});