//globle object
import{add,counter} from './count.js';

setTimeout(()=> {
    console.log("Hello World");
}, 3000);

console.log(__dirname);
console.log(__filename);

console.log(counter(['apple', 'banana', 'orange']));
console.log(add(5, 3));
console.log("Value of PI is: " + PI);