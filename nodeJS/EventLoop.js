// // Experiment - 8
const fs = require("node:fs");

const readbleStream = fs.createReadStream(__filename);
readbleStream.close();

readbleStream.on("close", () => {
    console.log("this is from readable stream close event call back");
});

setImmediate(() => console.log("this is set intermediate"));
setTimeout(() => console.log("this is time out"), 0);
Promise.resolve().then(() => console.log("this is promize object"));
process.nextTick(() => console.log("this is next tick process"));


// // Experiment - 7
// setImmediate(() => console.log("set intermediate 1"));

// setImmediate(() => {
//     setImmediate(() => console.log("set intermediate 2"));
//     process.nextTick(() => console.log("inner next tick"));
//     Promise.resolve().then(() => console.log("inner promise"));
// });

// setImmediate(() => console.log("set intermediate 3"));



// // Experiment - 9
// const fs = require("node:fs");

// setTimeout(() => console.log("set timeout"), 0);
// setImmediate(() => console.log("set intermediate"));

// // Experiment - 8
// const fs = require("node:fs");

// fs.readFile(__filename, () => {
//     console.log("this is read file");
//     setImmediate(() => console.log("set intermediate"));
//     process.nextTick(() => console.log("inner next tick"));
//     Promise.resolve().then(() => {
//         console.log("inner promise ");
//     });
// });


// // Experiment - 7
// const fs = require("node:fs");

// setTimeout(() => console.log("set timeout"), 0);
// fs.readFile(__filename, () => console.log("read File 1"));
// setImmediate(() => console.log("set intermediate 1"))
// fs.readFile(__filename, () => console.log("read File 2"));
// setImmediate(() => console.log("set intermediate 2"))
// // Experiment - 6
// const fs = require("node:fs");

// fs.readFile(__filename, () => console.log("read file"));
// process.nextTick(() => console.log("next Tick"));
// Promise.resolve().then(() => console.log("promise"));

// // Experiment - 5
// setTimeout(() => console.log("set timeout 1"), 1000);
// setTimeout(() => {
//     console.log("set timeout 2");
//     process.nextTick(() => {
//         console.log("nexttick inside set timeout");
//     });
// }, 500);
// setTimeout(() => console.log("set timeout 3"), 0);

// // Experiment - 4
// setTimeout(() => console.log("set timeout 1"), 1000);
// setTimeout(() => console.log("set timeout 2"), 500);
// setTimeout(() => console.log("set timeout 3"), 0);

// // Experiment - 3
// process.nextTick(() => console.log("This is nextTick 1"));
// process.nextTick(() => {
//     console.log("This is nextTick 2");
//     process.nextTick(() => {
//         console.log('This is the inner tick inside next tick');
//     });
// });
// process.nextTick(() => console.log("This is nextTick 3"))


// Promise.resolve().then(() => console.log("This is Promise 1"));
// Promise.resolve().then(() => {
//     console.log("This is promise 2");
//     process.nextTick(() => {
//         console.log("This is the inner tick inside promise block");
//     });
// });
// Promise.resolve().then(() => console.log("This is promise 3"));


// // Experiment - 2
// Promise.resolve().then(() => {
//     console.log("This is Promise.resolve 1");
// });

// process.nextTick(() => console.log("This is process.nextTick"));



// // Experiment - 1
// console.log("Console .log 1");
// process.nextTick(() => {console.log("This is process.nextTick")});
// console.log("console.log 2");


