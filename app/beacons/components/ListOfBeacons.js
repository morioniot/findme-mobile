import React from 'react'
import {ScrollView} from 'react-native'
import Beacon from './Beacon'

const ListOfBeacons = React.createClass({
    render: function(){
        const beacons = this.props.beacons;
        const beaconNodes = beacons.map(function(beacon){
            return (<Beacon picture={beacon.picture} key={beacon.id}>{beacon.name}</Beacon>);
        });
        return (
            <ScrollView style={{flexDirection:'column'}}>
                {beaconNodes}
            </ScrollView>
        );
    }
});

export default ListOfBeacons
