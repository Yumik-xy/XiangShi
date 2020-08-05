// pages/wiki/wiki.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateItems:[
      {
        cate_id:1,
        cate_name:'a',
        children: [
          { 
            child_id: 1, 
            name: 'a-a', 
            image: "../../images/a.jpg" ,
            children: [{
              id: 1,
              title:'123',
              text:'1234',
            }]
          }, 
          { 
            child_id: 2, 
            name: 'a-b', 
            image: "../../images/b.jpg"  
          }
        ]
      },
      {
        cate_id:2,
        cate_name:'b'
      },
      {
        cate_id:3,
        cate_name:'c'
      },
      {
        cate_id: 4,
        cate_name: 'd'
      },
      {
        cate_id: 5,
        cate_name: 'e'
      },
      {
        cate_id: 6,
        cate_name: 'f'
      },
      {
        cate_id: 7,
        cate_name: 'g'
      },
      {
        cate_id: 8,
        cate_name: 'h'
      },
      {
        cate_id: 9,
        cate_name: 'i'
      },
      {
        cate_id: 10,
        cate_name: 'j'
      },
      {
        cate_id: 11,
        cate_name: 'k'
      },
      {
        cate_id: 12,
        cate_name: 'l'
      },
      {
        cate_id: 13,
        cate_name: 'm'
      }
    ],
    curNav:1,
    curIndex:0
  },
 
  nav_click:function(e){
    var index = e.currentTarget.dataset.cid
    var curindex = this.data.curIndex
    var data = this.data.cateItems[curindex].children[index].children
    if (data===undefined) {wx.showToast({
      title: '暂无更多信息',
      duration:2000,
      icon:'none'
    })
      return}
    wx.navigateTo({
      url: './detail/detail?data='+encodeURIComponent(JSON.stringify(data)),
    })
  },

  switchRightTab:function(e){
    var id = e.target.dataset.id,index=e.target.dataset.index;
    this.setData({
      curNav:id,
      curIndex:index
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