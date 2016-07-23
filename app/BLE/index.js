import { NativeAppEventEmitter } from 'react-native';
import BleManager from 'react-native-ble-manager'
import {getMajor, getMinor, getUUID, validateIBeacon} from '../ibeacon'
import {toIntBuffer, toHexaBuffer} from '../util/hexadecimal'

let scanCount = 0;
let fullScanStartHandler = undefined;
let fullScanStopHandler = undefined;
let scanStartHandler = undefined;
let scanStopHandler = undefined;

const scan =  function() {
    BleManager.scan([], 1)
    .then(function(){
        console.log("Scan started");
        scanCount++;
        if(scanStartHandler)
            scanStartHandler();
    })
    .catch(console.error);
};

export const startFullScan = function() {
    debugger;
    NativeAppEventEmitter.addListener('BleManagerStopScan', function(){
        console.log("Scan stopped " + scanCount);
        if(scanStopHandler)
            scanStopHandler();
        if(scanCount < 5)
            setTimeout(scan, 1000);
        else {
            console.log("Full scan stopped")
            scanCount = 0;
            if(fullScanStopHandler)
                fullScanStopHandler();
        }
    });
    if(fullScanStartHandler)
        fullScanStartHandler();
    console.log("Full scan started");
    scan();
};

export const onScanStart = function( callback ) {
    scanStartHandler = callback;
};

export const onScanStop = function( callback ){
    scanStopHandler = callback;
};

export const onFullScanStart = function( callback ) {
    fullScanStartHandler = callback;
};

export const onFullScanStop = function( callback ) {
    fullScanStopHandler = callback;
};

export const onNewDevice = function( callback ) {
    NativeAppEventEmitter.addListener('BleManagerDiscoverPeripheral', callback);
};
