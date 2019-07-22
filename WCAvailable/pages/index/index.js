//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   genderArray:["Male","Female"],
   roomArray:["Gents","Ladies"],
   gender:"Male",
   buildingArray:["01","05","06"],
   building:"01",
  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      building: this.data.building[val[0]],
      gender: this.data.gender[val[1]]
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
