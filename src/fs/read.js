import { readFile } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const _dirname = dirname(fileURLToPath(import.meta.url)) + "/";
const read = async () => {
  readFile(_dirname + "files/fileToRead.txt", "utf8", (err, data) => {
    if (err) throw new Error("FS operation failed");
    console.log(data);
  });
};

await read();
