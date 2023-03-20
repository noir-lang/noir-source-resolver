"use strict";
// import { read_file } from ".";
// import { initialise } from "./initializer";
Object.defineProperty(exports, "__esModule", { value: true });
exports.read_file = exports.initialiseResolver = void 0;
// let resolveFunction: Function | null = (source_id: string) => {
//     const fs = require("fs");
//     const string =
//         fs.readFileSync(source_id, { encoding: "utf8" }) as string
//         ;
//     return string;
// };
const index_js_1 = require("./index.js");
Object.defineProperty(exports, "initialiseResolver", { enumerable: true, get: function () { return index_js_1.initialiseResolver; } });
Object.defineProperty(exports, "read_file", { enumerable: true, get: function () { return index_js_1.read_file; } });
// const initialiseResolver = pkg.default;
(0, index_js_1.initialiseResolver)((source_id) => {
    const fs = require("fs");
    const string = fs.readFileSync(source_id, { encoding: "utf8" });
    return string;
});
//# sourceMappingURL=index_node.js.map