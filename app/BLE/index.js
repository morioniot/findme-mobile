import { NativeAppEventEmitter } from 'react-native';
import BleManager from 'react-native-ble-manager'
import {getMajor, getMinor, getUUID, validateIBeacon} from '../ibeacon'
import {toIntBuffer, toHexaBuffer} from '../util/hexadecimal'

let scanStopFlag = false;
let fullScanStartHandler = undefined;
let fullScanStopHandler = undefined;
let scanStartHandler = undefined;
let scanStopHandler = undefined;
let scanTime = 1;
let waitTime = 1;

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
        if(!scanStopFlag)
            setTimeout(scan, waitTime * 1000);
        else {
            console.log("Full scan stopped")
            scanStopFlag = false;
            if(fullScanStopHandler)
                fullScanStopHandler();
        }
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
    NativeAppEventEmitter.addListener('BleManagerDiscoverPeripheral', callback);
};

const setScanTime = function( time ) {
    scanTime =  time;
};

const setWaitTime = function( time ) {
    waitTime = time;
};

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
        onNewDevice
    };
};

const ble = BLE();

export default ble
