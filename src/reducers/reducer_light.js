import {LIGHT_SELECTED} from "../constants";

const initialState = "auto";

export default function(state = initialState, action) {
    switch (action.type) {
        case LIGHT_SELECTED:
            return action.payload;
    }
            return state;
}