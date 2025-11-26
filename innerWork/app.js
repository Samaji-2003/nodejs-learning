//globle object
import{add,counter} from './count.js';
let events = require('events');
let util = require('util');

let Person = function(name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);//util.inherits Makes one object inherit powers of another

let james = new Person('james');
let mary = new Person('mary');
let ryu = new Person('ryu');

let people = [james, mary, ryu];

people.forEach(function(Person) {
    Person.on('speak', function(msg) {
        console.log(Person.name + ' said: ' + msg);
    });
}); 

james.emit('speak', 'Hello everyone!');
mary.emit('speak', 'Good morning!');
ryu.emit('speak', 'Hi there!');

let eventEmitter = new events.EventEmitter();


eventEmitter.on('greet', function() {
    console.log("Greetings from event emitter!");
});

eventEmitter.emit('greet');

setTimeout(()=> {
    console.log("Hello World");
}, 3000);

console.log(__dirname);
console.log(__filename);

console.log(counter(['apple', 'banana', 'orange']));
console.log(add(5, 3));
console.log("Value of PI is: " + PI);

