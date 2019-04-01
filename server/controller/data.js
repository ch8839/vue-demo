const markerModel = require('../models/data.js');


const getMarkerInfo = async function () {
  const markerInfo = await markerModel.getAllMarkerInfo()
  if (markerInfo) {
    // let markerInfoList = markerInfo.map((item,index)=>{
    //     item.position = [item.lng, item.lat]
    //     delete item.id
    //     delete item.lng
    //     delete item.lat
    //     return item
    // })  
    this.body = {
      success: true,
      res: markerInfo,
      msg: '获取成功'
    }
  } else {
    this.body = {
      success: false,
      msg: '获取失败'
    }
  }

}



module.exports = {
    getMarkerInfo
}
