// pages/inquiry/posting/posting.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    info: {},
    content:'',
    images: [],
    classify: [],
    showRegion: false,
  },

  submit: function (e) {
    var that = this
    console.log(e.detail.value)
    wx.login({
      success: function (loginCode) {
        console.log(loginCode)
        wx.request({
          url: 'http://127.0.0.1/api/inquirypost',
          data: {
            coder: loginCode.code,
            name: that.data.userInfo.nickName,
            title: e.detail.value.title,
            classify: that.data.classify[1].name,
            content: that.data.content,
            // content: e.detail.value.content,
            picture1: that.coding(that.data.images[0]||null),
            picture2: that.coding(that.data.images[1]||null),
            picture3: that.coding(that.data.images[2]||null),
          },
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
                title: '发送成功',
                duration: 1000,
              })
              setTimeout(function () {
                wx.navigateBack({
                  delta: 1
                })
              }, 1000)
            }
          }
        })
      }
    })
  },

  coding: function (images) {
    if (images === null) return ""
    const fileSystemManager = wx.getFileSystemManager()
    const data = fileSystemManager.readFileSync(images, 'base64')
    return data
  },

  chooseRegion: function () {
    this.setData({
      showRegion: true,
    });
  },
  emitHideRegion: function (e) {
    console.log(e);
    this.setData({
      showRegion: e.detail.showRegion,
      classify: e.detail.classify,
    });
  },

  htmlcontent : function(e){
    this.setData({
      content : e.detail.html
    })
  },

  chooseImage(e) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        var tempFilesSize = res.tempFiles[0].size;  //获取图片的大小，单位B
        if (tempFilesSize <= 2000000) {   //图片小于或者等于2M时 可以执行获取图片
          const images = this.data.images.concat(res.tempFilePaths)
          // 限制最多只能留下3张照片
          const images1 = images.length <= 3 ? images : images.slice(0, 3)
          this.setData({
            images: images1
          })
        }
        else {
          wx.showToast({
            title: '上传图片不能大于2M!',  //标题
            icon: 'none' //图标 none不使用图标，详情看官方文档
          })
        }
      }
    })
  },

  removeImage(e) {
    var that = this;
    var images = that.data.images;
    // 获取要删除的第几张图片的下标
    const idx = e.currentTarget.dataset.idx
    // splice  第一个参数是下表值  第二个参数是删除的数量
    images.splice(idx, 1)
    this.setData({
      images: images
    })
  },

  handleImagePreview(e) {
    const idx = e.target.dataset.idx
    const images = this.data.images
    wx.previewImage({
      current: images[idx],  //当前预览的图片
      urls: images,  //所有要预览的图片
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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