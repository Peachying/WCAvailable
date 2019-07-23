//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   genderArray:["Male","Female"],
   roomArray:["Gents","Ladies"],
   gender:"Male",
   floorArray:["01","02","03","04", "05","06"],
   floor:"01",
  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      floor: val[0],
      gender: val[1]
    })
  },  
  switchToWCFinding: function () {
    console.log("Start Searching for Avaiable WC")    
    wx.request({
      url: 'https://easy-mock.com/mock/5d331cab7b50236b39d4396f/example/wc',
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  onShareAppMessage: function () {
    let users = wx.getStorageSync('user');
    if (res.from === 'button') { }
    return {
      title: '转发',
      path: '/pages/index/index' + users.id,
      success: function (res) { }
    }
  }
})
