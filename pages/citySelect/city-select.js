var util = require('../../utils/util.js')
var app = getApp()
Page({
  data:{
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
    let url = app.globalData.apiUrl + '/wordBooks?kindCode=02'
    util.httpGet(url, (res)=>{this.setData({
      cityList:res
    })
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  bindCitySelectTap:function(e){
    let keyword = e.currentTarget.dataset.name
    let keywordType = 'city'
    app.globalData.searchKeyword = keyword
    console.log(app.globalData.searchKeyword)
    wx.navigateBack()
  }
})