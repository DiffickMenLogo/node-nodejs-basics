import { createUnzip } from "zlib";
import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const _dirname = dirname(fileURLToPath(import.meta.url)) + "/";

const decompress = async () => {
  const readStream = createReadStream(_dirname + "files/archive.gz");
  const writeStream = createWriteStream(_dirname + "files/fileToCompress.txt");
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
