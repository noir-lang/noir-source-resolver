"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.read_file = void 0;
const initializer_1 = require("./initializer");
let read_file = function (source_id) {
    const fs = require("fs");
    const string = fs.readFileSync(source_id, { encoding: "utf8" });
    return string;
};
exports.read_file = read_file;
function initialiseResolver(resolver) {
    exports.read_file = (0, initializer_1.initialise)(resolver);
}
exports.default = initialiseResolver;
;
//# sourceMappingURL=index_nodejs.js.map