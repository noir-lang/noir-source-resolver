"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialiseResolver = exports.read_file = void 0;
let resolveFunction = null;
let read_file = function (source_id) {
    if (resolveFunction) {
        const result = resolveFunction(source_id);
        if (typeof result === "string") {
            return result;
        }
        else {
            throw new Error("Noir source resolver funtion MUST return String synchronously. Are you trying to return anything else, eg. `Promise`?");
        }
    }
    else {
        throw new Error('Not yet initialised. Use initialiseResolver(() => string)');
    }
};
exports.read_file = read_file;
function initialise(noir_resolver) {
    if (typeof noir_resolver === "function") {
        return noir_resolver;
    }
    else {
        throw new Error("Provided Noir Resolver is not a function, hint: use function(module_id) => NoirSource as second parameter");
    }
}
function initialiseResolver(resolver) {
    resolveFunction = initialise(resolver);
}
exports.initialiseResolver = initialiseResolver;
//# sourceMappingURL=index.js.map