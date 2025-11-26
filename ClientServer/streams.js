let http = require('http');
let fs = require('fs');


let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/read.txt', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');
//var myReadStream = fs.createReadStream(__dirname + '/read.txt', 'utf8');
//var myWriteStream = fs.createWriteStream(__dirname + '/write.txt');

/*myReadStream.on('data', function(chunk){
    console.log('New chunk received:');
    console.log(chunk);
    myWriteStream.write(chunk);
});*/

//myReadStream.pipe(myWriteStream);



