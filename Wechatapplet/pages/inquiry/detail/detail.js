// pages/inquiry/detail/detail.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    data: {
      photo: '../../../icon/add.png',
      follownum: 0,
      lovenum: 0,
    },
    list: [],
    picturelist: [],
    reply: {
      name: '',
      postid: '',
      parentid: '',
      reply_to: ''
    },
    textareaisShow: false,
    otherisShow: true,
    isEmpty: true,
    color: "#8A8A8A",
  },

  textinput:function(e){
    console.log(e.detail.value);
    if(e.detail.value=="")
      this.setData({
        color: "#8A8A8A",
        isEmpty: true
      })
    else{
      this.setData({
        color: "#A52233",
        isEmpty: false,
      })
    }
  },

  submit: function (e) {
    var that = this
    console.log(e.detail.value)
    wx.login({
      success: function (loginCode) {
        wx.request({
          url: 'http://127.0.0.1/api/comment',
          data: {
            name: that.data.reply.name,
            postid: that.data.reply.postid,
            parentid: that.data.reply.parentid,
            reply_to: that.data.reply.reply_to,
            body: e.detail.value.content,
            coder: loginCode.code
          },
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
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

  bindcomment: function (e) {
    let replyList = this.data.reply
    replyList.name = this.data.userInfo.nickName,
    replyList.postid = this.data.data.id,
    replyList.parentid = e.currentTarget.dataset.id,
    replyList.reply_to = e.currentTarget.dataset.name,

      console.log(replyList);
    this.setData({
      reply: replyList,
      textareaisShow: true,
      otherisShow: false
    })
  },

  arrayToTree: function (arr, parent) {
    //  arr 是返回的数据  parendId 父id
    var that = this;
    let temp = [];
    let treeArr = arr;
    if (!treeArr) return null
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

  previewPic: function (e) {
    if (this.data.data.picture1.length > 0) {
      this.setData({
        'picturelist[0]': ('http://127.0.0.1/media/' + this.data.data.picture1)
      })
    }
    if (this.data.data.picture2.length > 0) {
      this.setData({
        'picturelist[1]': ('http://127.0.0.1/media/' + this.data.data.picture2)
      })
    }
    if (this.data.data.picture3.length > 0) {
      this.setData({
        'picturelist[2]': ('http://127.0.0.1/media/' + this.data.data.picture3)
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
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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

    var that = this;
    this.setData({
      id: options.id
    })
    console.log(options.id)

    wx.request({
      url: 'http://127.0.0.1/api/comment',
      data: {
        postid: that.data.id,
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
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
            list: that.arrayToTree(res.data.data, null)
          })
        }
      }
    })

    wx.login({
      success: function (loginCode) {
        console.log(loginCode)
        wx.request({
          url: 'http://127.0.0.1/api/inquirypost',
          data: {
            id: that.data.id,
            coder: loginCode.code
          },
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          method: 'GET',
          success: function (res) {
            console.log(res)
            if (res.data.status == false) {
              wx.showToast({
                title: res.data.message,
                icon: 'none'
              })
            } else if (res.data.status == true) {
              var tempList = res.data.data[0]
              if (tempList.time != null) {
                tempList.date = tempList.time.substring(0, 10)
                tempList.time = tempList.time.substring(11, 19); //要截取字段的字符串
              }
              that.setData({
                data: tempList
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