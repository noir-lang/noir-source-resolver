import { initialiseResolver, read_file } from './index.js';

initialiseResolver((source_id: String) => {
    const fs = require("fs");
    const string =
        fs.readFileSync(source_id, { encoding: "utf8" }) as string
        ;
    return string;
});

export { initialiseResolver, read_file };


