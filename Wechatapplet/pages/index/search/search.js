// pages/index/search/你好.js
Component({

  /**
   * 组件的初始数据
   */
  data: {
    search_content: '',
    history_contents: [],
    hot_contents: ["大学生秃顶", "怎么找女朋友", "治疗脱发的8种方法", "久坐会得痔疮吗", "大学生生活习惯"],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //搜索函数
    search: function () {
      console.log("向后端发送待搜索内容：" + this.data.search_content);

    },

    //搜索记录和热门推荐点击
    click_record: function (e) {
      this.setData({
        search_content: e.currentTarget.dataset.text
      });
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
      this.data.history_contents.push(this.data.search_content);
      if (this.data.history_contents.length > 10) {
        this.data.history_contents.shift();
      }
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
      })
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
    }
  },
})