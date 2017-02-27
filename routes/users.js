var express = require('express');
var router = express.Router();
var debug = require('debug')('routes:users');
/* GET users listing. */
router.get('/', function(req, res, next) {
  debug('get for / for users route');
  res.send('respond with a resource');
});

module.exports = router;
