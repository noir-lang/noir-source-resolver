let resolveFunction = null;
export let read_file = function (source_id) {
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
function initialise(noir_resolver) {
    if (typeof noir_resolver === "function") {
        return noir_resolver;
    }
    else {
        throw new Error("Provided Noir Resolver is not a function, hint: use function(module_id) => NoirSource as second parameter");
    }
}
export function initialiseResolver(resolver) {
    resolveFunction = initialise(resolver);
}
//# sourceMappingURL=index.js.map