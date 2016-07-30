import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import mainReducer from '../reducers'

const store = createStore(
    mainReducer,
    applyMiddleware(thunkMiddleware, createLogger())
)

export default store;
