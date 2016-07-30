import {connect} from 'react-redux'
import {toggleSettings} from '../actions'
import SettingsButtonComponent from '../components/SettingsButton'

const mapStateToProps = function( state ) {
    return { active: state.settings.active }
};

const mapDispatchToProps =  function( dispatch ) {
    return {
        onPress: function() {
            dispatch( toggleSettings() );
        }
    }
};

const SettingsButton = connect(
    mapStateToProps,
    mapDispatchToProps
)( SettingsButtonComponent );

export default SettingsButton
