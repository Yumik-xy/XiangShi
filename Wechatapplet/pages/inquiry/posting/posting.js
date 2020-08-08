// pages/inquiry/posting/posting.js


Page({
  /**
   * 页面的初始数据
   */
  data: {
    info: {},
    images:[],
    imagesdata: [],
    classify: [],
    showRegion: false,
  },

  submit: function (e) {
    var that = this

    let fileList = [data0, data1, data2]

    console.log(e.detail.value)
    wx.login({
      success: function (loginCode) {   
        if (that.data.is == 0) {
          wx.request({
            url: 'http://127.0.0.1/api/inquirypost',
            data: {
              openid: loginCode.code,
              name: app.globalData.userInfo.nickname,
              title: e.detail.value.title,
              classify: this.data.classify[1],
              content: e.detail.value.content,
              picture1: this.data.images[0],
              picture2: this.data.images[1],
              picture3: this.data.images[2]
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

                that.setData({
                  save_data: e.detail.value
                })
              }
            }
          })
        }
      }
    })
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
  
  chooseImage(e) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        const images = this.data.images.concat(res.tempFilePaths)
        console.log(images);
        
        const fileSystemManager = wx.getFileSystemManager()

        fileSystemManager.readFile({
          filePath: res.tempFilePaths, // 图片临时路径
          encoding: 'base64',
          success (res) {
            let { data } = res // 编码后的数据
          }
        })

        // 限制最多只能留下3张照片
        const images1 = images.length <= 3 ? images : images.slice(0, 3)
        this.setData({
          images: images1
        })
      }
    })
  },

  removeImage(e) {
    var that = this;
    var images = that.data.images;
    // 获取要删除的第几张图片的下标
    const idx = e.currentTarget.dataset.idx
    // splice  第一个参数是下表值  第二个参数是删除的数量
    images.splice(idx,1)
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