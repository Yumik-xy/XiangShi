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
    tabs: [
      {
        id:0,
        turn_address: "turn_patient",
        item_image_uri: "iconfont icon-huanzhexinxi",
        item_name: "患者信息"
      },
      {
        id:1,
        turn_address: "turn_history",
        item_image_uri: "iconfont icon-bingli",
        item_name: "病历"
      },
      {
        id:2,
        turn_address: "turn_setup",
        item_image_uri: "iconfont icon-shezhi",
        item_name: "设置"
      },
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    turn_patient: function () {
      wx.navigateTo({
        url: '../../pages/mine/patient/patient',
      })
    },
  
    turn_history: function () {
      wx.navigateTo({
        url: '../../pages/mine/history/history',
      })
    },
  
    turn_setup: function () {
      wx.navigateTo({
        url: '../../pages/mine/setup/setup',
      })
    }
  }
})
