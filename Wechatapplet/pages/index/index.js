//index.js
//获取应用实例
const app = getApp()
var time = require('../../utils/util.js');

Page({
  data: {
    isShowAll:false,
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
      turn_url: "./search/search",
      item_img_url: "../../icon/classfy-Icon/Img0.png",
      item_name: "药物查询",
    },
    {
      id: 1,
      turn_url: "../wiki/wiki",
      item_img_url: "../../icon/classfy-Icon/Img1.png",
      item_name: "疾病百科",
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
      item_content: "小程序将会持续更新，敬请期待。",
    },
    {
      id: 2,
      item_content: "使用过程中如有问题，请及时联系客服。",
    },
    ],
    contents: [{
      id: 0,
      name: "推荐",
      isActive: true,
      content: [{
        parent: 0,
        postid: 0,
        img_url: "../../icon/info/Img0.png",
        title: "乌鲁木齐：疫情“拐点”或正来临",
        readnum:"999",
        postwiki:"疫情",
        created:"2020-8-14"
      },
      {
        parent: 0,
        postid: 1,
        img_url: "../../icon/info/Img1.jpeg",
        title: "为什么疫情爆发要关闭海鲜市场",
        readnum:"999",
        postwiki:"疫情",
        created:"2020-8-14"
      },
      {
        parent: 0,
        postid: 2,
        img_url: "../../icon/info/Img2.jpg",
        title: "为什么现在年轻人脱发越来越严重了？",
        readnum:"999",
        postwiki:"百科",
        created:"2020-8-14"
      },
      {
        parent: 0,
        postid: 3,
        img_url: "../../icon/info/Img3.jpg",
        title: "大学生应该养成哪些好的生活习惯？",
        readnum:"999",
        postwiki:"百科",
        created:"2020-8-14"
      },
      ]
    },
    {
      id: 1,
      name: "百科",
      isActive: false,
      content: [{
        parent: 1,
        postid: 0,
        img_url: "",
        title: "防疫就是命令，防控就是责任",
      },
      {
        parent: 1,
        postid: 1,
        img_url: "",
        title: "防疫就是命令，防控就是责任",
      },
      {
        parent: 1,
        postid: 2,
        img_url: "",
        title: "防疫就是命令，防控就是责任",
      },
      ]
    },
    {
      id: 2,
      name: "疫情",
      isActive: false,
      content: [{
        parent: 2,
        postid: 0,
        img_url: "",
        title: "防疫就是命令，防控就是责任",
      },
      {
        parent: 2,
        postid: 1,
        img_url: "",
        title: "防疫就是命令，防控就是责任",
      },
      {
        parent: 2,
        postid: 2,
        img_url: "",
        title: "防疫就是命令，防控就是责任",
      },
      ]
    },
    {
      id: 3,
      name: "药品",
      isActive: false,
      content: [{
        parent: 3,
        postid: 0,
        img_url: "",
        title: "防疫就是命令，防控就是责任",
      },
      {
        parent: 3,
        postid: 1,
        img_url: "",
        title: "防疫就是命令，防控就是责任",
      },
      {
        parent: 3,
        postid: 2,
        img_url: "",
        title: "防疫就是命令，防控就是责任",
      },
      ]
    },
    ]
  },
  //事件处理函数
  turn_passage: function (event) {
    console.log(event)
    var that = this
    var first = event.currentTarget.dataset.first
    var second = event.currentTarget.dataset.second
    wx.navigateTo({
      url: './passage/passage?id=' + that.data.contents[first].content[second].id,
    })
  },

  handleItemChange(e) {
    const { index } = e.currentTarget.dataset;
    let content = this.data.contents;
    content.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false)
    this.setData({
      contents: content
    })
    var that = this
    wx.request({
      url: app.globalData.serverUrl + 'api/notify/list',
      data: {
        postwiki:index //获取点击的部分
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: 'GET',
      success: function (res) {
        if (res.data.status == false) {
          wx.showToast({
            title: res.data.message,
            icon: 'none'
          })
        } else if (res.data.status == true) {
          var tempList = res.data.data
          tempList.forEach((item) => {
            item.created = time.formatTime(new Date(item.created*1000),'Y-M-D');
            item.parent = 0
          })

          let item='contents['+index+'].content';
          that.setData({
            [item]: tempList //数据源
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: app.globalData.serverUrl + 'api/notify/list',
      data: {
        postwiki:0 //获取热搜
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: 'GET',
      success: function (res) {
        if (res.data.status == false) {
          wx.showToast({
            title: res.data.message,
            icon: 'none'
          })
        } else if (res.data.status == true) {
          console.log(res);
          var tempList = res.data.data
          tempList.forEach((item) => {
            item.created = time.formatTime(new Date(item.created*1000),'Y-M-D');
            item.parent = 0
          })
          that.setData({
            'contents[0].content': tempList 
          })
        }
      }
    })
  },
  showAll:function(){
    this.setData({
      isShowAll:!this.data.isShowAll
    })
  }
})