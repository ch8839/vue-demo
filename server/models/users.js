const theDatabase = require('../config/db.js').theDb; //引入数据库
const userSchema = theDatabase.import('../schema/user.js'); 
const studentInfo = theDatabase.import('../schema/list2.js'); 

const getUserByName = async function(name){
    const userInfo=await userSchema.findOne({
        where:{
            username:name
        }
    })
    return userInfo
}

const getStudentById = async function(id){
    const userInfo=await studentInfo.findOne({
        where:{
            number:id
        }
    })
    return userInfo
}

module.exports = {
    getUserByName,
    getStudentById

}