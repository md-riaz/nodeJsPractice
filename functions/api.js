const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        'path' : 'Home',
        'firstName' : 'MD Riaz'
    });
});

router.get('/json', (req, res) => {
    res.json({
        'path': 'json',
        'author' : 'again mdriaz'
    });
});

app.use('/', router);

module.exports.handler = serverless(app);