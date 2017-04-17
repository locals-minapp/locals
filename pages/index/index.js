//index.js
//获取应用实例
var houseData=require('../../data/house-data.js')
var app = getApp()
Page({
  data: {
    searchMoreShow:false,
    userInfo: {}
  },
  //事件处理函数
  bindSearchMoreTap: function() {
    this.setData({
      searchMoreShow:true
    })
  },
  bindHindSearchMoreTap:function() {
    this.setData({
      searchMoreShow:false
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
      url: '../house/house-list'
     
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
