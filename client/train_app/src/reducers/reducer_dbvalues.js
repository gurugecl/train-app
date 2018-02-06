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
