import login from '@/api/login'

const state={
        
    }

const actions={
    async Login({commmit}, form){
        const res= await login.login(form)
        if(res){
            return res.data.data
        }else{
            throw new Error
        }
    }
}

export default {
    state,
    actions
}