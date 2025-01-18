const { readFile } = require("fs");

function onDone(content) {
  console.log(content);
}

readFile("a.txt", onDone);
onDone("Inside OnDOne");
console.log("Hello World");
for (let i = 0; i < 10; i++) {
  console.log("Hi Ganni bro");
}
