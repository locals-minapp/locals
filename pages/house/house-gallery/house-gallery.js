// pages/house/house-gallery/house-gallery.js
var houseData=require('../../../data/house-data.js')
Page({
  data:{
    houseGallerySize:0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
    this.setData({
      houseGallery:houseData.houseGallery,
      houseGallerySize:houseData.houseGallery.houseGallery.length
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
  cusImageLoad: function (e){
    // var that = this;
    //这里看你在wxml中绑定的数据格式 单独取出自己绑定即可
    this.setData(this.wxAutoImageCal(e));
  },
  /***
 * wxAutoImageCal 计算宽高
 * 
 * 参数 e: iamge load函数的取得的值
 * 返回计算后的图片宽高
 * {
 *  imageWidth: 100px;
 *  imageHeight: 100px;
 * }
 */
wxAutoImageCal:function(e){
    console.dir(e);
    //获取图片的原始长宽
    var originalWidth = e.detail.width;
    var originalHeight = e.detail.height;
    var windowWidth = 0,windowHeight = 0;
    var autoWidth = 0,autoHeight = 0;
    var results= {};
    wx.getSystemInfo({
      success: function(res) {
        console.dir(res);
        windowWidth = res.windowWidth;
        windowHeight = res.windowHeight;
        //判断按照那种方式进行缩放
        console.log("windowWidth"+windowWidth);
        if(originalWidth > windowWidth){//在图片width大于手机屏幕width时候
          autoWidth = windowWidth;
          console.log("autoWidth"+autoWidth);
          autoHeight = (autoWidth*originalHeight)/originalWidth;
          console.log("autoHeight"+autoHeight);
          results.imageWidth = autoWidth;
          results.imageheight = autoHeight;
        }else{//否则展示原来的数据
          results.imageWidth = originalWidth;
          results.imageheight = originalHeight;
        }
      }
    })

    return results;

  },
  onSwiperChange:function(event){
    console.log(event);
  }
})