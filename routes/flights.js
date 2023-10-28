var express = require('express');
var router = express.Router();
const flightsController = require('../controllers/flights');

/* GET users listing. */
router.get('/', flightsController.index);

router.get('/new', flightsController.new);

router.post('/', flightsController.create);


module.exports = router;
