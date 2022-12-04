import { readdir } from "fs";

const list = async () => {
  readdir("files", (err, files) => {
    if (err) throw new Error("FS operation failed");
    console.log(files);
  });
};

await list();
