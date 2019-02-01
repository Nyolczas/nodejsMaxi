const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Benne vagyunk a Middleware-ben!');
    next(); // A next engdélyezi a továbbjutást a következő Middleware-be.
});

app.use((req, res, next) => {
    console.log('Benne vagyunk egy másik Middleware-ben!');
    //res.setHeader(''); // ezzel felülírhazjuk az alapértelmezett headert, amit az express ad
    res.send('<h1>Hello az Express.js-ből!!!</h1>'); // az express automatikusan belerakja egy html vázba.
});

app.listen(3000);