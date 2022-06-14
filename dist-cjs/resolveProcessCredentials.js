"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.resolveProcessCredentials = void 0;
const credential_provider_process_1 = require("@aws-sdk/credential-provider-process");
const resolveProcessCredentials = async (options, profile) => {
    return (0, credential_provider_process_1.fromProcess)(options, profile)();
};
exports.resolveProcessCredentials = resolveProcessCredentials;
