import { unlink } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const _dirname = dirname(fileURLToPath(import.meta.url)) + "/";
const remove = async () => {
  unlink(_dirname + "files/fileToRemove.txt", (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await remove();
