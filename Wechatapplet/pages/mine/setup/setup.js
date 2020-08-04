// pages/mine/setup/setup.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    setup: [
      {
        id: 0,
        turn_address: "turn_permission_settings",
        item_image_uri: "iconfont icon-shezhi",
        item_name: "权限设置",
        item_height: 0
      }, {
        id: 1,
        turn_address: "turn_privacy_policy",
        item_image_uri: "iconfont icon-yinsi",
        item_name: "隐私政策",
        item_height: 0
      }, {
        id: 2,
        turn_address: "turn_help",
        item_image_uri: "iconfont icon-bangzhu",
        item_name: "帮助",
        item_height: 0
      }
    ]
  },

  turn_permission_settings: function () {
    wx.openSetting({
      success(res) {
        console.log(res.authSetting)
      }
    })
  },
  turn_privacy_policy: function () {
    wx.navigateTo({
      url: '../../mine/setup/privacy/privacy',
    })
  },
  turn_help: function () {
    wx.navigateTo({
      url: '../../mine/setup/help/help',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})