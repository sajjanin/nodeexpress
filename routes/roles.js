var express = require('express');
var router = express.Router();
var debug = require('debug')('routes:roles');
/* GET users listing. */
router.get('/', function(req, res, next) {
  debug('get for / for roles route');
  res.send('respond with a resource');
});

module.exports = router;
