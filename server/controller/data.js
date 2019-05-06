const markerModel = require('../models/data.js');


const getMarkerInfo = async function (ctx) {
  const markerInfo = await markerModel.getAllMarkerInfo()
  if (markerInfo) {
    // let markerInfoList = markerInfo.map((item,index)=>{
    //     item.position = [item.lng, item.lat]
    //     delete item.id
    //     delete item.lng
    //     delete item.lat
    //     return item
    // })  
    ctx.body = {
      success: true,
      res: markerInfo,
      msg: '获取成功'
    }
  } else {
    ctx.body = {
      success: false,
      msg: '获取失败'
    }
  }

}



module.exports = {
    getMarkerInfo
}
