import { createWriteStream } from "fs";

const write = async () => {
  const writeStream = createWriteStream("files/fileToWrite.txt");
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
