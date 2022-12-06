import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const _dirname = dirname(fileURLToPath(import.meta.url)) + "/";
const copy = async () => {
  fs.readdir(_dirname + "files", (err, files) => {
    if (err) {
      fs.mkdir("files", (err) => {
        if (err) throw new Error("FS operation failed");
      });
      throw err;
    }
    fs.readdir(_dirname + "files_copy", (err) => {
      if (err) {
        fs.mkdir("files_copy", (err) => {
          if (err) throw new Error("FS operation failed");
        });
        throw err;
      }

      files.forEach((file) => {
        fs.copyFile(
          _dirname + `files/${file}`,
          _dirname + `files_copy/${file}`,
          (err) => {
            if (err) throw new Error("FS operation failed");
          }
        );
      });
    });
  });
};

copy();
