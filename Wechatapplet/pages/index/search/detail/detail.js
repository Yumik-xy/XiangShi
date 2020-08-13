// pages/index/search/detail/detail.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentScrollId: '',
    cp_index: 0,
    leftTop: 0,
    left_item_height: 0,
    heightArr: 0,
    zindex: 0,
    oneShow: true,

    leftData: [{
        name: '药物性状',
        id: 'cp1'
      },
      {
        name: '适用症状',
        id: 'cp2'
      },
      {
        name: '剂量用法',
        id: 'cp3'
      },
      {
        name: '注意事项',
        id: 'cp4'
      },

      {
        name: '副作用',
        id: 'cp5'
      },
      {
        name: '禁忌症',
        id: 'cp6'
      }
    ],
    rightData: {}
    //description 药物性状
    //indications 适用症状
    //administration 剂量与用法
    //note 注意事项
    //sideeffects 副作用
    //contraindications 禁忌症
  },

  leftTap: function (e) {
    var index = e.currentTarget.dataset.index;
    var id = e.currentTarget.dataset.id;
    this.setData({
      cp_index: index,
      currentScrollId: id
    })
  },

  bindscroll: function (e) {
    var zindex = this.data.zindex;
    var oneShow = this.data.oneShow;
    let scrollTop = e.detail.scrollTop;
    let scrollArr = this.data.heightArr;
    for (let i = 0; i < scrollArr.length; i++) {
      if (scrollTop >= 0 && scrollTop < scrollArr[0]) {
        if (oneShow) {
          this.setData({
            cp_index: 0,
            leftTop: 0,
            zindex: 0,
            oneShow: false
          })
          return
        }
      } else if (scrollTop >= (scrollArr[i - 1]) && scrollTop < scrollArr[i]) {
        if (i != zindex) {
          this.setData({
            oneShow: true,
            zindex: i,
            cp_index: i,
            leftTop: i * this.data.left_item_height
          })
        }
      }
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
      url: app.globalData.serverUrl + 'api/medicine',
      data: {
        id: that.data.id,
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
          var medicineList = res.data.data[0]
          that.setData({
            rightData: medicineList
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    var h = 0;
    var heightArr = [];
    wx.createSelectorQuery().select('.sc_left_item').boundingClientRect(function (rect) { //select会选择第一个类目的盒子
    }).exec(function (res) {
      that.setData({
        left_item_height: res[0].height
      })

    });

    wx.createSelectorQuery().selectAll('.sc_right_item').boundingClientRect(function (rect) { //selectAll会选择所要含有该类名的盒子
    }).exec(function (res) {
      res[0].forEach((item) => {
        h += item.height;
        heightArr.push(h);
      })
      that.setData({
        heightArr: heightArr
      })
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