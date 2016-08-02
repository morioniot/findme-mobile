import {toByteArray} from 'base64-js'

const toHexaWithZero =  function(byte) {
    const byteString = byte.toString(16);
    if(byteString.length === 1)
        return '0' + byteString;
    return byteString;
};

/*export const toIntBuffer = function(str) {
    const decodedStr = atob(str);
    const intBuffer = [];
    for(let i = 0; i < decodedStr.length; i++)
        intBuffer.push(decodedStr.charCodeAt(i));
    return intBuffer;
};*/

export const toIntBuffer = function( str ) {
    const intBufferLikeObject = toByteArray( str );
    return Array.prototype.slice.call( intBufferLikeObject );
};

export const toHexaBuffer = function(intBuffer) {
    return intBuffer.map(function(intByte){
        return toHexaWithZero(intByte);
    });
};

export const parseTwoComplementHexa = function( hexaString ) {
    const base32Number = parseInt( hexaString );
    const isNegative = (base32Number & 0x00000080);
    if( isNegative )
        return (base32Number | 0xffffff00);
};
