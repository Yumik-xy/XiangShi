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
    datepicker: {
      onShow: function () {
        initDatepicker(); // 使用默认配置初始化日历选择器
      }
    }
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
      console.log("form发生了submit事件，携带数据为：", e.detail.value);
      if (e.detail.value.title == "") {
        wx: wx.showToast({
          title: "标题为空",
          icon: "loading",
        });
        return;
      }
      this.setData({
        begin: e.detail.value.timeBegin,
        end: e.detail.value.timeEnd,
        todoText: e.detail.value.todoText,
      });

      //获取页面栈
      var pages = getCurrentPages();
      if (pages.length > 1) {
        //上一个页面实例对象
        var prePage = pages[pages.length - 2];
        //关键在这里
        prePage.addSchedule({
          begin: this.data.begin,
          end: this.data.end,
          todoText: this.data.todoText
        });
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
    timeEndChange: function (e) {
      this.setData({
        end: e.detail.value,
      });
    },
  },
});