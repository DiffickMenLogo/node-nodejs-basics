import { createUnzip } from "zlib";
import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";

const decompress = async () => {
  const readStream = createReadStream("files/archive.gz");
  const writeStream = createWriteStream("files/fileToCompress.txt");
  const unzip = createUnzip();
  pipeline(readStream, unzip, writeStream, (err) => {
    if (err) {
      console.error("Pipeline failed.", err);
    } else {
      console.log("Pipeline succeeded.");
    }
  });
};

await decompress();
