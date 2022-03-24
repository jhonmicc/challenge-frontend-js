var express = require('express');
var router = express.Router();
var pagesRouter = require('./pages');

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('dashboard', { title: 'Dashboard' });
// });

router.use(pagesRouter);

module.exports = router;