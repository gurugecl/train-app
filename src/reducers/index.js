import { combineReducers } from "redux";
import { LightValueReducer, LightStatusReducer } from "./reducer_light";
import SpeedReducer from "./reducer_speed";
import {IdleValueReducer} from "./reducer_idle";

const rootReducer = combineReducers({
    lightStatus: LightStatusReducer,
    lightValue: LightValueReducer,
    idleValue: IdleValueReducer,
    speedStatus: SpeedReducer
});

export default rootReducer;