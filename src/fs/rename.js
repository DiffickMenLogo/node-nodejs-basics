import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const _dirname = dirname(fileURLToPath(import.meta.url)) + "/";
const rename = async () => {
  fs.rename(
    _dirname + "files/wrongFilename.txt",
    _dirname + "files/properFilename.md",
    (err) => {
      if (err) throw new Error("FS operation failed");
    }
  );
};

await rename();
