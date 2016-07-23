import beaconsReducer from './beacons'
import invalidatedReducer from './invalidated'
import scanningReducer from './scanning'

//Handles all the application state
const mainReducer = function(state = {}, action) {
    const beacons = beaconsReducer(state.beacons, action, state.invalidated);
    const invalidated = invalidatedReducer(state.invalidated, action);
    const scanning = scanningReducer(state.scanning, action);
    return {
        invalidated,
        scanning,
        beacons
    };
};

export default mainReducer
