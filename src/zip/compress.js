import { createGzip } from "zlib";
import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";

const compress = async () => {
  // implement function that compresses fileToCompress.txt to archive.gz using zlib and Streams API
  const readStream = createReadStream("files/fileToCompress.txt");
  const writeStream = createWriteStream("files/archive.gz");
  pipeline(readStream, createGzip(), writeStream, (err) => {
    if (err) {
      console.error("Pipeline failed.", err);
    } else {
      console.log("Pipeline succeeded.");
    }
  });
};

await compress();
