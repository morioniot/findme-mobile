import { NativeAppEventEmitter } from 'react-native';
import BleManager from 'react-native-ble-manager'
import {getMajor, getMinor, getUUID, validateIBeacon} from '../ibeacon'
import {toIntBuffer, toHexaBuffer} from '../util/hexadecimal'

let scanStopFlag = false;
let fullScanStartHandler = undefined;
let fullScanStopHandler = undefined;
let scanStartHandler = undefined;
let scanStopHandler = undefined;
let newDeviceHandler = undefined;
let scanTime = 1;
let waitTime = 1;
let devices = [];

const scan =  function() {
    BleManager.scan([], scanTime)
    .then(function(){
        console.log("Scan started");
        if(scanStartHandler)
            scanStartHandler();
    })
    .catch(console.error);
};

const initializeBLE = function() {

    NativeAppEventEmitter.addListener('BleManagerStopScan', function(){
        console.log("Scan stopped");
        if(scanStopHandler)
            scanStopHandler();
        devices = [];
        if(!scanStopFlag)
            setTimeout(scan, waitTime * 1000);
        else {
            console.log("Full scan stopped")
            scanStopFlag = false;
            if(fullScanStopHandler)
                fullScanStopHandler();
        }
    });

    NativeAppEventEmitter.addListener('BleManagerDiscoverPeripheral', function( device ) {
        devices.push( device );
        if( newDeviceHandler )
            newDeviceHandler();
    });
};

const startFullScan = function() {
    if(fullScanStartHandler)
        fullScanStartHandler();
    console.log("Full scan started");
    scan();
};

const stopFullScan =  function() {
    scanStopFlag = true;
};

const onScanStart = function( callback ) {
    scanStartHandler = callback;
};

const onScanStop = function( callback ){
    scanStopHandler = callback;
};

const onFullScanStart = function( callback ) {
    fullScanStartHandler = callback;
};

const onFullScanStop = function( callback ) {
    fullScanStopHandler = callback;
};

const onNewDevice = function( callback ) {
    newDeviceHandler = callback;
};

const setScanTime = function( time ) {
    scanTime =  time;
};

const setWaitTime = function( time ) {
    waitTime = time;
};

const getDevices = function() {
    return devices;
}

const BLE = function() {
    initializeBLE();
    return {
        startFullScan,
        stopFullScan,
        setScanTime,
        setWaitTime,
        onFullScanStart,
        onFullScanStop,
        onScanStart,
        onScanStop,
        onNewDevice,
        getDevices
    };
};

const ble = BLE();

export default ble
