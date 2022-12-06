import { createGzip } from "zlib";
import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const _dirname = dirname(fileURLToPath(import.meta.url)) + "/";

const compress = async () => {
  // implement function that compresses fileToCompress.txt to archive.gz using zlib and Streams API
  const readStream = createReadStream(_dirname + "files/fileToCompress.txt");
  const writeStream = createWriteStream(_dirname + "files/archive.gz");
  pipeline(readStream, createGzip(), writeStream, (err) => {
    if (err) {
      console.error("Pipeline failed.", err);
    } else {
      console.log("Pipeline succeeded.");
    }
  });
};

await compress();
