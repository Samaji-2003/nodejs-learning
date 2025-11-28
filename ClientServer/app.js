let http = require('http');

let server = http.createServer((req, res) => {
    console.log('Request received'+ req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});//text/plain only shows text no html tags
    var obj = {
        name: 'Samaji',
        job: 'student'
    };
    res.end(JSON.stringify(obj));
});

server.listen(4000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:4000/');