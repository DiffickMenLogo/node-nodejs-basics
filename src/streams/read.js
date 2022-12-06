import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const _dirname = dirname(fileURLToPath(import.meta.url)) + "/";

const read = async () => {
  const readStream = createReadStream(_dirname + "files/fileToRead.txt");
  readStream.pipe(process.stdout);
};

await read();
