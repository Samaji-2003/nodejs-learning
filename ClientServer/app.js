let http = require('http');

let server = http.createServer((req, res) => {
    console.log('Request received'+ req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});

server.listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');