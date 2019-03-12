const path = require('path')
const koa = new (require('koa'))()
const router = require('koa-router')()
const userRoute = require('./routers/index.js')
const bodyparser = require('koa-bodyparser')
const cors = require('koa2-cors');  



router.use(userRoute.routes())
koa.use(router.routes()); // 将路由规则挂载到Koa上。
koa.use(bodyparser())
koa.use(cors());
koa.listen(9091, () => {
    console.log('Koa is listening on port 9091');
  });