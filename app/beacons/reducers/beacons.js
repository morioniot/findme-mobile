import {ADD_DEVICE} from '../actions'

//Handles beacons state
const beaconsReducer = function(state = [], action, invalidated) {
    switch ( action.type ) {
        case ADD_DEVICE:
            if(invalidated)
                return [action.device];
            return[...state, action.device];
        default:
            return state;
    }
};

export default beaconsReducer
