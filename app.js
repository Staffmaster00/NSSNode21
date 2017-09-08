'use strict';

let express = require('express');
let app = express();
require('dotenv').config();

let routes = require('./routes/');
const logParams = (req, res, next) => {
    console.log(`req params`, req.params);
    next();
}

app.use(logParams);
app.use(`http://localhost:8080/`, routes);

app.use((req, res, next)=>{
    let err = new Error('Not Found! Go find the eggs!');
    err.status = 404;
    next();
});

app.use((err, req, res, next)=>{
    res.status(err.status || 500);
    res.json({
        message: "The chickens are rebelling",
        err: err
    });
});

let port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});