var express = require('express');
var glob = require('glob');
var config = require('../../resources/config/config');
var router = express.Router();

var controllerHome = require(config.root+'/app/controllers/home');

router.get('/', controllerHome.home);

module.exports = router;   