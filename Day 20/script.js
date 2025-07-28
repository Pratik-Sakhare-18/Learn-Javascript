//  setTimeout

setTimeout(() => {
    console.log("Hello World");
}, 2000); // 2 seconds





// setInterval

setInterval(() => {
    console.log("Hello World");
}, 2000); // 2 seconds



// clearInterval

let intervalname = setInterval(() => {
    console.log("Hello World");
}, 2000); // 2 seconds

setTimeout(() => {
    clearInterval( intervalname);
}, 5000); // 5 seconds
