"use strict";
exports.__esModule = true;
var debug = require("debug");
var log = debug('util:demo');
function add(a, b) {
    log('add a: %o, b: %o', a, b);
    return a + b;
}
exports.add = add;
//# sourceMappingURL=index.js.map