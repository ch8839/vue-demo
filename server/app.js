const path = require('path')
const Koa = require('koa')
const Router = require('koa-router')
const index = require('./routers/index.js')
const bodyparser = require('koa-bodyparser')
const cors = require('koa2-cors')
const json = require('koa-json')
const static = require('koa-static')
const env = require('../env') 

const app = new Koa()
const router = new Router()
const port = process.env.PORT

app.use(cors()) //use cors一定要挂载到路由之前
app.use(bodyparser()) //use bodyparser要挂载到路由之前
app.use(json())

app.use(async function (ctx, next) {
  try{
    await next()
  }catch(err){
    ctx.body={
      success:false
    }
    throw err
  }
})

router.use(index.routes())
app.use(router.routes()) // 将路由规则挂载到Koa上。
app.use(static(
  path.join(__dirname, '../dist')
))
// console.log("env", process.env)
app.listen(port, () => {
    console.log(`Koa is listening on port ${port}`);
  });

module.exports = app