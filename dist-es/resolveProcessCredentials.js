import { fromProcess } from "@aws-sdk/credential-provider-process";

export var resolveProcessCredentials = function (profile) {
    return fromProcess({ profile })();
};
