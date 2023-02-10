"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.geocoding = exports.request = exports.echoMessage = void 0;
var simple_echo_js_1 = require("./simple-echo.js");
__createBinding(exports, simple_echo_js_1, "echo", "echoMessage");
var index_js_1 = require("./axios-wrapper/index.js");
__createBinding(exports, index_js_1, "default", "request");
var geocoding_1 = require("./lib/geocoding");
__createBinding(exports, geocoding_1, "default", "geocoding");
