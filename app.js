// app.js
App({
  onLaunch() {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取系统信息
    wx.getSystemInfo({
      success: (res) => {
        console.log(res);
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
