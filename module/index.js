import { initialise } from "./initializer";
export let read_file = function (source_id) {
    // return Promi/se.resolve(async function () {
    throw new Error('Not yet initialised. Use initialiseResolver(() => string)');
    // });/
};
export default function initialiseResolver(resolver) {
    read_file = initialise(resolver);
}
;
//# sourceMappingURL=index.js.map