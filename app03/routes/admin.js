const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send(`<form action="/product" method="POST">
                <input type="text" name="bejovo-adat">
                <button type="submit">Küldés</button>
            </form>`); 
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;