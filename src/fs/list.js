import { readdir } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const _dirname = dirname(fileURLToPath(import.meta.url)) + "/";
const list = async () => {
  readdir(_dirname + "files", (err, files) => {
    if (err) throw new Error("FS operation failed");
    console.log(files);
  });
};

await list();
