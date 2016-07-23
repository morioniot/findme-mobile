import * as BLE from '../../BLE'
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

function configureScan( dispatch ) {
    BLE.onFullScanStart(function() {
        dispatch(startScanning());
    });
    BLE.onFullScanStop(function() {
        dispatch(stopScanning());
    });
    BLE.onScanStop(function() {
        dispatch(invalidateList())
    });
    BLE.onNewDevice(function( device ) {
        const processedDevice = processBLEAsIBeacon( device );
        dispatch(addDevice( processedDevice ));
    });
}

export function startScan() {
    return function(dispatch) {
        configureScan(dispatch);
        BLE.startFullScan();
    };
}
