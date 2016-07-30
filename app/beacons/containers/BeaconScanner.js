import {connect} from 'react-redux'
import {configureScan} from '../actions'
import BeaconScannerComponent from '../components/BeaconScanner'

const mapStateToProps = function( state ) {
    return {
        beacons: state.beacons,
        settingsFlag: state.settings.active
    };
};

const mapDispatchToProps =  function( dispatch ) {
    return {
        initialize: function() {
            dispatch(configureScan());
        }
    };
};

const BeaconScanner = connect(mapStateToProps, mapDispatchToProps)(BeaconScannerComponent);

export default BeaconScanner
