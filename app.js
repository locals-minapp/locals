//app.js
var config = require('libs/config.js');
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
  getGeocoding:function(obj,cb){//地理编码
    var that = this;
    var key = config.Config.webServerKey;
    var city = obj.city || "";
    var address = obj.address || "";
    var cb = cb || "";
    
    // console.log(this.globalData.batch);
    // console.log(key)
    // console.log(city)
    // console.log(address)
    console.log(cb)
    wx.request({
      url: 'http://restapi.amap.com/v3/geocode/geo?', 
      data: {
        batch: that.globalData.batch ,
        address: address,
        city: city,
        key: key
      },
      method:'GET',
      header: {
          'content-type': 'application/json;charset=UTF-8'
      },
      success: function(res) {
        if(res.data.geocodes[0] != undefined){
            console.log("location="+res.data.geocodes[0].location)
           // return res.data.geocodes[0].location;//返回经纬度
           typeof cb == "function" && cb(res.data.geocodes[0].location)
        }
      },
      fail:function(){
        return "fail";
      },
      complete:function(){
        //complete
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
    authenticationToken:'',
    batch:true,//默认批量查询
  }
})