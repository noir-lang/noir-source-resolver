"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.read_file = exports.initialiseResolver = void 0;
const index_js_1 = require("./index.js");
Object.defineProperty(exports, "initialiseResolver", { enumerable: true, get: function () { return index_js_1.initialiseResolver; } });
Object.defineProperty(exports, "read_file", { enumerable: true, get: function () { return index_js_1.read_file; } });
(0, index_js_1.initialiseResolver)((source_id) => {
    let fileContent = "";
    try {
        const fs = require("fs");
        fileContent =
            fs.readFileSync(source_id, { encoding: "utf8" });
    }
    catch (e) {
        console.log(e);
    }
    return fileContent;
});
//# sourceMappingURL=index_node.js.map