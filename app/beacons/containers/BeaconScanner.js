import {connect} from 'react-redux'
import BeaconScannerComponent from '../components/BeaconScanner'

const mapStateToProps = function(state) {
    return {beacons: state.beacons};
};

const BeaconScanner = connect(mapStateToProps)(BeaconScannerComponent);

export default BeaconScanner
