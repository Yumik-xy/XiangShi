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
    lastDay: null, //最后一天几号
    lastDayW: null, //最后一天星期几
    endLet: null,
    firstDayW: null, //第一天星期几
    weekArr: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    year: null,
    tips: [{
        id: 0,
        timeStart: "12:00",
        timeEnd: "13:00",
        content: "最近为特殊时期，出门请带口罩"
      },
      {
        id: 1,
        timeStart: "8:00",
        timeEnd: "24:00",
        content: "今日服药：****胶囊，一日三次，饭后即服"
      }
    ]
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //获取日历相关参数
    dataTime: function () {
      let date = new Date();
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
      var d = new Date(year, month, 0);
      this.data.lastDay = d.getDate();

      //最后一天星期几
      let lastDayW = new Date(year, month, this.data.lastDay);
      this.data.lastDayW = lastDayW.getDay();
      this.data.endLet = 6 - this.data.lastDayW;

      //第一天星期几
      let firstDayW = new Date(year, month, 1);
      this.data.firstDayW = firstDayW.getDay();
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
        marLet: this.data.firstDayW,
        arr: this.data.arr,
        year: this.data.year,
        getDate: this.data.getDate,
        month: this.data.month,
        lastDay: this.data.lastDay,
        lastDayW: this.data.lastDayW,
        endLet: this.data.endLet
      });
    }
  }
})