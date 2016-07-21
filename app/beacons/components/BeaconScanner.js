import React from 'react'
import {Text, View} from 'react-native'
import ListOfBeacons from './ListOfBeacons'
import {initializeScan} from '../../BLE'

import beacons from '../../beacons.json'

const styles = {
    title: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20
    },
    title_box: {
        backgroundColor: '#ff9800',
        height: 70
    }
};

const BeaconScanner = React.createClass({

    componentDidMount: function(){
        initializeScan();
    },

    render: function(){
        return (
            <View style={{flex:1}}>
                <View style={styles.title_box}>
                    <Text style={styles.title}>List of Beacons</Text>
                </View>
                <ListOfBeacons beacons={beacons}/>
            </View>
        );
    }
});

export default BeaconScanner
