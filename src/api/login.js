import request from "../utils/request"

const login = function(params) {
  console.log("login提交参数",params)
  return request.post('/user/login',params)
}


const logout = function() {
  return request({
    url: '/user/logout',
    method: 'post'
    })
}
export default {
  login,
  logout
}




