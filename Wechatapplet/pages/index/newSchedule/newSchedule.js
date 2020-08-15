// pages/index/calendar/newSchedule/newSchedule.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},
  /**
   * 组件的初始数据
   */
  data: {
    timeCurrent: null,
    date: null,
    begin: "12:00",
    end: "12:30",
    todoText: "",
    color: ["blue", "red", "green"]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad: function (e) {
      var that = this;
      var now = new Date();
      this.setData({
        timeCurrent: now.getHours() + ":" + now.getMinutes(),
        date: JSON.parse(e.date)
      });
    },
    formSubmit: function (e) {
      if (e.detail.value.title == "") {
        wx.showToast({
          title: "标题为空",
          icon: "loading",
        });
        return;
      }
      //获取页面栈
      var pages = getCurrentPages();
      if (pages.length > 1) {
        //上一个页面实例对象
        var prePage = pages[pages.length - 2];
        //关键在这里
        prePage.addSchedule(e.detail.value);
      }
      wx.navigateBack({
        delta: 1
      });

    },

    timeBeginChange: function (e) {
      this.setData({
        begin: e.detail.value,
        end: e.detail.value
      });
    },
  },
});