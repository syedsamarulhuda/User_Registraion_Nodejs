function define(obj, name, value) {
    Object.defineProperty(obj, name, {
        value:        value,
        enumerable:   true,
        writable:     false,
        configurable: false
    });
}

exports.responseStatus = {};
define(exports.responseStatus, "SHOW_DATA", 100);
define(exports.responseStatus, "PARAMETER_MISSING", 101);
define(exports.responseStatus, "SHOW_ERROR_MESSAGE", 101);
define(exports.responseStatus, "INVALID_ACCESS_TOKEN", 102);
define(exports.responseStatus, "USER_NAME_ALREADY_EXIST", 103);
define(exports.responseStatus, "SUCCESSFUL_ORDER_PACE", 104);
define(exports.responseStatus, "INVALID_JSON_STRUCTURE", 105);


define(exports.responseStatus, "UN_AUTHORIZED_ACCESS", 106);
define(exports.responseStatus, "FB_ID_NOT_EXISTS", 109);