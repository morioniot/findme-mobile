import ble from '../../BLE'
import {processBLEArrayAsIBeacon} from '../../ibeacon'

export const START_SCANNING = 'START_SCANNING';
export const STOP_SCANNING = 'STOP_SCANNING';
export const UPDATE_DEVICE_LIST = 'UPDATE_DEVICE_LIST';

function updateDeviceList( devices ) {
    return {
        type: UPDATE_DEVICE_LIST,
        devices
    };
}

function startScanning() {
    return {type: START_SCANNING};
}

function stopScanning() {
    return {type: STOP_SCANNING};
}

function compareById(device1, device2) {
    return device1.id.localeCompare( device2.id );
}

function sortById( devices ) {
    return devices.sort( compareById );
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
            const devices = processBLEArrayAsIBeacon(ble.getDevices());
            const sortedDevices = sortById( devices );
            dispatch(updateDeviceList( sortedDevices ));
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
