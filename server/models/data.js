const theDatabase = require('../config/db.js').theDb; //引入数据库
const mapSchema = theDatabase.import('../schema/markers.js'); 


//把通过Pet.findAll()返回的一个或一组对象称为Model实例
const getAllMarkerInfo = async function(name){
    const markerInfo=await mapSchema.findAll()
    return markerInfo
}

module.exports = {
    getAllMarkerInfo
}