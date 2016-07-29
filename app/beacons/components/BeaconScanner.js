import React from 'react'
import {PropTypes} from 'react'
import {Text, View} from 'react-native'
import ListOfBeacons from './ListOfBeacons'
import ScanButton from '../containers/ScanButton'

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

    propTypes: {
        beacons: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
        initialize: PropTypes.func.isRequired
    },

    componentDidMount: function() {
        this.props.initialize();
    },

    render: function(){
        return (
            <View style={{flex:1}}>
                <View style={styles.title_box}>
                    <Text style={styles.title}>List of Beacons</Text>
                </View>
                <ScanButton/>
                <ListOfBeacons beacons={this.props.beacons}/>
            </View>
        );
    }
});

export default BeaconScanner
