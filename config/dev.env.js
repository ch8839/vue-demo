'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const env = require('../env') 
const port = process.env.PORT

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: `"http://localhost:${port}"` //开发环境请求api
})
