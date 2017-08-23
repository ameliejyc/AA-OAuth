const express = require('express');
const router = express.Router();

const getHome = require('./home');
const sendHome = require('./users');

router.get('/', getHome.getHome);
router.get('/', sendHome.sendHome);

module.exports = router;
