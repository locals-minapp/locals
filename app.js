//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var that = this
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.request({
      url: 'http://localhost:8080/locals/oauth/token?username=794054202&password=test',
      data: {},
      method: 'POST',
      header: {
        "Content-Type": "application/json;charset=UTF-8"},
      success: function(res){
        console.log(res.data.message)
        that.globalData.authenticationToken = res.data.message
      },
      fail: function(res) {
      },
    })
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  getAuthenticationToken: function () {
    wx.request({
      url: app.globalData.apiUrl + '/oauth/token?username=794054202&password=test',
      data: {},
      method: 'POST',
      header: {
        "Content-Type": "application/json;charset=UTF-8"}, // 设置请求的 header
      success: function(res){
        that.globalData.authenticationToken = res.data.message
        return res.data.message
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  globalData:{
    userInfo:null,
    searchKeyword:'',
    searchStartDate:'',
    searchEndDate:'',
    searchPeopleCount:1,
    apiUrl:'http://localhost:8080/locals/api',
    serviceUrl:'http://locallocalhost.tunnel.2bdata.com',
    authenticationToken:''
  }
})