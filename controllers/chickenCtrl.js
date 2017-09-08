'use strict';
const { readFile } = require('fs');

module.exports.getTheChicken = (req, res, next) => {
    readFile('../templates/chickens.html', (err, data)=>{
        if (err) next(err);
        res.send(data);
    });
};