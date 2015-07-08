var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  if(req.body.userName === 'Todd' && req.body.password === '123456') {
    res.send({
      authentication: 'success'
    });
  }
  else {
    res.status(403).send({
      authentication: 'fail'
    });
  }
});

module.exports = router;
