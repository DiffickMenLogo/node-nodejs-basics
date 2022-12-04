import * as fs from "fs";
const copy = async () => {
  fs.readdir("files", (err, files) => {
    if (err) {
      fs.mkdir("files", (err) => {
        if (err) throw new Error("FS operation failed");
      });
      throw err;
    }
    fs.readdir("files_copy", (err) => {
      if (err) {
        fs.mkdir("files_copy", (err) => {
          if (err) throw new Error("FS operation failed");
        });
        throw err;
      }

      files.forEach((file) => {
        fs.copyFile(`files/${file}`, `files_copy/${file}`, (err) => {
          if (err) throw new Error("FS operation failed");
        });
      });
    });
  });
};

copy();
