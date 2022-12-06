import { createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const _dirname = dirname(fileURLToPath(import.meta.url)) + "/";

const write = async () => {
  const writeStream = createWriteStream(_dirname + "files/fileToWrite.txt");
  writeStream.on("error", (err) => {
    console.log(err);
  });
  process.stdin.on("data", (data) => {
    writeStream.write(data);
    writeStream.close();
    process.exit();
  });
};

await write();
