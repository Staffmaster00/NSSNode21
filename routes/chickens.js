'use strict';
const { Router } = require('express');
const router = Router();

const { getTheChicken } = require('../controllers/chickenCtrl.js');

router.get('../templates/chickens.html', getTheChicken)