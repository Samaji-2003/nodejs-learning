//module

var counter = function(arr) {
    return 'There are ' + arr.length + ' elements in this array';
}

console.log(counter(['apple', 'banana', 'orange']));

let add = function(a, b) {
    return `The sum of ${a} and ${b} is ${a + b}`;
}



module.exports.counter = counter;
module.exports.add = add;