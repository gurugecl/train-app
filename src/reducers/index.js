import { combineReducers } from "redux";
import LightReducer from "./reducer_light";
import SpeedReducer from "./reducer_speed";

const rootReducer = combineReducers({
    lightStatus: LightReducer,
    speedStatus: SpeedReducer
});

export default rootReducer;