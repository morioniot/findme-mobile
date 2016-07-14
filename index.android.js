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
            <View>
                <View>
                    <Text>List of dogs</Text>
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
            return (<Dog picture={dog.picture}>{dog.name}</Dog>);
        });
        return (
            <ScrollView>
                {dogNodes}
            </ScrollView>
        );
    }
});

const Dog = React.createClass({
    render: function(){
        return (
            <View>
                <Image source={require('./images/dog.png')}/>
                <Text>{this.props.children}</Text>
            </View>
        );
    }
});

AppRegistry.registerComponent(
  'findme',
  () => DogsApp
);
