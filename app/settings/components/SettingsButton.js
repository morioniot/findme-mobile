import React from 'react'
import {PropTypes} from 'react'
import {Image, TouchableHighlight} from 'react-native'


const styles = {
    icon: {
        margin: 10,
        width: 40,
        height: 40
    },
    button: {
        backgroundColor: '#ff9800',
        height: 60,
        width: 60
    },
    active: {
        backgroundColor: '#009688'
    }
};

const SettingsButton = React.createClass({

    propTypes: {
        active: PropTypes.bool.isRequired,
        onPress: PropTypes.func.isRequired
    },

    render: function() {

        const {active, onPress} = this.props;
        const buttonStyles = [ styles.button ];
        if( active )
            buttonStyles.push( styles.active );

        return (
            <TouchableHighlight style={buttonStyles} onPress={onPress}>
                <Image
                    source={require('../../../images/settings.png')}
                    style={styles.icon}
                />
            </TouchableHighlight>
        );
    }
});

export default SettingsButton
