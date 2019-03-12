import request from "../utils/request"

const getUserInfo = function() {
    return request({
        url: '/user',
        method: 'get'
      })
}

const getStudentInfo = function(id) {
  return request({
      url: '/student/'+id,
      method: 'get'
    })
}
export default {
  getUserInfo,
  getStudentInfo
}




