'use strict';
const { sendFile } = require('fs');
const { join } = require('path')
module.exports.getOrTheEgg = (req, res, next) => {
    res.sendFile(join(__dirname, '../templates/egg.html'));
};