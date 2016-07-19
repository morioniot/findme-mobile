import React from 'react'
import {
    AppRegistry,
    Image,
    NativeAppEventEmitter,
    ScrollView,
    Text,
    View
} from 'react-native'

import BleManager from 'react-native-ble-manager'
import dogs from './dogs.json'

const toByteString =  function(byte){
    const byteString = byte.toString(16);
    if(byteString.length === 1)
        return '0' + byteString;
    return byteString;
};

const toByteArray = function(str){
    const byteCharacters = atob(str);
    const byteArray = [];
    for(let i = 0; i < byteCharacters.length; i++)
        byteArray.push(byteCharacters.charCodeAt(i));
    return byteArray;
};

const toByteStringArray = function(bytesArray){
    return bytesArray.map(function(byte){
        return toByteString(byte);
    });
};

const validateIBeacon = function(bytes){
    if(
        bytes.length > 0 &&
        bytes[0] === '02' &&
        bytes[1] === '01' &&
        bytes[2] === '06' &&
        bytes[3] === '1a' &&
        bytes[4] === 'ff' &&
        bytes[5] === '4c' &&
        bytes[6] === '00' &&
        bytes[7] === '02' &&
        bytes[8] === '15'
    )
        return true;
    return false;
};

const getUUID = function(bytes){
    let UUID = "";
    let UUIDIndex = 9;
    const UUIDChunkSizes = [4,2,2,2,6];
    for(let i = 0; i < UUIDChunkSizes.length; i++){
        for(let j = 0; j < UUIDChunkSizes[i]; j++){
            UUID += bytes[UUIDIndex];
            UUIDIndex++;
        }
        if(i < UUIDChunkSizes.length - 1)
            UUID += "-";
    }
    return UUID;
};

const getMajor = function(bytes){
    const majorHexString = "0x" + bytes[25] + bytes[26];
    return parseInt(majorHexString);
};

const getMinor = function(bytes){
    const minorHexString = "0x" + bytes[27] + bytes[28];
    return parseInt(minorHexString);
};

const setBLE = function(){
    NativeAppEventEmitter.addListener('BleManagerStopScan', function(){
        console.log("BLE has stopped scanning");
    });
    NativeAppEventEmitter.addListener('BleManagerDiscoverPeripheral', function(args){
        const bytes = toByteArray(args.advertising.data);
        const hexBytes = toByteStringArray(bytes);
        const isIBeacon = validateIBeacon(hexBytes);
        console.log("Is iBeacon?",isIBeacon);
        console.log("ID:", args.id);
        console.log("RSSI:", args.rssi);
        console.log("UUID:", getUUID(hexBytes));
        console.log("Major:", getMajor(hexBytes));
        console.log("Minor:", getMinor(hexBytes));
        console.log("Data:", hexBytes);
        console.log(args);

    });
    BleManager.scan([], 5)
    .then(function(){
        console.log("BLE has started scanning");
    })
    .catch(console.error);
};

const DogsApp = React.createClass({

    componentDidMount: function(){
        setBLE();
    },

    render: function(){
        return (
            <View style={{flex:1}}>
                <View style={styles.titleBox}>
                    <Text style={styles.title}>List of dogs</Text>
                </View>
                <ListOfDogs dogs={dogs}/>
            </View>
        );
    }
});

const ListOfDogs = React.createClass({
    render: function(){
        const dogs = this.props.dogs;
        const dogNodes = dogs.map(function(dog){
            return (<Dog picture={dog.picture} key={dog.id}>{dog.name}</Dog>);
        });
        return (
            <ScrollView style={{flexDirection:'column'}}>
                {dogNodes}
            </ScrollView>
        );
    }
});

const Dog = React.createClass({
    render: function(){
        return (
            <View style={styles.itemBox}>
                <Image style={styles.image} source={require('./images/dog.png')}/>
                <Text style={styles.item}>{this.props.children}</Text>
            </View>
        );
    }
});

const styles = {
    titleBox: {
        backgroundColor: '#ff9800',
        height: 70
    },
    title: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20
    },
    image: {
        margin: 5,
        width: 65,
        height: 65
    },
    itemBox: {
        flex: 1,
        backgroundColor: '#ffe0b2',
        flexDirection: 'row'
    },
    item: {
        color: '#333333',
        fontSize: 22,
        height: 35,
        marginTop: 20,
        textAlign: 'center',
        flex:1
    }
};

AppRegistry.registerComponent(
  'findme',
  () => DogsApp
);
