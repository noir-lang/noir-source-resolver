"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialise = void 0;
function initialise(noir_resolver) {
    if (typeof noir_resolver === "function") {
        return noir_resolver;
    }
    else {
        throw new Error("Provided Noir Resolver is not a function, hint: use function(module_id) => NoirSource as second parameter");
    }
}
exports.initialise = initialise;
//# sourceMappingURL=initializer.js.map