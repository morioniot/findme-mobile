import React from 'react'
import {PropTypes} from 'react'
import {Text, View} from 'react-native'
import ListOfBeacons from './ListOfBeacons'
import ScanButton from '../containers/ScanButton'
import SettingsPanel from '../../settings/containers/SettingsPanel'
import SettingsButton from '../../settings/containers/SettingsButton'

const styles = {
    title: {
        color: '#ffffff',
        fontWeight: 'bold',
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
        marginTop: 15
    },
    title_box: {
        backgroundColor: '#ff9800',
        flexDirection: 'row',
        height: 60
    },
    main_container: {
        flex: 1,
        flexDirection: 'column'
    },
    scanner: {
        flex: 1
    }
};

const renderScanner = function( beacons ) {
    return (
        <View style={styles.scanner}>
            <ScanButton/>
            <ListOfBeacons beacons={beacons}/>
        </View>
    );
}

const BeaconScanner = React.createClass({

    propTypes: {
        beacons: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
        initialize: PropTypes.func.isRequired,
        settingsFlag: PropTypes.bool.isRequired
    },

    componentDidMount: function() {
        this.props.initialize();
    },

    render: function(){
        return (
            <View style={styles.main_container}>
                <View style={styles.title_box}>
                    <Text style={styles.title}>List of Beacons</Text>
                    <SettingsButton />
                </View>
                {this.props.settingsFlag && <SettingsPanel />}
                {!this.props.settingsFlag && renderScanner( this.props.beacons )}
            </View>
        );
    }
});

export default BeaconScanner
