'use strict';

let express = require('express');
let app = express();
require('dotenv').config();
let routes = require('./routes/');

const logParams = (req, res, next) => {
    console.log(`req params`, req.params);
    next();
}
let time = new Date().toString();
app.use(logParams);
app.use((req, res, next)=>{
    if(req.path.includes('egg')){
        console.log(`You found the Easter Egg at ${time}
        
                ,ggadddd8888888bbbbaaa,_
             ,ad888,      \`Y88,      \`Y888baa,
           ,dP"  "Y8b,      \`"Y8b,      \`"Y8888ba,
          ,88      "Y88b,      \`"Y8ba,       \`"Y88Ya,
         ,P88b,      \`"Y88b,       \`"Y8ba,_       ""8a,
        ,P'"Y88b,        "Y88b,        \`"Y8ba,_      \`Ya,
        8'    "Y88b,        ""Y8ba,         ""Y8ba,_   \`8,
        8b       "Y88b,         ""Y8ba,_         ""Y88baaY
        88b,        "Y88ba,         ""Y88ba,_         \`""P
        8Y88ba,        ""Y88ba,_         ""Y88ba,,_    ,P'
        \`b,"Y88ba,         ""Y88baa,_         """Y888bd"
         \`b, \`"Y88ba,_         ""Y888baa,_         ,8"
          \`8,   \`""Y88ba,_         \`"""Y8888baaaaaP"
           \`Ya,     \`""Y888ba,_           \`"d88P"
             \`"Yb,,_     \`""Y888baa,__,,adP""'
                 \`"""YYYY8888888PPPP"""'"`);
    }
    next()
});
app.use(`/`, routes);

app.use((req, res, next)=>{
    let err = new Error('Not Found! Go find the eggs!');
    err.status = 404;
    next(err);
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