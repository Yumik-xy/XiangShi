// pages/inquiry/inquiry.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: [{
      photo: '../../icon/add.png',
      name: '中豪鱼',
      classify: '睾丸',
      content: '为什么两个不一样大？',
      picture: '../../icon/background/CBorder.png',
      time: '2020-8-5'
    }, {
      photo: '../../icon/add.png',
      name: '中豪鱼',
      classify: '睾丸',
      content: '为什么两个不一样大？',
      picture: '../../icon/background/CBorder.png',
      time: '2020-8-5'
    }, {
      photo: '../../icon/add.png',
      name: '中豪鱼',
      classify: '睾丸',
      content: '为什么两个不一样大？',
      picture: '../../icon/background/CBorder.png',
      time: '2020-8-5'
    }, {
      photo: '../../icon/add.png',
      name: '中豪鱼',
      classify: '睾丸',
      content: '为什么两个不一样大？',
      picture: '../../icon/background/CBorder.png',
      time: '2020-8-5'
    },],
    scrollTop: 0,
    pulldown: true,
  },

  onPageScroll: function (ev) {
    var that = this;
    //当滚动的top值最大或最小时，为什么要做这一步是因为在手机实测小程序的时候会发生滚动条回弹，所以为了处理回弹，设置默认最大最小值
    if (ev.scrollTop <= 0) {
      ev.scrollTop = 0;
    } else if (ev.scrollTop > wx.getSystemInfoSync().windowHeight) {
      ev.scrollTop = wx.getSystemInfoSync().windowHeight;
    }
    //给scrollTop重新赋值
    setTimeout(function () {
      that.setData({
        scrollTop: ev.scrollTop
      })
    }, 0)
    //判断浏览器滚动条上下滚动
    if (ev.scrollTop > this.data.scrollTop || ev.scrollTop == wx.getSystemInfoSync().windowHeight) {
      //向下滚动
      if (ev.scrollTop > 65)
        that.setData({
          pulldown: false
        })
    } else {
      //向上滚动
      that.setData({
        pulldown: true
      })
    }
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