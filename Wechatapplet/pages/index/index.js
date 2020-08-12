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
      item_content: "小程序将会持续更新，尽情期待。",
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
        text: "新疆维吾尔自治区卫生健康委最新通报，8月8日0时至24时，新疆维吾尔自治区（含新疆生产建设兵团）报告新增新冠肺炎确诊病例15例，新增无症状感染者0例，均在乌鲁木齐市；新增治愈出院确诊病例30例，无症状感染者解除医学观察4例，均在乌鲁木齐市；重症转普通型2例，危重症转普通型1例。",
      },
      {
        parent: 0,
        postid: 1,
        img_url: "../../icon/info/Img1.jpeg",
        title: "为什么疫情爆发要关闭海鲜市场",
        text: "事实上，这也并不是海鲜的错，错在于人！ 一、货源不明 在国际著名的水产行业垂直网站SeaFoodsource（海鲜之源）一篇报道，根据2014年数据，现在中国市面上大约有30%的三文鱼都是通过走私途径来的。2018年，广州查获了一批价值6亿的三文鱼走私案，在报道中也提及这一次与三文鱼病毒有关的京深海鲜市场。在2016年，上海海关破获货值2.5亿特大海鲜走私案。"
      },
      {
        parent: 0,
        postid: 2,
        img_url: "../../icon/info/Img2.jpg",
        title: "为什么现在年轻人脱发越来越严重了？",
        text: "随着社会的不断发展，人们的生活作息、压力水平和饮食习惯都发生了巨大变化，脱发人群数量激增且呈年轻化发展，许多年轻人无奈的发现，原本以为脱发是中老年人的专利，离自己还很遥远，但是事实确并不是这回事----据世界卫生组织数据显示，中国男性脱发率达20%，30岁前脱发占比更是高达84%。同时调查发现，由于脱发对外在形象的负面影响，脱发人群较正常人群相比抑郁程度更高。"
      },
      {
        parent: 0,
        postid: 3,
        img_url: "../../icon/info/Img3.jpg",
        title: "大学生应该养成哪些好的生活习惯？",
        text: "1.每天早上记得吃早饭无论再忙，时间再赶；或是再闲，起得晚点，也不要忘了吃早餐，哪怕吃上一点东西垫一垫肚子也好。每年大学生因为胃病请假、休学的不在少数。2.每天保持一定的运动量去健身房健身也好，在操场跑步也罢，或者只是每天饭后走走路消消食，都对身体有着不可或缺的好处。"
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
        text: "防疫就是命令，防控就是责任"
      },
      {
        parent: 1,
        postid: 1,
        img_url: "",
        title: "防疫就是命令，防控就是责任",
        text: "防疫就是命令，防控就是责任"
      },
      {
        parent: 1,
        postid: 2,
        img_url: "",
        title: "防疫就是命令，防控就是责任",
        text: "防疫就是命令，防控就是责任"
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
        text: "防疫就是命令，防控就是责任"
      },
      {
        parent: 2,
        postid: 1,
        img_url: "",
        title: "防疫就是命令，防控就是责任",
        text: "防疫就是命令，防控就是责任"
      },
      {
        parent: 2,
        postid: 2,
        img_url: "",
        title: "防疫就是命令，防控就是责任",
        text: "防疫就是命令，防控就是责任"
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
        text: "防疫就是命令，防控就是责任"
      },
      {
        parent: 3,
        postid: 1,
        img_url: "",
        title: "防疫就是命令，防控就是责任",
        text: "防疫就是命令，防控就是责任"
      },
      {
        parent: 3,
        postid: 2,
        img_url: "",
        title: "防疫就是命令，防控就是责任",
        text: "防疫就是命令，防控就是责任"
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("接收来自后端的轮播图信息，存储到swiper_imgs数组中");
    console.log("接收来自后端的咨询信息,存储到contents数组中");
  },
})