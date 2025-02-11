import { Transform } from "stream";
const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().split("").reverse().join(""));
      callback();
    },
  });
  process.stdin.on("data", (data) => {
    reverseStream.write(data);
    reverseStream.end();
    process.exit();
  });
  reverseStream.pipe(process.stdout);
};

await transform();
