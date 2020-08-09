// pages/index/search/你好.js
Component({

  /**
   * 组件的初始数据
   */
  data: {
    history_contents: [],
    hot_contents: ["大学生秃顶", "怎么找女朋友", "治疗脱发的100种方法", "久坐会得痔疮吗", "你是个好人"],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //将搜索记录写到本地缓存
    input_setStorage: function name(inputValue) {
      //只缓存最近十个搜索记录
      console.log("存储搜索记录：" + inputValue.value);
      this.data.history_contents.push(inputValue.value);
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
    //搜索确认
    confirmSearch: function name(e) {
      //将搜索记录写到本地缓存
      this.input_setStorage(e.detail);
      //跳转到搜索结果页面
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
      console.log("开始读取本地搜索记录");
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
    }
  },
})