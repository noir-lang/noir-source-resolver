import { initialise } from "./initializer";


export let read_file = function (source_id: string): string {
    const fs = require("fs");
    const string =
        fs.readFileSync(source_id, { encoding: "utf8" }) as string
        ;
    return string;
};

export default function initialiseResolver(resolver: () => string): void {
    read_file = initialise(resolver);
};

