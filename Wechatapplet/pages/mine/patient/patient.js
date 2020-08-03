// pages/mine/patient/patient.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arry_data: []
  },

  turn_add: function () {
    wx.navigateTo({
      url: '../../../pages/mine/patient/add/add',
    })
  },  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.login({
      success: function (loginCode) {
        wx.request({
          url: 'http://127.0.0.1/api/patient/',
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
            } else if (res.data.status == true) {
              that.setData({
                arry_data:res.data.data
              })
              wx.setStorageSync("patientInfo", that.data.arry_data)
            }
          }
        })
      }
    })
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
    var exprs = wx.getStorageSync("patientInfo") || []
    this.setData({
      arry_data: exprs
    })
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