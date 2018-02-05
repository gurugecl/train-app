import { PROFILE_DBDATA } from '../constants';
import { LIGHT_DBDATA } from '../constants';
import { VOLTAGE_DBDATA } from '../constants';

const initialProfileData = [];
const initialVoltageData = [];
const initialLightData = [];

export const ProfileDbReducer = (state = initialProfileData, action) => {
  switch (action.type) {
      case PROFILE_DBDATA:
      console.log('Profile Payload', action.payload);
      return action.payload;
    default:
      return state;
  }
};

export const LightDbReducer = (state = initialLightData, action) => {
  switch (action.type) {
    case LIGHT_DBDATA:
      // console.log('Light Payload', action.payload);
      return action.payload;
    default:
      return state;
  }
};

export const VoltageDbReducer = (state = initialVoltageData, action) => {
  switch (action.type) {
    case VOLTAGE_DBDATA:
      return action.payload;
    default:
      return state;
  }
};

// addReducer('dbValues', (state, payload) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             // Data in payload would typically be used
//             // in the following call to an asynchronous function.
//             const result = await fetch('some-url');
//
//             // Build the new state using the current state
//             // obtained by calling getState() rather than
//             // the state passed to the reducer function
//             // because it may have changed
//             // since the asynchronous activity began.
//             const newState = {...getState(), someKey: result};
//
//             resolve(newState);
//         } catch (e) {
//             reject(e);
//         }
//     });
// });