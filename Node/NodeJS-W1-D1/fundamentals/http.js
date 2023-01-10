const http = require('http');

http.createServer((request, response) => {
    // console.log(request)
    response.write('Hello World!!!!!');
    response.end();
}).listen(8001);