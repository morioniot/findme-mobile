import React from 'react'
import {
    AppRegistry,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native'

import dogs from './dogs.json'

const DogsApp = React.createClass({
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
