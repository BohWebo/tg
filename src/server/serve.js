import path from "path";
import fs from "fs";
import {STATIC_PATH} from './constants';

export const serveFile = fileName => {
    const pathToFile = path.join(process.cwd(), STATIC_PATH, fileName);
    const stream = fs.createReadStream(pathToFile);
    console.log(`Served: ${fileName}`);

    return stream;
};
