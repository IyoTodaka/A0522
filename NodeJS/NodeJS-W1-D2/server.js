const http = require('http'); //import http from 'http' (ES6)
const path = require('path');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
    // console.log(req);

    if(req.url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>My Home Page</title></head>')
        res.write('<body><h1>Hello World</h1></body>')
        res.write('</html>')
        res.end(); 
    }

    // if(req.url === '/about'){
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/html')
    //     res.end('<h1>About Page</h1>');
    // }

    // const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    // const extName = path.extname(filePath);
    // let contentType = "text/html"

    // switch (extName) {
    //     case ".js":
    //         contentType = "text/javascript";
    //         break;
    //     case ".css":
    //         contentType = "text/css";
    //         break;
    //     case ".json":
    //         contentType = "application/json";
    //         break;
    //     case ".png":
    //         contentType = "images/png";
    //         break;
    //     case ".jpg":
    //         contentType = "image/jpg";
    //         break;
    // }

    // if(contentType === "text/html" && extName === "") filePath += ".html";

    // fs.readFile(filePath, (err, content) => {
    //     if(err){
    //         //Error
    //         if(err.code === 'ENOENT'){
    //             //Page not found
    //             //serve a 404 page
    //             fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
    //                 res.writeHead(404, {'Content-Type': 'text/html'});
    //                 res.end(content, 'utf8');
    //             })
    //         }else{
    //             //Some server error
    //             //serve a 500 page
    //             res.writeHead(500);
    //             res.end(`Server Error: ${err.code}`);
    //         }
    //     }else{
    //         //Success
    //         res.writeHead(200, {'Content-Type': contentType});
    //         res.end(content, 'utf8');
    //     }
    // })

    if(req.url === '/msg' && req.method === 'GET'){
        res.write(`
            <html>
                <head>
                    <title>Send a message</title>
                </head>
                <body>
                    <form action="/msg" method="POST">
                        <input type="text" name="message" placeholder="Enter your message">
                        <button type="submit">Submit</button>
                    </form>
                </body>
            </html>
        `)
    }


    if(req.url === '/msg' && req.method === 'POST'){
        // console.log(req.body);

        const body = [];

        req.on('data', (chunk) => {
            // console.log(chunk);
            body.push(chunk);
        })

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);

            const message = parsedBody.split('=')[1];

            fs.writeFile('message.txt', message, (err) => {
                if(err) throw err;
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            })
        })
    }

    
});

server.on('listening', () => {
    console.log('Listening on port 8001');
})

server.listen(8001);