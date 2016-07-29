import {UPDATE_DEVICE_LIST} from '../actions'

//Handles beacons state
const beaconsReducer = function(state = [], action) {
    switch ( action.type ) {
        case UPDATE_DEVICE_LIST:
            return action.devices;
        default:
            return state;
    }
};

export default beaconsReducer
