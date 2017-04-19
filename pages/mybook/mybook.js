// pages/mybook/mybook.js
var houseData=require('../../data/house-data.js');
var app = getApp()
Page({
  data:{
    currentNavtab: "0",
    toView: 'ctnt0',
    scrollTop: 200
  },
  onLoad: function () {
    var that = this;
    console.log(houseData);
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    this.setData({
      checkInList:houseData.bookList.checkIn,
      checkOutList:houseData.bookList.checkOut
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
  switchTab:function(e){
    var toView = e.currentTarget.dataset.idx == 0 ? 'ctnt0' : 'ctnt1'
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx,
      toView: toView
    })
    console.log(this.data.toView)
  },
  goToOrderInfo:function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url:"order-detail-info/order-detail-info?houseId="+id
    })
  }
})