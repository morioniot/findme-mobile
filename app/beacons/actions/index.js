import ble from '../../BLE'
import {processBLEAsIBeacon} from '../../ibeacon'

export const START_SCANNING = 'START_SCANNING';
export const STOP_SCANNING = 'STOP_SCANNING';
export const ADD_DEVICE = 'ADD_DEVICE';
export const INVALIDATE_LIST = 'INVALIDATE_LIST';

function addDevice( device ) {
    return {
        type: ADD_DEVICE,
        device
    };
}

function startScanning() {
    return {type: START_SCANNING};
}

function stopScanning() {
    return {type: STOP_SCANNING};
}

function invalidateList() {
    return {type: INVALIDATE_LIST};
}

export function configureScan() {
    return function( dispatch ) {
        ble.onFullScanStart(function() {
            dispatch(startScanning());
        });
        ble.onFullScanStop(function() {
            dispatch(stopScanning());
        });
        ble.onScanStop(function() {
            dispatch(invalidateList())
        });
        ble.onNewDevice(function( device ) {
            const processedDevice = processBLEAsIBeacon( device );
            dispatch(addDevice( processedDevice ));
        });
    };
}

export function toggleScan() {
    return function(dispatch, getState) {
        const state = getState();
        if( state.scanning )
            ble.stopFullScan();
        else
            ble.startFullScan();
    };
}
