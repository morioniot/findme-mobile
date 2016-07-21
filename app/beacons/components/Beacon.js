import React from 'react'
import {View, Image, Text} from 'react-native'

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#ffe0b2',
        flexDirection: 'row'
    },
    icon: {
        margin: 5,
        width: 65,
        height: 65
    },
    description: {
        color: '#333333',
        fontSize: 22,
        height: 35,
        marginTop: 20,
        textAlign: 'center',
        flex:1
    }
};

const Beacon = React.createClass({
    render: function(){
        return (
            <View style={styles.container}>
                <Image style={styles.icon} source={require('../../../images/dog.png')}/>
                <Text style={styles.description}>{this.props.children}</Text>
            </View>
        );
    }
});

export default Beacon
