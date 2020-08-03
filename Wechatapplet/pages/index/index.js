//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentData: 0,
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
        index: "0",
        name: "推荐",
        content: [{
            id: 0,
            img_url: "../../icon/swiper-Icon/swiper-img1.jpg",
            text: "推荐资讯零"
          },
          {
            id: 1,
            img_url: "../../icon/swiper-Icon/swiper-img2.jpg",
            text: "推荐资讯一"
          },
          {
            id: 2,
            img_url: "../../icon/swiper-Icon/swiper-img3.jpg",
            text: "推荐资讯二"
          },
          {
            id: 3,
            img_url: "../../icon/swiper-Icon/swiper-img3.jpg",
            text: "推荐资讯三"
          },
        ]
      },
      {
        id: 1,
        index: "1",
        name: "百科",
        content: [{
            id: 0,
            img_url: "",
            text: "百科资讯零"
          },
          {
            id: 1,
            img_url: "",
            text: "百科资讯一"
          },
          {
            id: 2,
            img_url: "",
            text: "百科资讯二"
          },
        ]
      },
      {
        id: 2,
        index: "2",
        name: "疫情",
        content: [{
            id: 0,
            img_url: "",
            text: "疫情资讯零"
          },
          {
            id: 1,
            img_url: "",
            text: "疫情资讯一"
          },
          {
            id: 2,
            img_url: "",
            text: "疫情资讯二"
          },
        ]
      },
      {
        id: 3,
        index: "3",
        name: "药品",
        content: [{
            id: 0,
            img_url: "",
            text: "药品资讯零"
          },
          {
            id: 1,
            img_url: "",
            text: "药品资讯一"
          },
          {
            id: 2,
            img_url: "",
            text: "药品资讯二"
          },
        ]
      },
      {
        id: 4,
        index: "4",
        name: "更多",
        content: [{}]
      },
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
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  //获取当前滑块的index
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;

    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  }

})