// pages/wiki/wiki.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:0,
        name:'头部',
      },
      {
        id:1,
        name:'颈部',
      },
      {
        id:2,
        name:'胸部',
      },
      {
        id: 3,
        name: '腹部',
      },
      {
        id: 4,
        name: '腰部',
      },
      {
        id: 5,
        name: '男性生殖',
      },
      {
        id: 6,
        name: '女性生殖',
      },
      {
        id: 7,
        name: '全身',
      },
      {
        id: 8,
        name: '四肢',
      },
      {
        id: 9,
        name: '盆腔',
      },
      {
        id: 10,
        name: '臀部',
      },
      {
        id: 11,
        name: '骨',
      }
    ],
    curNav:1,
    curIndex:0
  },
 
  nav_click:function(e){
    var childindex = e.currentTarget.dataset.cid//postid
    console.log(childindex);
    
    // var data = this.data.list[curindex].children[index].children 
    // if (data===undefined) {wx.showToast({
    //   title: '暂无更多信息',
    //   duration:2000,
    //   icon:'none'
    // })
    //   return}
    wx.navigateTo({
      url: './detail/detail?id='+childindex,
    })
  },

  switchRightTab:function(e){
    var id = e.target.dataset.id,index=e.target.dataset.index;
    this.setData({
      curNav:id,
      curIndex:index
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: app.globalData.serverUrl + 'api/symptom/list',
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
          that.setData({
            list: that.arrayToTree(res.data.data, null)
          })
          
        }
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