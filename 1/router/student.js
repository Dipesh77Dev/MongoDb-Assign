const controller = require('../controller/student.js');

const router=require('express').Router();

// router.get('/:id',controller.findById);
router.get('/getStudentDetails',controller.find);
router.post('/add',controller.create);
// router.put('/:id',controller.update);
// router.delete('/:id',controller.deleteById);
// router.delete('/',controller.deleteAll);

exports.router = router;