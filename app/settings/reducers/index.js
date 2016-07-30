import {UPDATE_SETTINGS, TOGGLE_SETTINGS} from '../actions'

const defaultState = {
    active: false,
    scanTime: 1,
    waitTime: 1
}

//handles the setiings state
const settingsReducer = function(state = defaultState, action) {
    switch (action.type) {
        case UPDATE_SETTINGS:
            return {
                active: state.active,
                scanTime: action.scanTime,
                waitTime: action.waitTime
            };
        case TOGGLE_SETTINGS:
            return Object.assign({}, state, {
                active: !state.active
            });
        default:
            return state;
    }
};

export default settingsReducer
