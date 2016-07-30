import {combineReducers} from 'redux'
import beaconsReducer from './beacons'
import scanningReducer from './scanning'
import settingsReducer from '../../settings/reducers'

//Handles all the application state
const mainReducer = combineReducers({
    beacons: beaconsReducer,
    scanning: scanningReducer,
    settings: settingsReducer
});

export default mainReducer
