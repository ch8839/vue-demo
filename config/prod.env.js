'use strict'
const env = require('../env') 
console.log('env.js', process.env)
const port = process.env.PORT
module.exports = {
  NODE_ENV: '"production"',
  BASE_API: `"http://localhost:${port}"` //生产环境请求api
}
