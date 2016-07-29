import React from 'react'
import {PropTypes} from 'react'
import {TouchableHighlight, Text} from 'react-native'

const styles = {
    button: {
        backgroundColor: 'gray',
    },
    text: {
        backgroundColor: '#FFF3E0',
        color: 'rgba(0,0,0,0.6)',
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        padding: 0,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
};

const ScanButton = React.createClass({

    propTypes: {
        onPress: PropTypes.func.isRequired,
        scanning: PropTypes.bool.isRequired
    },

    render: function() {
        const {scanning, onPress} = this.props;
        const text = scanning ? 'STOP SCANNING' : 'START SCANNING';
        return (
            <TouchableHighlight
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.text}>{text}</Text>
            </TouchableHighlight>
        );
    }
});

export default ScanButton
