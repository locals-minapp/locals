// pages/mybook/mybook.js
Page({
  data:{
    currentNavtab: "0",
    toView: 'ctnt0',
    scrollTop: 200
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  
})