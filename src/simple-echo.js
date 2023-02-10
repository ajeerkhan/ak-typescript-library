"use strict";
exports.__esModule = true;
exports.echoV1 = exports.echo = void 0;
var echo = function (message) {
    console.log("Received ".concat(message, " at ").concat((new Date()).toString()));
    return message;
};
exports.echo = echo;
var echoV1 = function (message) {
    console.log("Received ".concat(message, " by ").concat(Date.toString()));
    return message;
};
exports.echoV1 = echoV1;
