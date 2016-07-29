import {combineReducers} from 'redux'
import beaconsReducer from './beacons'
import scanningReducer from './scanning'

//Handles all the application state
const mainReducer = combineReducers({
    beacons: beaconsReducer,
    scanning: scanningReducer
});

export default mainReducer
