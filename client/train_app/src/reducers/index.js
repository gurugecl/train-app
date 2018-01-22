import { combineReducers } from "redux";
import { LightValueReducer, LightStatusReducer } from "./reducer_light";
import { SpeedReducer } from "./reducer_speed";
import {IdleValueReducer} from "./reducer_idle";
import {VoltageDbReducer, LightDbReducer, ProfileDbReducer } from "./reducer_dbvalues";

const rootReducer = combineReducers({
    lightStatus: LightStatusReducer,
    lightValue: LightValueReducer,
    idleValue: IdleValueReducer,
    speedValue: SpeedReducer,
    profileDbvalue: ProfileDbReducer,
    lightDbvalue: LightDbReducer,
    voltageDbvalue: VoltageDbReducer
});

export default rootReducer;