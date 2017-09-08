'use strict';
const { readFile } = require('fs');

module.exports.getOrTheEgg = (req, res, next) => {
    readFile('../templates/egg.html', (err, data)=>{
        if (err) next(err);
        res.send(data);
    });
};