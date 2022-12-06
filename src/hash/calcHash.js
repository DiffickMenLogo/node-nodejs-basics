import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const _dirname = dirname(fileURLToPath(import.meta.url)) + "/";
const { createHash } = await import("node:crypto");
const calculateHash = async () => {
  const hash = createHash("sha256");

  const stream = createReadStream(
    _dirname + "files/fileToCalculateHashFor.txt"
  );
  stream.pipe(hash).setEncoding("hex").pipe(process.stdout);
};

await calculateHash();
