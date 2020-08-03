// pages/index/calendar/calendar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    arr: [],
    sysW: null,
    lastDay: null,
    firstDay: null,
    weekArr: ['日', '一', '二', '三', '四', '五', '六'],
    year: null
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //获取日历相关参数
    dataTime: function () {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth();
      var months = date.getMonth() + 1;

      //获取现今年份
      this.data.year = year;

      //获取现今月份
      this.data.month = months;

      //获取今日日期
      this.data.getDate = date.getDate();

      //最后一天是几号
      var d = new Date(year, months, 0);
      this.data.lastDay = d.getDate();

      //第一天星期几
      let firstDay = new Date(year, month, 1);
      this.data.firstDay = firstDay.getDay();
    },

    onLoad: function (options) {
      this.dataTime();

      //根据得到今月的最后一天日期遍历 得到所有日期
      for (var i = 1; i < this.data.lastDay + 1; i++) {
        this.data.arr.push(i);
      }
      var res = wx.getSystemInfoSync();
      this.setData({
        sysW: res.windowWidth / 8, //更具屏幕宽度变化自动设置宽度
        marLet: this.data.firstDay,
        arr: this.data.arr,
        year: this.data.year,
        getDate: this.data.getDate,
        month: this.data.month
      });
    }
  }
})