import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const _dirname = dirname(fileURLToPath(import.meta.url)) + "/";
const create = async () => {
  fs.writeFile(_dirname + "fresh.txt", "I am fresh and young", (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await create();
