const cluster = require("node:cluster");
const http = require("node:http");
const os = require("node:os");

console.log(os.cpus().length);

if(cluster.isMaster) {
    console.log(`Master process on ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
} else {
    console.log(`Worker process on ${process.pid} is running`);
    const server = http.createServer((req, res) => {
      if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end("Home page");
      } else if (req.url === "/slow-page") {
        for (let i = 0; i < 60000; i++) {
          res.writeHead(200, { "content-type": "text/plain" });
          res.end("Slow page");
        }
      }
    });
}