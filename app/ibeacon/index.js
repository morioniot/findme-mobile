export const getMajor = function(hexaBytes){
    const majorHexString = "0x" + hexaBytes[25] + hexaBytes[26];
    return parseInt(majorHexString);
};

export const getMinor = function(hexaBytes){
    const minorHexString = "0x" + hexaBytes[27] + hexaBytes[28];
    return parseInt(minorHexString);
};

export const getUUID = function(hexaBytes){
    let UUID = "";
    let UUIDIndex = 9;
    const UUIDChunkSizes = [4,2,2,2,6];
    for(let i = 0; i < UUIDChunkSizes.length; i++){
        for(let j = 0; j < UUIDChunkSizes[i]; j++){
            UUID += hexaBytes[UUIDIndex];
            UUIDIndex++;
        }
        if(i < UUIDChunkSizes.length - 1)
            UUID += "-";
    }
    return UUID;
};

export const validateIBeacon = function(hexaBytes){
    if(
        hexaBytes.length > 0 &&
        hexaBytes[0] === '02' &&
        hexaBytes[1] === '01' &&
        hexaBytes[2] === '06' &&
        hexaBytes[3] === '1a' &&
        hexaBytes[4] === 'ff' &&
        hexaBytes[5] === '4c' &&
        hexaBytes[6] === '00' &&
        hexaBytes[7] === '02' &&
        hexaBytes[8] === '15'
    )
        return true;
    return false;
};
