const toHexaWithZero =  function(byte){
    const byteString = byte.toString(16);
    if(byteString.length === 1)
        return '0' + byteString;
    return byteString;
};

export const toIntBuffer = function(str){
    const decodedStr = atob(str);
    const intBuffer = [];
    for(let i = 0; i < decodedStr.length; i++)
        intBuffer.push(decodedStr.charCodeAt(i));
    return intBuffer;
};

export const toHexaBuffer = function(intBuffer){
    return intBuffer.map(function(intByte){
        return toHexaWithZero(intByte);
    });
};
