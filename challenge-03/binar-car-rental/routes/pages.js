const router = require('express').Router();
const page = require('../controllers/pagesController');

router.get('/', page.dashboard);
router.get('/cars', page.cars);
router.get('/sign-in', page.sign_in);
module.exports = router;