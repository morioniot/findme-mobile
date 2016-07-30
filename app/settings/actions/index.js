import ble from '../../BLE'

export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';

export function updateSettings(scanTime, waitTime) {
    ble.setScanTime( scanTime );
    ble.setWaitTime( waitTime );
    return {
        type: UPDATE_SETTINGS,
        scanTime,
        waitTime
    };
}

export function toggleSettings( ) {
    return {
        type: TOGGLE_SETTINGS
    };
}
