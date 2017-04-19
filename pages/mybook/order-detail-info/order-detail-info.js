
Page({
  data:{
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
    id:0
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
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var id = options.houseId;
    this.setData({
      id:id
    })
  },
})