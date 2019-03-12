import request from "../utils/request"

const login = function(params) {
  return request({
    url: '/user/login',
    method: 'post',
    params:params
  })
}

const getInfo = function(token) {
  return request({
      url: '/user/info',
      method: 'get',
      params:{ token }
    })
}

const logout = function() {
  return request({
    url: '/user/logout',
    method: 'post'
    })
}
export default {
  login,
  getInfo,
  logout
}




