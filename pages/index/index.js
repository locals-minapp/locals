//index.js
//获取应用实例
var houseData=require('../../data/house-data.js')
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    console.log(houseData.specialCityList);
    this.setData({
      goodHouseList:houseData.goodHouseList,
      specialCityList:houseData.specialCityList
    })
  },
  onMoreTap:function(event){
    var dataset = event.currentTarget.dataset;
    console.log(dataset);
    wx.navigateTo({
      url: '../house/houseList'
     
    })
  },
  onHouseTap:function(event){
    var houseId = event.currentTarget.dataset.houseId;
    console.log(houseId);
    wx.navigateTo({
      url:"../house/house-gallery/house-gallery?houseId="+houseId
    })
  }
})
