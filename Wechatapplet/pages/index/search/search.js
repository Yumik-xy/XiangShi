// pages/index/search/你好.js
const app = getApp()
Page({
  data: {
    search_content: '',
    history_contents: [],
    hot_contents: ["大学生秃顶", "怎么找女朋友", "治疗脱发的8种方法", "久坐会得痔疮吗", "阿莫西林"],
    item: []
  },


  //搜索函数
  search: function () {
    var that = this
    wx.request({
      url: app.globalData.serverUrl + 'api/medicine/list',
      data: {
        drumname: this.data.search_content
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
          console.log(res);

          var tempList = res.data.data
          that.setData({
            item: tempList //数据源
          })
        }
      }
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

  //点击历史搜索记录
  click_history_record: function (e) {
    this.setData({
      search_content: e.currentTarget.dataset.text
    });
    this.search();
  },

  //点击热门搜索记录
  click_hot_record: function (e) {
    this.setData({
      search_content: e.currentTarget.dataset.text
    })
    this.input_setStorage();
    this.search();
  },

  //搜索确认
  confirmSearch: function (e) {
    this.input_setStorage();
    this.search();
  },

  //将搜索记录写到本地缓存
  input_setStorage: function name() {
    //只缓存最近十个搜索记录
    console.log("存储搜索记录：" + this.data.search_content);
    for (let i = 0; i < this.data.history_contents.length; i++) {
      if (this.data.search_content == this.data.history_contents[i]) {
        return;
      }
    }
    this.data.history_contents.unshift(this.data.search_content);
    if (this.data.history_contents.length > 10) {
      this.data.history_contents.pop();
    }
    let contents = this.data.history_contents;
    this.setData({
      history_contents: contents
    });
    wx: wx.setStorage({
      key: 'history_contents',
      data: this.data.history_contents,
      success: (result) => {
        console.log("存储成功");
      },
      fail: () => {
        console.log("存储失败");
      },
      complete: () => {}
    });
  },

  //input输入改变
  inputTextChange: function (e) {
    console.log(e.detail.value);
    this.setData({
      search_content: e.detail.value
    });
    this.search();
  },

  //清除历史记录
  clear_history: function (params) {
    //清除缓存
    console.log("清除历史记录");
    wx.removeStorageSync('history_contents');
    //刷新页面
    this.setData({
      history_contents: []
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log("读取本地缓存");
    wx.getStorage({
      key: 'history_contents',
      success: (result) => {
        this.setData({
          history_contents: result.data
        })
        for (let index = 0; index < this.data.history_contents.length; index++) {
          console.log(this.data.history_contents[index]);
        }
        console.log("读取成功")
      },
      fail: () => {
        console.log("读取失败");
      },
      complete: () => {}
    });
    //接收来自后端的热门搜索
    console.log("接收来自后端的热门搜索信息");
  },
})