// pages/inquiry/inquiry.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: [{
      id: 0,
      photo: '../../icon/add.png',
      name: '中豪鱼',
      classify: '睾丸',
      title: '高娃不一样大',
      content: '为什么两个不一样大？',
      picture: [],
      time: '2020-8-5'
    }, {
      id: 1,
      photo: '../../icon/add.png',
      name: '中豪鱼',
      classify: '睾丸',
      title: '高娃不一样大',
      content: '为什么两个不一样大？',
      picture: ['../../icon/background/CBorder.png'],
      time: '2020-8-5'
    }, {
      id: 2,
      photo: '../../icon/add.png',
      name: '中豪鱼',
      classify: '睾丸',
      title: '高娃不一样大',
      content: '为什么两个不一样大？不会吧不会吧，还有人两个都是一样大的吗？？？为什么人要这么多个高娃哦？我有一个我自豪，单眼皮多漂亮，单蛋蛋多帅气！不会吧不会吧，你难道不同意吗？？？',
      picture: ['../../icon/background/CBorder.png', '../../icon/background/CBorder.png', '../../icon/background/CBorder.png'],
      time: '2020-8-5'
    }, {
      id: 6,
      photo: '../../icon/add.png',
      name: '中豪鱼',
      classify: '睾丸',
      title: '高娃不一样大',
      content: '为什么两个不一样大？',
      picture: ['../../icon/background/CBorder.png'],
      time: '2020-8-5'
    },],
    scrollTop: 0,
    pulldown: true,

    pos: {},
    SYSTEMINFO: ''
  },

  previewPic: function(e) {
    console.log(e)
    var current = e.target.dataset.src;
    var list = e.target.dataset.list;

    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: list // 需要预览的图片http链接列表  
    })
  },


  turn_posting: function () {
    wx.navigateTo({
      url: '../../pages/inquiry/posting/posting',
    })
  },

  detail: function (event) {
    console.log(event.currentTarget.dataset.id)
    var that = this
    var id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: './detail/detail?id=' + that.data.item[id].id,
    })
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
    //判断浏览器滚动条上下滚动
    if (ev.scrollTop > this.data.scrollTop || ev.scrollTop == wx.getSystemInfoSync().windowHeight) {
      //向下滚动
      if (ev.scrollTop > 65 && ev.scrollTop - that.data.scrollTop > 50)
        that.setData({
          pulldown: false
        })
    } else {
      //向上滚动
      if (ev.scrollTop < 30 || ev.scrollTop - that.data.scrollTop < -50) {
        that.setData({
          pulldown: true
        })
      }
    }

    setTimeout(function () {
      that.setData({
        scrollTop: ev.scrollTop
      })
    }, 200)
  },

  menuMainMove(e) {
    // 如果已经弹出来了，需要先收回去，否则会受 top、left 会影响
    let windowWidth = this.data.SYSTEMINFO.windowWidth
    let windowHeight = this.data.SYSTEMINFO.windowHeight
    let touches = e.touches[0]
    let clientX = touches.clientX
    let clientY = touches.clientY

    // 边界判断
    if (clientX > windowWidth - 60) {
      clientX = windowWidth - 60
    }
    if (clientX <= 10) {
      clientX = 10
    }
    if (clientY > windowHeight - 60) {
      clientY = windowHeight - 60
    }
    if (clientY <= 60) {
      clientY = 60
    }
    let pos = {
      left: clientX,
      top: clientY,
    }
    this.setData({
      pos,
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
    let that = this
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);

        that.setData({
          SYSTEMINFO: res
        })
      }
    })
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