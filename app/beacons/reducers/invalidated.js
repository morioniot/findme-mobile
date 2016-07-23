import {INVALIDATE_LIST, ADD_DEVICE} from '../actions'

//Handles invalidated state
const invalidatedReducer = function(state = false, action) {
    switch ( action.type ) {
        case INVALIDATE_LIST:
            return true;
        case ADD_DEVICE:
            return false;
        default:
            return state;
    }
};

export default invalidatedReducer
