const controller = require('../controller/product.js');
const router = require('express').Router();

router.get('/getAll', controller.findAll);
router.post('/add', controller.create);

exports.router = router;