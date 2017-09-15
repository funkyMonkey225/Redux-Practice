import * as actions from './actions';
import {combineReducers} from 'redux';

const counter_change = (state=0, action) => {
    switch(action.type) {
        case actions.INCREMENT:
            let newState = state + 1;
            return newState;

        case actions.DECREMENT:
            newState = state - 1;
            return newState;
        
        default:
            return state;
    }
}

export default combineReducers({
    counter_change
})