import {connect} from 'react-redux'
import ScanButtonComponent from '../components/ScanButton'
import {toggleScan} from '../actions'
import {Background} from '../../native'

const mapStateToProps = function( state ) {
    return {scanning: state.scanning};
};

const mapDispatchToProps = function( dispatch ) {
    return {
        onPress: function(){
            Background.transformInBackground('Miguel');
            dispatch(toggleScan());
        }
    };
};

const ScanButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(ScanButtonComponent);

export default ScanButton
