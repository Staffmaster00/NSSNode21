'use strict';
const { sendFile } = require('fs');
const { join } = require('path')
module.exports.getTheChicken = (req, res, next) => {
    res.sendFile(join(__dirname, '../templates/chickens.html'));
};