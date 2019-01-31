const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    //process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang="en">');
    res.write(`<head>
                <meta charset="UTF-8">
                <meta name="viewport" 
                content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>My First Node Page</title>
                </head>`);
    res.write('<body><h1>Üdvözlet Node.js-ből!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);