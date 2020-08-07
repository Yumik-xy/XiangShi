// pages/inquiry/posting/posting.js
Page({
  

  /**
   * 页面的初始数据
   */
  data: {
    info: {},
    images1: [],
    images2: [],
    images3: [],
  },

  chooseImage1(e) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        const images1 = this.data.images1.concat(res.tempFilePaths)
        // 限制最多只能留下3张照片
        const images0 = images1.length <= 3 ? images1 : images1.slice(0, 3)
        this.setData({
          images1: images0
        })
      }
    })
  },
  chooseImage2(e) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        const images2 = this.data.images2.concat(res.tempFilePaths)
        // 限制最多只能留下3张照片
        const images0 = images2.length <= 3 ? images2 : images2.slice(0, 3)
        this.setData({
          images2: images0
        })
      }
    })
  },
  chooseImage3(e) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        const images3 = this.data.images3.concat(res.tempFilePaths)
        // 限制最多只能留下3张照片
        const images0 = images3.length <= 3 ? images3 : images3.slice(0, 3)
        this.setData({
          images3: images0
        })
      }
    })
  },
  removeImage1(e) {
    var that = this;
    var images1 = that.data.images1;
    // 获取要删除的第几张图片的下标
    const idx = e.currentTarget.dataset.idx
    // splice  第一个参数是下表值  第二个参数是删除的数量
    images1.splice(idx,1)
    this.setData({
      images1: images1
    })
  },
  removeImage2(e) {
    var that = this;
    var images2 = that.data.images2;
    // 获取要删除的第几张图片的下标
    const idx = e.currentTarget.dataset.idx
    // splice  第一个参数是下表值  第二个参数是删除的数量
    images2.splice(idx,1)
    this.setData({
      images2: images2
    })
  },
  removeImage3(e) {
    var that = this;
    var images3 = that.data.images3;
    // 获取要删除的第几张图片的下标
    const idx = e.currentTarget.dataset.idx
    // splice  第一个参数是下表值  第二个参数是删除的数量
    images3.splice(idx,1)
    this.setData({
      images3: images3
    })
  },
 
  handleImagePreview1(e) {
    const idx = e.target.dataset.idx
    const images1 = this.data.images1
    wx.previewImage({
      current: images1[idx],  //当前预览的图片
      urls: images1,  //所有要预览的图片
    })
  },
  handleImagePreview2(e) {
    const idx = e.target.dataset.idx
    const images2 = this.data.images2
    wx.previewImage({
      current: images2[idx],  //当前预览的图片
      urls: images2,  //所有要预览的图片
    })
  },
  handleImagePreview3(e) {
    const idx = e.target.dataset.idx
    const images3 = this.data.images3
    wx.previewImage({
      current: images3[idx],  //当前预览的图片
      urls: images3,  //所有要预览的图片
    })
  },chooseImage1(e) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        const images1 = this.data.images1.concat(res.tempFilePaths)
        // 限制最多只能留下3张照片
        const images0 = images1.length <= 3 ? images1 : images1.slice(0, 3)
        this.setData({
          images1: images0
        })
      }
    })
  },
  chooseImage2(e) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        const images2 = this.data.images2.concat(res.tempFilePaths)
        // 限制最多只能留下3张照片
        const images0 = images2.length <= 3 ? images2 : images2.slice(0, 3)
        this.setData({
          images2: images0
        })
      }
    })
  },
  chooseImage3(e) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        const images3 = this.data.images3.concat(res.tempFilePaths)
        // 限制最多只能留下3张照片
        const images0 = images3.length <= 3 ? images3 : images3.slice(0, 3)
        this.setData({
          images3: images0
        })
      }
    })
  },
  removeImage1(e) {
    var that = this;
    var images1 = that.data.images1;
    // 获取要删除的第几张图片的下标
    const idx = e.currentTarget.dataset.idx
    // splice  第一个参数是下表值  第二个参数是删除的数量
    images1.splice(idx,1)
    this.setData({
      images1: images1
    })
  },
  removeImage2(e) {
    var that = this;
    var images2 = that.data.images2;
    // 获取要删除的第几张图片的下标
    const idx = e.currentTarget.dataset.idx
    // splice  第一个参数是下表值  第二个参数是删除的数量
    images2.splice(idx,1)
    this.setData({
      images2: images2
    })
  },
  removeImage3(e) {
    var that = this;
    var images3 = that.data.images3;
    // 获取要删除的第几张图片的下标
    const idx = e.currentTarget.dataset.idx
    // splice  第一个参数是下表值  第二个参数是删除的数量
    images3.splice(idx,1)
    this.setData({
      images3: images3
    })
  },
 
  handleImagePreview1(e) {
    const idx = e.target.dataset.idx
    const images1 = this.data.images1
    wx.previewImage({
      current: images1[idx],  //当前预览的图片
      urls: images1,  //所有要预览的图片
    })
  },
  handleImagePreview2(e) {
    const idx = e.target.dataset.idx
    const images2 = this.data.images2
    wx.previewImage({
      current: images2[idx],  //当前预览的图片
      urls: images2,  //所有要预览的图片
    })
  },
  handleImagePreview3(e) {
    const idx = e.target.dataset.idx
    const images3 = this.data.images3
    wx.previewImage({
      current: images3[idx],  //当前预览的图片
      urls: images3,  //所有要预览的图片
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