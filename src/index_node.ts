// import { read_file } from ".";
// import { initialise } from "./initializer";

// let resolveFunction: Function | null = (source_id: string) => {
//     const fs = require("fs");
//     const string =
//         fs.readFileSync(source_id, { encoding: "utf8" }) as string
//         ;
//     return string;
// };

import { initialiseResolver, read_file } from './index.js';

// const initialiseResolver = pkg.default;


initialiseResolver((source_id: String) => {
    const fs = require("fs");
    const string =
        fs.readFileSync(source_id, { encoding: "utf8" }) as string
        ;
    return string;
});

export { initialiseResolver, read_file };


