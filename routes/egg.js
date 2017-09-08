'use strict';
const { Router } = require('express');
const router = Router();

const { getOrTheEgg } = require('../controllers/eggCtrl.js');

router.get('../templates/egg.html', getOrTheEgg)