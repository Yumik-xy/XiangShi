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
    timeCurrent: "12:00", //当前时间
    timeBegin: "12:00",
    timeEnd: "12:30",
    title: "",
    content: "",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad: function (e) {},
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
        title: e.detail.value.title,
        timeBegin: e.detail.value.timeBegin,
        timeEnd: e.detail.value.timeEnd,
        content: e.detail.value.content,
      })

    },

    timeBeginChange: function (e) {
      this.setData({
        timeBegin: e.detail.value,
      });
    },
    timeEndChange: function (e) {
      this.setData({
        timeEnd: e.detail.value,
      });
    },
  },
});