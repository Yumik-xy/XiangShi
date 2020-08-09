// pages/inquiry/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    data: {
      photo: '../../../icon/add.png',
      follownum: 0,
      lovenum: 0,
    },
    list : [],
    picturelist: []
  },
  
  arrayToTree: function (arr, parent) {
    //  arr 是返回的数据  parendId 父id
    var that = this;
    let temp = [];
    let treeArr = arr;
    treeArr.forEach((item, index) => {
      if (item.parent == parent) {
        if (that.arrayToTree(treeArr, treeArr[index].id).length > 0) {
          // 递归调用此函数
          treeArr[index].children = that.arrayToTree(treeArr, treeArr[index].id);
        }
        temp.push(treeArr[index]);
      }
    });
    return temp;
  },

  previewPic: function(e) {
    if (this.data.data.picture1.length > 0) {
      this.setData({
        'picturelist[0]':('http://127.0.0.1/media/'+this.data.data.picture1)
      })
    }
    if (this.data.data.picture2.length > 0) {
      this.setData({
        'picturelist[1]':('http://127.0.0.1/media/'+this.data.data.picture2)
      })
    }
    if (this.data.data.picture3.length > 0) {
      this.setData({
        'picturelist[2]':('http://127.0.0.1/media/'+this.data.data.picture3)
      })
    }

    var current = e.target.dataset.src;
    var list = this.data.picturelist;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: list // 需要预览的图片http链接列表  
    })
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

    wx.login({
      success: function (loginCode) {
        console.log(loginCode)
        wx.request({
          url: 'http://127.0.0.1/api/comment',
          data: {
            postid :that.data.id
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
                list: that.arrayToTree(res.data.data,null)
              })
            }
          }
        })
      }
    })

    wx.login({
      success: function (loginCode) {
        console.log(loginCode)
        wx.request({
          url: 'http://127.0.0.1/api/inquirypost',
          data: {
            id : that.data.id,
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
                data: res.data.data[0],
              })
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