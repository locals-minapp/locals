// pages/mybook/order-detail-info/insurance/insurance.js
Page({
  data:{
    id: 0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var id = options.houseId;
    this.setData({
      id:id
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
})