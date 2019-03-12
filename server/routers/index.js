const userController = require('../controller/user.js');
const router = require('koa-router')();

router.get('/user' , userController.getUserInfo)
router.get('/student/:id' , userController.getStudentInfo)
router.post('/user/login' , userController.login)

module.exports= router;