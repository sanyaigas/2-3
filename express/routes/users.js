var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

/* GET users listing. */
router.get('/', userController.all)
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/', userController.store)
router.get('/:id', userController.show)
router.put('/:id', userController.update)
router.delete('/:id', userController.destroy)

module.exports = router;
