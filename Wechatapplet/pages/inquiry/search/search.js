// pages/search/search.js
const app = getApp()
Page({
  data: {
    search_content: '',
    content: [],
    inquiry_history: [],
    item: [],
    showRegion: false,
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

  //搜索函数
  search: function (newlist) {
    var that = this
    if (newlist)
      this.setData({
        nowpage: 1,
        item: []
      })
    else this.setData({
      nowpage: that.data.nowpage + 1
    })
    wx.request({
      url: app.globalData.serverUrl + 'api/inquirypost/list',
      data: {
        page: that.data.nowpage,
        ser_title: that.data.search_content,
        ser_classify: that.data.classify[1].name
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
          if(res.data.data.length !== 0){
            var tempList = res.data.data
            tempList.forEach((item) => {
              item.time = that.getDateDiff(item.time)
            })
            let dataList = that.data.item.concat(tempList); //获取到的数据
            that.setData({
              item: dataList //数据源
            })
          }
          else{
            wx.showToast({
              title: '暂无更多帖子',
              icon: 'none'
            })
          }
        }
      }
    })
  },

  getDateDiff: function (dateTimeStamp) {
    var result
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var month = day * 30;
    var now = Date.parse(new Date());
    var diffValue = now - dateTimeStamp * 1000;
    if (diffValue < 0) { return; }
    var monthC = diffValue / month;
    var weekC = diffValue / (7 * day);
    var dayC = diffValue / day;
    var hourC = diffValue / hour;
    var minC = diffValue / minute;
    if (monthC >= 1) {
      result = "" + parseInt(monthC) + "月前";
    }
    else if (weekC >= 1) {
      result = "" + parseInt(weekC) + "周前";
    }
    else if (dayC >= 1) {
      result = "" + parseInt(dayC) + "天前";
    }
    else if (hourC >= 1) {
      result = "" + parseInt(hourC) + "小时前";
    }
    else if (minC >= 1) {
      result = "" + parseInt(minC) + "分钟前";
    } else
      result = "刚刚";
    return result;
  },

  detail: function (event) {
    console.log(event.currentTarget.dataset.id)
    var that = this
    var id = event.currentTarget.dataset.id
    //写入本地缓存
    this.setData({
      search_content: that.data.item[id].drumname
    });
    this.input_setStorage();
    //页面跳转
    wx.navigateTo({
      url: '../detail/detail?id=' + that.data.item[id].id,
    });
  },

  //点击历史搜索记录
  click_history_record: function (e) {
    var index = e.currentTarget.dataset.id
    this.setData({
      search_content: this.data.inquiry_history[index][0],
      'classify[0]': this.data.inquiry_history[index][1],
      'classify[1]': this.data.inquiry_history[index][2]
    });
    this.search(true);
  },

  //搜索确认
  confirmSearch: function (e) {
    if((this.data.search_content)||(this.data.classify.length !== 0)){
      this.input_setStorage();
      this.search(true);
    }
    else{
      wx.showToast({
        title: '内容不能为空',
        icon: 'none'
      })
    }
  },

  //将搜索记录写到本地缓存
  input_setStorage: function name() {
    //只缓存最近十个搜索记录
    this.setData({
      content : this.data.content.concat(this.data.search_content)
    })
    this.setData({
      content : this.data.content.concat(this.data.classify)
    })
    
    
    console.log("存储搜索记录：" + this.data.content);
    for (let i = 0; i < this.data.inquiry_history.length; i++) {
      if ((this.data.content[0] == this.data.inquiry_history[i][0])&&(this.data.content[2].name == this.data.inquiry_history[i][2].name)) {
        return;
      }
    }
    this.data.inquiry_history.unshift(this.data.content);
    if (this.data.inquiry_history.length > 10) {
      this.data.inquiry_history.pop();
    }
    let contents = this.data.inquiry_history;
    this.setData({
      inquiry_history: contents
    });
    wx: wx.setStorage({
      key: 'inquiry_history',
      data: this.data.inquiry_history,
      success: (result) => {
        console.log("存储成功");
      },
      fail: () => {
        console.log("存储失败");
      }
    });
    this.setData({
      content : []
    })
  },

  //input输入改变
  inputTextChange: function (e) {
    this.setData({
      search_content: e.detail.value
    });
  },

  //清除历史记录
  clear_history: function (params) {
    //清除缓存
    console.log("清除历史记录");
    wx.removeStorageSync('inquiry_history');
    //刷新页面
    this.setData({
      inquiry_history: [],
      content : []
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log("读取本地缓存");
    wx.getStorage({
      key: 'inquiry_history',
      success: (result) => {
        this.setData({
          inquiry_history: result.data
        })
        for (let index = 0; index < this.data.inquiry_history.length; index++) {
          console.log(this.data.inquiry_history[index]);
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

  onReachBottom: function () {
    this.search(false)
  },
})