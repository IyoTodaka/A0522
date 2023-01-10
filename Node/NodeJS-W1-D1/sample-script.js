// import {test} from ('test')
const test = require('./test')

test()

console.log("hello world");

const lateFunc = () => {
  console.log("This is done asynchronously");
}

console.log("This is the first log");
setTimeout(lateFunc, 3000);
console.log("This is the second log");

console.log(__dirname);
