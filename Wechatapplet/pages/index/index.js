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
        item_content: "当前为公告为测试内容",
      },
      {
        id: 1,
        item_content: "小程序将持续更新",
      },
      {
        id: 2,
        item_content: "尽请期待",
      },
    ]
  },
  //事件处理函数
})