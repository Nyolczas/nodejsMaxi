const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
    res.send('<h1>Ez az "Add-product" oldal.</h1>'); // az express automatikusan belerakja egy html vázba.
});

app.use('/', (req, res, next) => {
    console.log('Benne vagyunk egy másik Middleware-ben!');
    //res.setHeader(''); // ezzel felülírhazjuk az alapértelmezett headert, amit az express ad
    res.send('<h1>Hello az Express.js-ből!!!</h1>'); // az express automatikusan belerakja egy html vázba.
});

app.listen(3000);