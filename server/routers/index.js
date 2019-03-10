const userController = require('../controller/user.js');
const router = require('koa-router')();

router.get('/user' , userController.getUserInfo)
router.get('/student/:id' , userController.getStudentInfo)

module.exports= router;