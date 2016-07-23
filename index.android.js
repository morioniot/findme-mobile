import React from 'react'
import { AppRegistry } from 'react-native'
import BeaconScanner from './app/beacons/containers/BeaconScanner'
import { Provider } from 'react-redux'
import store from './app/beacons/store'

const app = function() {
    return (
        <Provider store={store}>
            <BeaconScanner/>
        </Provider>
    );
};


AppRegistry.registerComponent('findme', () => app);
