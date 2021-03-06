//mine.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    
    collection: [
      {
        id:0,
        turn_address: "turn_disease",
        item_image_uri: "../../icon/disease.png",
        item_name: "病症关注",
      },
      {
        id:1,
        turn_address: "turn_coupon",
        item_image_uri: "../../icon/coupon.png",
        item_name: "我的卡券",
      },
      {
        id:2,
        turn_address: "turn_prescription",
        item_image_uri: "../../icon/prescription.png",
        item_name: "处方记录",
      },
    ],
  },
  //事件处理函数
  
  turn_disease: function () {
    wx.navigateTo({
      url: '../../pages/mine/disease/disease',
    })
  },

  turn_coupon: function () {
    wx.navigateTo({
      url: '../../pages/mine/coupon/coupon',
    })
  },

  turn_prescription: function () {
    wx.navigateTo({
      url: '../../pages/mine/prescription/prescription',
    })
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    var that = this
    wx.login({
      success: function (loginCode) {
        wx.request({
          url: app.globalData.serverUrl + 'api/patient',
          data: {
            coder:loginCode.code
          },
          header: { "content-type": "application/x-www-form-urlencoded" },
          method: 'GET',
          success: function (res) {
            console.log(res)
            if (res.data.status == false) {
              wx.showToast({
                title: res.data.message,
                icon: 'none'
              })
            } else if (res.data.status == true) { }
          }
        })
      }
    })
  },
  
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
