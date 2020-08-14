const conf = {
  data: {
    calendarConfig: {
      showLunar: true, //显示农历
      theme: 'elegant'
    },
    today: {
      year: null,
      month: null,
      day: null
    },
    selectedDay: null,
    todoList: [],
    schedule: {},
    editBool: false
  },
  //获取今日年、月、日
  getToday: function () {
    //获取今日事件
    let now = new Date();
    let _today = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate()
    }
    return _today;
  },
  onLoad: function () {
    var _today = this.getToday();
    var _todoList = [];
    var days = [];
    var _schedule = wx.getStorageSync("Schedule");
    if (_schedule == "") {
      _schedule = {};
    }
    //数组处理
    var key = _today.year.toString() + _today.month.toString() + _today.day.toString();
    if (key in _schedule) {
      _todoList = _schedule[key];
    }
    this.setData({
      today: _today,
      selectedDay: _today,
      todoList: _todoList,
      schedule: _schedule,
    })
  },

  afterTapDay(e) {
    console.log('afterTapDay', e.detail);
    console.log("点击日期后更新todoList");
    var _schedule = this.data.schedule;
    var _selectedDay = {
      year: e.detail.year,
      month: e.detail.month,
      day: e.detail.day
    }
    var _todoList = [];
    var key = _selectedDay.year.toString() + _selectedDay.month.toString() + _selectedDay.day.toString();
    if (key in _schedule) {
      _todoList = _schedule[key];
    }
    this.setData({
      selectedDay: _selectedDay,
      todoList: _todoList
    })
  },
  whenChangeMonth(e) {
    console.log('whenChangeMonth', e.detail);
  },
  whenChangeWeek(e) {
    console.log('whenChangeWeek', e.detail);
  },
  onTapDay(e) {
    console.log('onTapDay', e.detail);
  },
  afterCalendarRender(e) {
    console.log('afterCalendarRender', e);
    // this.calendar.switchView('week').then(() => {
    //   this.calendar.jump(2020, 3, 1).then(date => {}); // 跳转至某日
    // });
  },
  onSwipe(e) {
    console.log('onSwipe', e);
  },
  showToast(msg) {
    if (!msg || typeof msg !== 'string') return;
    wx.showToast({
      title: msg,
      icon: 'none',
      duration: 1500
    });
  },
  handleAction: function (e) {
    const {
      action,
      disable
    } = e.currentTarget.dataset;
    if (disable) {
      this.showToast('抱歉，还不支持～😂');
    }
    this.setData({
      rst: []
    });
    const calendar = this.calendar;
    const {
      year,
      month
    } = calendar.getCurrentYM();
    switch (action) {
      case 'setTodoLabels': {
        //转到新增日程页面
        var selectedDay = JSON.stringify(this.data.selectedDay);
        wx: wx.navigateTo({
          url: '../newSchedule/newSchedule?date=' + selectedDay
        });
        break;
      }
      case 'deleteTodoLabels': {
        const todos = [...calendar.getTodoLabels()];
        if (todos && todos.length) {
          todos.length = 1;
          calendar[action](todos);
          const _todos = [...calendar.getTodoLabels()];
          setTimeout(() => {
            const rst = _todos.map(item => JSON.stringify(item));
            this.setData({
                rst
              },
              () => {
                console.log('set todo labels: ', todos);
              }
            );
          });
        } else {
          this.showToast('没有待办事项');
        }
        break;
      }
      case 'clearTodoLabels':
        if (this.data.todoList.length == 0) {
          this.showToast("当日无待办内容");
          return;
        }
        var _schedule = this.data.schedule;
        var selectedDay = this.data.selectedDay;
        var key = selectedDay.year.toString() + selectedDay.month.toString() + selectedDay.day.toString();
        if (key in _schedule) {
          delete _schedule[key];
        }
        this.setData({
          todoList: [],
          schedule: _schedule
        })
        this.updateStorage();
        break;
      default:
        break;
    }
  },

  addSchedule: function (e) {
    var selectedDay = this.data.selectedDay;
    var _schedule = this.data.schedule;
    var key = selectedDay.year.toString() + selectedDay.month.toString() + selectedDay.day.toString();
    if (key in _schedule) {
      _schedule[key].push({
        begin: e.begin,
        end: e.end,
        todoText: e.todoText
      })
    } else {
      _schedule[key] = [{
        begin: e.begin,
        end: e.end,
        todoText: e.todoText
      }];
    }
    this.setData({
      schedule: _schedule,
      todoList: _schedule[key]
    });
    //更新calendar
    console.log("留待用于更新calendar");
    //更新缓存
    this.updateStorage();
  },
  updateStorage() {
    wx.setStorage({
      key: 'Schedule',
      data: this.data.schedule,
      success: (result) => {
        console.log("更新缓存成功");
      },
      fail: () => {
        console.log("更新缓存失败");
      },
      complete: () => {}
    });
  }
};

Page(conf);