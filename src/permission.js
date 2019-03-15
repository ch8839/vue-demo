import router from './router'
import store from './store'
import {getToken} from './utils/auth'

router.beforeEach((to,from,next) =>{
    if(getToken()){
        if(to.path === '/login'){
            next({path:'/'})
        }else{
            // if(store.state.roles.length==0){
            //     store.dispatch('GetInfo').then(res=>{
                    
            //     })
            // }
            next()
        }
    }else{
        if(to.path=='/login'){
            console.log("token确实没了已退出")
            next()
        }else{
            next('/login')
            console.log("token没了退出登录状态")           
        }       
        
    }
})