const Router = require('koa-router')
let router = new Router()

const userController = require('../controller/user.js')
const dataController = require('../controller/data.js')

console.log("router1")
router.get('/user' , userController.getUserInfo)
router.get('/student/:id' , userController.getStudentInfo)
router.post('/user/login' , userController.login)
router.get('/user/info' , userController.getLoginInfo)
router.get('/data/getMarkerInfo' , dataController.getMarkerInfo)
console.log("router2")
module.exports= router