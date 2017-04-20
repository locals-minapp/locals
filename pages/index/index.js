//index.js
//获取应用实例
var houseData=require('../../data/house-data.js')
var app = getApp()
Page({
  data: {
    searchMoreShow:false,
    searchKeyword:'',
    searchStartDate:'',
    searchEndDate:'',
    searchPeopleCount:app.globalData.searchPeopleCount,
    userInfo: {}
  },
  //事件处理函数
  bindSearchMoreTap: function() {
    this.setData({
      searchMoreShow:true
    })
  },
  bindHindSearchMoreTap: function() {
    this.setData({
      searchMoreShow:false
    })
  },
  bindCitySelectTap: function(e) {
    wx.navigateTo({
      url: '../citySelect/city-select'
     
    })
  },
  bindDateSelectTap: function(e) {
    wx.navigateTo({
      url: '../datePicker/dateSelect'
     
    })
  },
  onLoad: function () {
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
  onShow: function () {
    var that = this
    if (app.globalData.searchKeyword != '') {
      that.setData({
        searchKeyword:app.globalData.searchKeyword
      })
    }
    console.log(that.data.searchKeyword)
    if (app.globalData.searchStartDate != '') {
      that.setData({
        searchStartDate:app.globalData.searchStartDate
      })
    }
    if (app.globalData.searchEndDate != '') {
      that.setData({
        searchEndDate:app.globalData.searchEndDate
      })
    }
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
  },
  catchCityTap:function(event){
    var dataset = event.currentTarget.dataset;
    wx.navigateTo({
      url: '../house/house-list?city=' + dataset.cityName
     
    })
  }
})
