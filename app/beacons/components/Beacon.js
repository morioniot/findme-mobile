import React from 'react'
import {View, Image, Text} from 'react-native'

const styles = {
    container: {
        backgroundColor: '#ffe0b2',
        flexDirection: 'row',
        marginTop: 5
    },
    icon: {
        margin: 5,
        width: 45,
        height: 45
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        margin: 2
    },
    infoBox: {
        flex: 1,
        flexDirection: 'column'
    },
    infoTag: {
        fontWeight: '600',
        marginRight: 5
    }
};

const renderName = function( beacon ) {
    return (
        <View style={styles.info}>
            <Text style={styles.infoTag}>Name:</Text>
            <Text>{beacon.name}</Text>
        </View>
    );
};

const renderRSSI1m = function( beacon ) {
    return (
        <View style={styles.info}>
            <Text style={styles.infoTag}>RSSI at 1m:</Text>
            <Text>{beacon.rssi1m + ' dBm'}</Text>
        </View>
    );
};

const renderUUID = function( beacon ) {
    return (
        <View style={styles.info}>
            <Text style={styles.infoTag}>UUID:</Text>
            <Text>{beacon.uuid}</Text>
        </View>
    );
};

const renderMajor = function( beacon ) {
    return (
        <View style={styles.info}>
            <Text style={styles.infoTag}>Major:</Text>
            <Text>{beacon.major}</Text>
        </View>
    );
};

const renderMinor = function( beacon ) {
    return (
        <View style={styles.info}>
            <Text style={styles.infoTag}>Minor:</Text>
            <Text>{beacon.minor}</Text>
        </View>
    );
};

const Beacon = React.createClass({

    render: function(){
        const beacon = this.props.beacon;
        return (
            <View style={styles.container}>
                <Image style={styles.icon} source={require('../../../images/dog.png')}/>
                <View style={styles.infoBox}>
                    {beacon.name && renderName( beacon )}
                    <View style={styles.info}>
                        <Text style={styles.infoTag}>RSSI:</Text>
                        <Text>{beacon.rssi + ' dBm'}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.infoTag}>ID:</Text>
                        <Text>{beacon.id}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.infoTag}>Is iBeacon?:</Text>
                        <Text>{beacon.isIBeacon ? "Yes" : "No"}</Text>
                    </View>
                    {beacon.isIBeacon && renderUUID( beacon )}
                    {beacon.isIBeacon && renderMajor( beacon )}
                    {beacon.isIBeacon && renderMinor( beacon )}
                    {beacon.isIBeacon && renderRSSI1m( beacon )}
                </View>
            </View>
        );
    }
});

export default Beacon
