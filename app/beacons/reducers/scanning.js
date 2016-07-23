import {START_SCANNING, STOP_SCANNING} from '../actions'

//Handles scanning state
const scanningReducer = function(state = false, action) {
    switch ( action.type ) {
        case START_SCANNING:
            return true;
        case STOP_SCANNING:
            return false;
        default:
            return state;
    }
};

export default scanningReducer
