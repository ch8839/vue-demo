let dotenv = require('dotenv');
console.log('process.env.NODE_ENV', process.env.NODE_ENV)
let path = process.env.NODE_ENV == 'production' ? '.env' : '.env.dev'
console.log('process path', path)
dotenv.config({path, silent: true})