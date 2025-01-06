// const data = require("./data.json");

// console.log(data.name);
// console.log(data);


// Path
const path = require("node:path");

// console.log(__dirname);
// console.log(__filename);

// console.log(path.basename(__filename)); 
// console.log(path.basename(__dirname)); 


// console.log(path.extname(__dirname));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));
// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));

// console.log(path.join("folder1", "folder2", "index.html"));
// console.log(path.join("/folder1", "folder2", "index.html"));
// console.log(path.join("folder1", "//folder2", "index.html"));
// console.log(path.join("folder1", "folder2", ".//index.html"));
// console.log(path.join("folder1", "folder2", "../index.html"));


// console.log(path.resolve());


// // events module

// const EventEmmiter = require("node:events");

// const emmiter = new EventEmmiter();

// emmiter.on("order-milk", () => {
//     console.log("order successful")
// });

// emmiter.on("order-milk", (quantity) => {
//     console.log("order successful and the ordered qunatity is:", quantity);
// });


// emmiter.emit("order-milk", "100ml");




// const PizzaShop = require("./pizza-shop");
// const DrinkMachine = require("./DrinkMachine");

// const pizzaShop = new PizzaShop();
// const drintMachine = new DrinkMachine();

// pizzaShop.on("order", (size, topping) => {
//     console.log(`Order received! Baking a ${size} pizza with ${topping}`);
//     drintMachine.serveDrink(size);
// })

// pizzaShop.order("large", "mushroom");
// pizzaShop.displayOrderNumber();


// // Streams nad Buffers

// const buffer = new Buffer.from("Vishnu");

// buffer.write("Codevolution");
// console.log(buffer);
// console.log(buffer.toJSON());
// console.log(buffer.toString());


// // fs module

// const fs = require("node:fs");

// console.log("First");

// const fileContents = fs.readFileSync("./file.txt", "utf-8");
// console.log(fileContents);

// console.log("Second");

// fs.readFile("./file.txt", "utf-8", (error, data) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// });

// console.log("Third");
// console.log("Fourth");
// console.log("Fifth");
// console.log("Sixth");





// fs.writeFileSync("./greet.txt", "Hello, World!");

// fs.writeFile("./greet.txt", " Hello Vishnu!", {flag : 'a'}, (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("File written");
//     }
// });


// fs with promises and async/await

// const fs = require("node:fs/promises");

// // fs.readFile("file.txt", "utf-8")
// // .then((data) => {console.log(data)})
// // .catch((error) => {console.log(error)})

// async function readFile() {
//     try {
//         const data = await fs.readFile("file.txt", "utf-8");
//         console.log(data);
//     } catch(error) {
//         console.log(error);
//     }
// }

// readFile();



// // streams in fs

// const fs = require("node:fs");

// console.log("before");

// const readbleStream = fs.createReadStream("./file.txt", {encoding : "utf-8", highWaterMark : 4});

// console.log("after");

// const writableStream = fs.createWriteStream("./file2.txt");

// console.log("second after");

// readbleStream.on("data", (chunk) => {
//     console.log(chunk);
//     writableStream.write(chunk);
// });



// http module

// const http = require("node:http");

// http.createServer((request, response) => {
//     // console.log(request);
//     // console.log(response);

//     const superHero = {
//         firstname : "Tony",
//         lastname : "Stark"
//     }
//     response.writeHead(200, {"content-type" : "application/json"});
//     // response.write("Hello");
//     response.end(JSON.stringify(superHero));
// }).listen(3000, () => {
//     console.log("Server running on port 3000");
// });


// // creating http server and sending a plain text response to client
// const http = require("node:http");

// http.createServer((request, response) => {
//     response.writeHead(200, {"content-type" : "text/plain"});
//     response.end("Hello, World!");
// }).listen(3000, () => {
//     console.log("Server running on port number 3000");
// })


// // creating http server and sending a JSON data to client
// const http = require("node:http");

// http.createServer((request, response) => {
//     const superHero = {
//         firstName : "Tony",
//         lastName : "Stark"
//     }
//     response.writeHead(200, {"content-type" : "application/json"});
//     response.end(JSON.stringify(superHero));
// }).listen(3000, () => {
//     console.log(3000);
// });

// // creating http server and sending HTTP file to client
// const http = require("node:http");

// http.createServer((req, res) => {
//     res.writeHead(200, {"content-type" : "text/html"});
//     res.end("<h1>Hello, World!</h1>");
// }).listen(3000, () => {
//     console.log(3000);
// });

// const http = require("node:http");
// const fs = require("node:fs");

// const server = http.createServer((req, res) => {
//     const name = "Vishnu";
//     res.writeHead(200, {"content-type" : "text/html"});
//     let html = fs.readFileSync("./index.html", "utf-8");
//     html = html.replace("{{name}}", name);
//     res.end(req.url);
//     // res.end(html);
// }).listen(3000, () => {
//     console.log(3000);
// })



// // http routing

// const http = require("node:http");

// const server = http.createServer((req, res) => {
//     if(req.url === '/') {
//         res.writeHead(200, {"content-type" : "text/plain"});
//         res.end("Home Page");
//     } else if(req.url === '/about') {
//         res.writeHead(200, {"content-type" : "text/plain"});
//         res.end("About Page");
//     } else if(req.url === '/api') {
//         res.writeHead(200, {"content-type" : "application/json"});
//         res.end(JSON.stringify({firstName : "Tony", lastName : "Stark"}));
//     } else {
//         res.writeHead(404, {"content-type" : "text/plain"});
//         res.end("Page Not Found");
//     }
// });


// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });




// libuv - thread pool

const crypto = require("node:crypto");

// const start = Date.now();

// // runs on main thread and blocking
// crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
// console.log(Date.now() - start);

const start = Date.now();
const MAX_CALLS = 5;

process.env.UV_THREADPOOL_SIZE = 16;

for(let i = 0; i < MAX_CALLS; i++) {
    crypto.pbkdf2("password", "salt", 10000, 512, "sha512", () => {
        console.log(`Hash: ${i + 1}`, Date.now() - start);
    });
}


