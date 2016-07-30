import React from 'react'
import {PropTypes} from 'react'
import {Text, TextInput, TouchableHighlight, View} from 'react-native'

const styles = {
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20
    },
    button: {
        backgroundColor: '#009688',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 10,
        padding: 10,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    input: {
        fontSize: 22
    }
};

const SettingsPanel = React.createClass({

    propTypes: {
        initialScanTime: PropTypes.number.isRequired,
        initialWaitTime: PropTypes.number.isRequired,
        onUpdatePress: PropTypes.func.isRequired
    },

    getInitialState: function() {
        return {
            scanTimeInput: this.props.initialScanTime.toString(),
            waitTimeInput: this.props.initialWaitTime.toString()
        };
    },

    handleScanTimeChange: function( e ) {
        this.setState({ scanTimeInput: e});
    },

    handleWaitTimeChange: function( e ) {
        this.setState({ waitTimeInput: e});
    },

    handleUpdate: function() {
        const {scanTimeInput, waitTimeInput} = this.state;
        const scanTime = parseFloat( scanTimeInput );
        const waitTime = parseFloat( waitTimeInput );
        this.props.onUpdatePress(scanTime, waitTime);
    },

    render: function() {
        return (
            <View>
                <Text style={styles.label}>Scan time:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    onChangeText={this.handleScanTimeChange}
                    value={this.state.scanTimeInput}
                />
                <Text style={styles.label}>Wait time:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    onChangeText={this.handleWaitTimeChange}
                    value={this.state.waitTimeInput}
                />
                <TouchableHighlight>
                    <Text style={styles.button} onPress={this.handleUpdate}>Update</Text>
                </TouchableHighlight>
            </View>
        );
    }
});

export default SettingsPanel
