// pages/mybook/order-detail-info/guide/guide.js
Page({
  data:{
    part1Rimg:'http://locallocalhost.tunnel.2bdata.com/UploadFiles/UserPic/202/202_170217155700_00bd0941eecb476dbbbfc0b062116d6d.jpeg',
    part2Timg:'http://locallocalhost.tunnel.2bdata.com/UploadFiles/UserPic/202/202_170217155700_00bd0941eecb476dbbbfc0b062116d6d.jpeg',
    part3Limg:'http://locallocalhost.tunnel.2bdata.com/UploadFiles/UserPic/202/202_170217155700_00bd0941eecb476dbbbfc0b062116d6d.jpeg'
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
  }
})