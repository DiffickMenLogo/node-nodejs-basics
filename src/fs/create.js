import * as fs from "fs";
const create = async () => {
  fs.writeFile("fresh.txt", "I am fresh and young", (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await create();
