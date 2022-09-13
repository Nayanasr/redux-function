import { combineReducers } from "redux";
import { INCREMENT, DECREMENT } from "../actiontypes/actiontypes";

export const reducerFun = (state = 0, action) => {

    switch (action.type) {
        case INCREMENT:
            return state + 1;

        case DECREMENT:
            return state - 1;

        default:
            return state;
    }
};

const rootreducer = combineReducers({ reducerFun});
export default rootreducer;