'use strict';
const { Router } = require('express');
const router = Router();

const { getTheChicken } = require('../controllers/chickenCtrl.js');

router.get('/see-our-chickens', getTheChicken);

module.exports = router;