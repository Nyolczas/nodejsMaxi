const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        // ha az url az alap, akkor ezt adja vissza alapból
        res.write('<html lang="en">');
        res.write(`<head>
                        <meta charset="UTF-8">
                        <meta name="viewport" 
                        content="width=device-width, initial-scale=1.0">
                        <meta http-equiv="X-UA-Compatible" content="ie=edge">
                        <title>Enter Message</title>
                    </head>`);
        res.write(`<body>
                        <form action="/message" method="POST">
                            <input type="text" name="message">
                            <button type="submit">Küldés</button>
                        </form>
                    </body>`);
        res.write('</html>');
        return res.end(); // innen nem megy tovább
    }
    
    // az üzenet beírása után ezt adja vissza
    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (adatDarab) => { //gyűjti a bejövő adatot
            //console.log(adatDarab);
            body.push(adatDarab);
        });
        return req.on('end', () => { // összeállítja a bejövő adatot.
            const parsedBody = Buffer.concat(body).toString();
            //console.log(parsedBody);
            const message = parsedBody.split('=')[1]; // a kulcs-érték párból kinyeri az értéket
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/'); // visszairányítja az induló oldalra.
                return res.end(); // innen nem megy tovább
            });
        });
    }
    
    // ezt adja vissza minden más esetben
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
};

module.exports = requestHandler;
