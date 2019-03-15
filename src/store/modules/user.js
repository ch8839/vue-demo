import request_login from '@/api/login'
import getUser from '@/api/getUserInfo'
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  roles: []

}

const actions = {
  async Login({commit}, form) {
    // const username = form.username.trim() //从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符
    return new Promise(async (resolve, reject) => {
      try {
        const res = await request_login.login(form)
        const token = res.data.token
        setToken(token)
        commit('SET_TOKEN', token)
        resolve(res.data)
      } catch (err) {
        reject(err)
      }
    })
  },

  LogOut({commit}){
      commit('SET_TOKEN','')
      removeToken()  
  },

  async getInfo({commit, state}){
    return new Promise(async (resolve,reject)=>{
      try{
        if(!state.name){
          const res = await getUser.info()
          console.log("getInfo",res)
          commit('SET_USER_INFO', res.data.res)
          resolve(res.data.res)
        }else{
          commit('SET_USER_INFO', state.name)
        }
      }catch (err) {
        reject(err)
      }
    })
    
  }
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },

  SET_USER_INFO: (state, data)=> {
    state.name= data
  }
}

export default {
  state,
  mutations,
  actions
}
