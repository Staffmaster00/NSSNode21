'use strict';

const { Router } = require('express');
const router = Router();

// router.use(require('./egg'));
// router.use(require('./chickens'));

router.use('/see-our-chickens', require('./chickens'));
router.use('/see-our-eggs', require('./egg'));

router.get('/', (req, res) => {
  res.json({
    "eggs": "/see-our-eggs",
    "chickens": "/see-our-chickens"
  });
});

module.exports = router;