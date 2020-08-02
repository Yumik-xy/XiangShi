// components/Tabs/Tabs.js
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
    contents: [{
        id: 0,
        turn_address: "turn_passage0",
        content: "资讯一"
      },
      {
        id: 1,
        turn_address: "turn_passage1",
        content: "资讯二"
      },
      {
        id: 2,
        turn_address: "turn_passage2",
        content: "资讯三"
      },
      {
        id: 3,
        turn_address: "turn_passage3",
        content: "资讯四"
      },
      {
        id: 4,
        turn_address: "turn_passage4",
        content: "资讯五"
      },
      {
        id: 5,
        turn_address: "turn_passage5",
        content: "资讯六"
      },
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    turn_passage0: function () {
      wx.navigateTo({
        url: '../../pages/passages/passage0/passage0',
      })
    },

    turn_passage1: function () {
      wx.navigateTo({
        url: '../../pages/passages/passage1/passage1',
      })
    },

    turn_passage2: function () {
      wx.navigateTo({
        url: '../../pages/passages/passage2/passage2',
      })
    }
  }
})