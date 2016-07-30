import {connect} from 'react-redux'
import {updateSettings, toggleSettings} from '../actions'
import SettingsPanelComponent from '../components/SettingsPanel'

const mapStateToProps =  function( state ) {
    return {
        initialScanTime: state.settings.scanTime,
        initialWaitTime: state.settings.waitTime
    }
};

const mapDispatchToProps = function( dispatch ) {
    return {
        onUpdatePress: function(scanTime, waitTime) {
            dispatch( updateSettings(scanTime, waitTime) );
            dispatch( toggleSettings() );
        }
    }
};

const SettingsPanel = connect(
    mapStateToProps,
    mapDispatchToProps
)( SettingsPanelComponent );

export default SettingsPanel
