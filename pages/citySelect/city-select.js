var app = getApp()
Page({
  data:{
    cityList:[
      {"name":"广州"},
      {"name":"北京"},
      {"name":"上海"},
      {"name":"重庆"},
      {"name":"青岛"}
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(app.globalData.a)
    console.log(app.globalData.searchKeyword)
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