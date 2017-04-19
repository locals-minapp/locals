var app = getApp()
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function httpGet(url, callBack) {
  let token = app.globalData.authenticationToken == '' ? app.getAuthenticationToken() : app.globalData.authenticationToken
  console.log(token)
  wx.request({
    url: url,
    method: 'GET',
    header: {
      "Content-Type": "application/json;charset=UTF-8",
      "Authorization": token
    },
    success: function (res) {
      callBack(res.data);
    },
    fail: function (error) {
      console.log(error)
    }
  })
}

function httpPost(url,data, callBack) {
  console.log(app.globalData.authenticationToken)
  let token = app.globalData.authenticationToken == '' ? app.getAuthenticationToken() : app.globalData.authenticationToken
  console.log(token)
  wx.request({
    url: url,
    method: 'POST',
    data: data,
    header: {
      "Content-Type": "application/json;charset=UTF-8",
      "Authorization": token
    },
    success: function (res) {
      callBack(res.data);
    },
    fail: function (error) {
      console.log(error)
    }
  })
}

module.exports = {
  formatTime: formatTime,
  httpGet: httpGet,
  httpPost: httpPost
}
