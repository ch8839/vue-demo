const userModel = require('../models/users.js');

const getUserInfo = async function(){
    const name = "admin"
    const user = await userModel.getUserByName(name)
    if(user){
        this.body = {
            success:true,
            res:user,
            msg:'获取成功'
        }
    }else{
        this.body = {
            success:false,
            msg:'获取失败'
        }
    }
    
}

const getStudentInfo = async function(){
    const id = this.params.id
    const student = await userModel.getStudentById(id)
    if(student){
        this.body = {
            success:true,
            res:student,
            msg:'获取成功'
        }
    }else{
        this.body = {
            success:false,
            msg:'获取失败'
        }
    }
    
}

const login = function(){
    // const form = this.request.body
    this.body={
        msg:"成功POST"
    }
}

module.exports= {
    getUserInfo,
    getStudentInfo,
    login
}