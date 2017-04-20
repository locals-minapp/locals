var amapFile = require('../../../libs/amap-wx.js');
var config = require('../../../libs/config.js');
var app = getApp();
Page({
  data:{
    houseimg: 'http://locallocalhost.tunnel.2bdata.com/UploadFiles/UserPic/202/202_170217155700_00bd0941eecb476dbbbfc0b062116d6d.jpeg',
    status: '待入住',
    taskid: 'ABC12345',
    htitle: 'CBD Bar Street.Zhujiang New Town.GZ',
    stitle: '整套房子',
    day: 1,//天数
    customerNum: 2,//住宿人数
    insurance: 10,//保险人数
    orderPhone: '12345678910',//预定人手机
    customer: 'me',//预定人
    Insdate: "4月15日",//加入日期,
    id:0,//临时id
    markers: [],
    latitude: '',
    longitude: '',
    textData: {},
    address: '车陂路龙口大街悦盛苑',
    city: '广州市',
  },
  getPhone:function(e){
    var phone = this.data.orderPhone;
    wx.makePhoneCall({
        phoneNumber: phone 
    })
  },
  question:function(e){
    var gotype = e.currentTarget.dataset.type;
    var id = this.data.id;
    var gourl = "";
    switch(gotype){
        case "1":gourl = "insurance/insurance";break;
        case "2":gourl = "cost/cost";break;
        case "3":gourl = "";break;
        default:null;
    }
    wx.navigateTo({
      url:gourl+"?houseId="+id
    })
  },
  tounsubecribe:function(e){
    wx.navigateTo({
      url:"unsubscribe/unsubscribe"
    })
  },
  torule:function(e){
    wx.navigateTo({
      url:"rule/rule"
    })
  },
  toguide:function(e){
    wx.navigateTo({
      url:"guide/guide"
    })
  },
  showMap:function(local){
    var location = local || "";
    var that = this;
    var key = config.Config.key;

    var myAmapFun = new amapFile.AMapWX({key: key});
    myAmapFun.getRegeo({
      iconPath: "../../../image/map/marker.png",
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
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var id = options.houseId;
    this.setData({
      id:id
    })
    
    app.getGeocoding({'address':this.data.address,'city':this.data.city},this.showMap);

  },
})