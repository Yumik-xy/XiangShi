// pages/mine/patient/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  submit: function (e) {
    var that = this
    console.log(e.detail.value)
    wx.login({
      success: function (loginCode) {
        wx.request({
          url: 'http://127.0.0.1/api/patient/',
          data: { patientname: e.detail.value.patientname, 
                  gender: e.detail.value.gender,
                  age: e.detail.value.age,
                  telephone: e.detail.value.telephone,
                  pastmedicalhistory: e.detail.value.pastmedicalhistory,
                  telephone: e.detail.value.telephone,
                  allergy: e.detail.value.allergy,
                  code: loginCode.code },
          header: { "content-type": "application/x-www-form-urlencoded" },
          method: 'POST',
          success: function (res) {
            console.log(res)
            if (res.data.status == false) {
              wx.showToast({
                title: res.data.message,
                icon: 'none'
              })
            } else if (res.data.status == true) {
              wx.showToast({
                title: '添加成功',
              })
              var regInfo = {
                name: e.detail.value.name,
                phone: e.detail.value.telephone,
                uid: res.data.uid
              }
              wx.setStorageSync('regInfo', regInfo)

            }
          }
        })
      }
    })
  },

  getName(res){
    var name=res.detail.value;
  },

  getSex(res){
    var sex=res.detail.value;
  },

  getAge(res){
    var age=res.detail.value;
  },

  getPhone(res){
    var phone=res.detail.value;
  },

  getHistory(res){
    var history=res.detail.value;
  },

  getAllergy(res){
    var allergy=res.detail.value;
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