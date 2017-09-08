'use strict';
const { Router } = require('express');
const router = Router();

const { getOrTheEgg } = require('../controllers/eggCtrl.js');

router.get('/see-our-eggs', getOrTheEgg)

module.exports = router;