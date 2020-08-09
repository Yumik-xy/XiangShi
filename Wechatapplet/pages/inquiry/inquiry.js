// pages/inquiry/inquiry.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: [],
    scrollTop: 0,
    pulldown: true,

    pos: {},
    SYSTEMINFO: ''
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
    this.getinquirypost(true)
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
    this.getinquirypost(true)
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getinquirypost(false)
  },


  getinquirypost: function (newlist) {
    var that = this
    if (newlist)
      this.setData({
        nowpage: 1,
        item: []
      })
    else this.setData({
      nowpage: that.data.nowpage + 1
    })
    wx.login({
      success: function (loginCode) {
        wx.request({
          url: 'http://127.0.0.1/api/inquirypost/list',
          data: {
            page: that.data.nowpage,
          },
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          method: 'GET',
          success: function (res) {
            if (res.data.status == false) {
              wx.showToast({
                title: res.data.message,
                icon: 'none'
              })
            } else if (res.data.status == true) {
              let dataList = that.data.item.concat(res.data.data); //获取到的数据
              dataList.forEach((item) => {
                if (item.time != null) {
                  item.date = item.time.substring(0, 10)
                  item.time = item.time.substring(11, 19); //要截取字段的字符串
                }
              })
              that.setData({
                item: dataList //数据源
              })
            }
          }
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})