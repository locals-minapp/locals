// pages/house/houseList.js
var houseData=require('../../data/house-data.js')
var app = getApp()
Page({
  data:{
    searchMoreShow:false,
    searchKeyword:'',
    searchStartDate:'',
    searchEndDate:'',
    searchPeopleCount:app.globalData.searchPeopleCount,
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(houseData.houseList);
    this.setData({
      houseList:houseData.houseList
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    var that = this
     if (app.globalData.searchKeyword != '') {
      that.setData({
        searchKeyword:app.globalData.searchKeyword
      })
    }
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
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
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
  onScrollLower:function(event){
    console.log("onScrollLower");
    wx.showNavigationBarLoading();
    this.processHouseListData(houseData.houseList);
  },
  processHouseListData:function(houseList){
    var totalHouseList = {};
    if(!this.data.isEmpty){
      totalHouseList = this.data.houseList.concat(houseList);
    } else {
      totalHouseList = houseList;
      this.setData({
        isEmpty:false
      })
    }
    this.setData({
        houseList:totalHouseList
    })
    console.log('call  wx.hideNavigationBarLoading')
    wx.hideNavigationBarLoading()
    wx.stopPullDownRefresh()
  }
})