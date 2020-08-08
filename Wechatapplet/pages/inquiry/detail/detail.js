// pages/inquiry/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {
      id: 2,
      photo: '../../../icon/add.png',
      name: '中豪鱼',
      classify: '睾丸',
      title: '高娃不一样大',
      content: '为什么两个不一样大？不会吧不会吧，还有人两个都是一样大的吗？？？为什么人要这么多个高娃哦？我有一个我自豪，单眼皮多漂亮，单蛋蛋多帅气！不会吧不会吧，你难道不同意吗？？？',
      picture: ['../../../icon/background/CBorder.png', '../../../icon/background/CBorder.png', '../../../icon/background/CBorder.png'],
      time: '2020-8-5',
      follownum: 0,
      lovenum: 0,
      comment: [{
        name: '荒信誉',
        content: '说得好！',
        comment: [{
          name: '真厉害',
          content: '好锤子？'
        }]
      }]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      id: options.id
    })
    console.log(options.id)
    wx.request({
      url: 'url',
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