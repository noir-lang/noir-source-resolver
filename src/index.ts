import { initialise } from "./initializer";


export let read_file = function (source_id: any): string {
    // return Promi/se.resolve(async function () {
    throw new Error('Not yet initialised. Use initialiseResolver(() => string)');
    // });/
};

export default function initialiseResolver(resolver: () => string): void {
    read_file = initialise(resolver);
};

