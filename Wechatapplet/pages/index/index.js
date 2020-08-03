//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiper_imgs: [{
        id: 0,
        item_img_url: "../../icon/swiper-Icon/swiper-img1.jpg",
      },
      {
        id: 1,
        item_img_url: "../../icon/swiper-Icon/swiper-img2.jpg",
      },
      {
        id: 2,
        item_img_url: "../../icon/swiper-Icon/swiper-img3.jpg",
      },
    ],

    classfy: [{
        id: 0,
        turn_url: "../wiki/wiki",
        item_img_url: "../../icon/classfy-Icon/Img0.png",
        item_name: "药物查询",
      },
      {
        id: 1,
        turn_url: "../inquiry/inquiry",
        item_img_url: "../../icon/classfy-Icon/Img1.png",
        item_name: "在线问诊",
      },
      {
        id: 2,
        turn_url: "./register/register",
        item_img_url: "../../icon/classfy-Icon/Img2.png",
        item_name: "急速挂号",
      },
      {
        id: 3,
        turn_url: "./calendar/calendar",
        item_img_url: "../../icon/classfy-Icon/Img3.png",
        item_name: "健康日历",
      },
    ],

    notice: [{
        id: 0,
        item_content: "湘识健康正在测试中，感谢您的使用！",
      },
      {
        id: 1,
        item_content: "小程序将会持续更新，尽情期待。",
      },
      {
        id: 2,
        item_content: "使用过程中如有问题，请及时联系客服。",
      },
    ],
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
      }
    ]
  },
  //事件处理函数
  turn_passage0: function () {
    wx.navigateTo({
      url: '../passages/passage0/passage0',
    })
  },

  turn_passage1: function () {
    wx.navigateTo({
      url: '../passages/passage1/passage1',
    })
  },

  turn_passage2: function () {
    wx.navigateTo({
      url: '../passages/passage2/passage2',
    })
  }

})