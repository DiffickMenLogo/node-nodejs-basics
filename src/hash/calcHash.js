import { createReadStream } from "fs";
const { createHash } = await import("node:crypto");
const calculateHash = async () => {
  const hash = createHash("sha256");

  const stream = createReadStream("files/fileToCalculateHashFor.txt");
  stream.pipe(hash).setEncoding("hex").pipe(process.stdout);
};

await calculateHash();
