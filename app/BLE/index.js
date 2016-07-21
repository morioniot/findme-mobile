import { NativeAppEventEmitter } from 'react-native';
import BleManager from 'react-native-ble-manager'
import {getMajor, getMinor, getUUID, validateIBeacon} from '../ibeacon'
import {toIntBuffer, toHexaBuffer} from '../util/hexadecimal'

const setBLEEventsHandlers = function(){

    NativeAppEventEmitter.addListener('BleManagerStopScan', function(){
        console.log("BLE has stopped scanning");
    });

    NativeAppEventEmitter.addListener('BleManagerDiscoverPeripheral', function(args){
        const intBuffer = toIntBuffer(args.advertising.data);
        const hexaBuffer = toHexaBuffer(intBuffer);
        const isIBeacon = validateIBeacon(hexaBuffer);
        console.log("Is iBeacon?",isIBeacon);
        console.log("ID:", args.id);
        console.log("RSSI:", args.rssi);
        console.log("UUID:", getUUID(hexaBuffer));
        console.log("Major:", getMajor(hexaBuffer));
        console.log("Minor:", getMinor(hexaBuffer));
        console.log("Data:", hexaBuffer);
    });
};

export const initializeScan = function(){
    setBLEEventsHandlers();
    BleManager.scan([], 5)
    .then(function(){
        console.log("BLE has started scanning");
    })
    .catch(console.error);
};
