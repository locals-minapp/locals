// pages/mybook/order-detail-info/guide/guide.js
var amapFile = require('../../../../libs/amap-wx.js');
var config = require('../../../../libs/config.js');
var app = getApp();
Page({
  data:{
    part1Rimg:'http://locallocalhost.tunnel.2bdata.com/UploadFiles/UserPic/202/202_170217155700_00bd0941eecb476dbbbfc0b062116d6d.jpeg',
    part2Timg:'http://locallocalhost.tunnel.2bdata.com/UploadFiles/UserPic/202/202_170217155700_00bd0941eecb476dbbbfc0b062116d6d.jpeg',
    part3Limg:'http://locallocalhost.tunnel.2bdata.com/UploadFiles/UserPic/202/202_170217155700_00bd0941eecb476dbbbfc0b062116d6d.jpeg',
    city: '广州市',
    address: '天河区兴盛路10号',
    markers: [],
    latitude: '',
    longitude: '',
    textData: {},
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var id = options.houseId;
    this.setData({
      id:id
    })

    app.getGeocoding({'address':this.data.address,'city':this.data.city},this.showMap);
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
  showMap:function(local){
    var location = local || "";
    var that = this;
    var key = config.Config.key;

    var myAmapFun = new amapFile.AMapWX({key: key});
    myAmapFun.getRegeo({
      iconPath: "../../../../image/map/marker.png",
      iconWidth: 22,
      iconHeight: 32,
      location:location,//经纬度坐标,为空时，基于当前位置进行地址解析,eg:'经度,纬度'
      success: function(data){
        var marker = [{
          id: data[0].id,
          latitude: data[0].latitude,
          longitude: data[0].longitude,
          iconPath: data[0].iconPath,
          width: data[0].width,
          height: data[0].height
        }]
        that.setData({
          markers: marker
        });
        that.setData({
          latitude: data[0].latitude
        });
        that.setData({
          longitude: data[0].longitude
        });
        that.setData({
          textData: {
            name: data[0].name,
            desc: data[0].desc
          }
        })
      },
      fail: function(info){
        // wx.showModal({title:info.errMsg})
      }
    })
  },
})