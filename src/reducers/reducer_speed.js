import {SPEED_SELECTED} from "../constants";

const initialState = "medium";

export default function(state = initialState, action) {
    switch (action.type) {
        case SPEED_SELECTED:
            return action.payload;
    }
    return state;
}