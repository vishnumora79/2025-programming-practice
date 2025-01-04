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