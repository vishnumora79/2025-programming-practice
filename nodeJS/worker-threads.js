const { parentPort } = require("node:worker_threads");

let j;
for (j = 0; j < 60000; j++) {
  j++;
}

parentPort.postMessage(j);
