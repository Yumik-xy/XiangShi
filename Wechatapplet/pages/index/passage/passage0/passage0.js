//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentScrollId: '',
    cp_index: 0,
    leftTop: 0,
    left_item_height: 0,
    passages: [{
      name: 'passage0',
      image_url: '../../../../icon/info/Img0.png',
      title: "【通报】新疆最新疫情播报！乌鲁木齐疫情“拐点”或正来临！",
      content: '<h2>1、新疆新冠肺炎疫情最新通报</h2><p>8月8日新疆（含兵团）新冠肺炎疫情最新通报</p> <p >新疆维吾尔自治区卫生健康委最新通报，8月8日0时至24时，新疆维吾尔自治区（含新疆生产建设兵团）报告新增新冠肺炎确诊病例15例，新增无症状感染者0例，均在乌鲁木齐市；新增治愈出院确诊病例30例，无症状感染者解除医学观察4例，均在乌鲁木齐市；重症转普通型2例，危重症转普通型1例。   <p >截至8月8日24时，新疆（含兵团）现有确诊病例625例（危重症10例、重症25例），其中乌鲁木齐市622例、喀什地区1例（乌鲁木齐市疫情关联病例）、昌吉州1例（乌鲁木齐市输入）、兵团1例；现有无症状感染者123例，其中乌鲁木齐市122例、昌吉州1例（乌鲁木齐市输入）；尚有18882人正在接受医学观察。</p><p>7月15日0时至8月8日24时，累计治愈出院确诊病例138例，无症状感染者解除医学观察71例。</p>   <h2>2、乌鲁木齐：疫情“拐点”或正来临</h2><p >8月8日下午，新疆维吾尔自治区人民政府新闻办召开疫情防控第二十二场新闻发布会，通报乌鲁木齐市新冠肺炎疫情和防控工作情况。</p> <p>发布会上，乌鲁木齐市人民政府副秘书长尚玉岚表示，本轮疫情以来，昨日单日治愈出院的确诊病例和解除医学观察的无症状感染者总数首次超过新报告感染者人数，在院治疗的确诊病例和接受医学观察的无症状感染者首次下降。</p> <p class>国务院医疗救治专家组和自治区医护人员正在全力以赴开展患者救治工作，不断优化诊疗方案，最大限度提高治愈率，努力让更多的患者早日治愈出院。</p> <h2>3、乌鲁木齐管控措施下降须满足2个条件！</h2><h2>4、蚊蝇不具备传播扩散</h2><p >有市民担心夏季蚊虫会传播新冠病毒，对此乌鲁木齐市疾控中心副主任文国新说，研究显示，新冠病毒主要通过结合宿主体内ACE（血管紧张素转换酶）受体而感染宿主细胞。而蚊蝇体内并无类似受体，因此不具备传播扩散新冠病毒的生物学基础。</p><p>新冠病毒主要通过近距离的飞沫传播，或手部接触了感染者污染的物品，再接触自己的口、鼻、眼而感染，特殊情况下可能发生气溶胶传播。</p><p>近年来，乌鲁木齐市持续推进爱国卫生运动，广泛地消除了蚊蝇滋生地，蚊蝇密度一直控制在较低水平，造成的传染病也是非常少的。尽管现有证据不支持蚊蝇可作为媒介传播新冠病毒，但它们具备传播其他疾病的风险。公众在家庭和户外，应做好防蚊虫叮咬的保护措施，降低各类媒介生物传染病发生的风险。</p> <h2>5、疫情期间运营的出租车驾驶员实行集中管理</h2> <p>乌鲁木齐市交通运输局副局长方勇介绍，出租车驾驶员实行集中管理。各出租车企业安排管理人员，对本公司疫情期间运营的驾驶员进行集中管理，每日早、中、晚测量体温，实行统一送餐，分散就餐制度。</strong>积极服从所在社区管理，安排出租车驾驶员志愿者对住宿点开展消毒工作，参加社区安排的核酸检测，严格防止驾驶员带病工作。</p><p><h4>加强出租车消杀工作。</h4>每车均配备“84”消毒液或酒精以及喷壶、防护手套等；严格执行消毒措施，对方向盘、座套、安全带、座椅、脚垫、后备厢等重点部位，每4小时进行一次消杀；在运营过程中打开车窗，保持通风状态，同时提高消杀频次，对车门把手、车窗升降纽、后备厢按钮等重点部位做到每趟次消杀1次。</p> <p><h4>加强司乘人员防护。</h4>出租车司机在营运过程中必须全程佩戴口罩和防护手套，有条件的还可穿着防护服；在乘客上车前检查有无7日内核酸检测报告（阴性）和离乌人员离乌证明，并对乘客信息进行登记，严格要求乘客乘车时全程佩戴口罩。</p> <p ><h4>加强检查督查。</h4>对各企业和驾驶员落实疫情防控措施工作及时进行监督检查，指导和纠正存在的问题，确保疫情防控消杀措施落到实处。</p>',
      id: 0,
    }, ],

    heightArr: 0,
    zindex: 0,
    oneShow: true
  },


  onLoad: function () {

  },
  onReady: function () {
    var that = this;
    var h = 0;
    var heightArr = [];
    wx.createSelectorQuery().select('.sc_left_item').boundingClientRect(function (rect) { //select会选择第一个类目的盒子
    }).exec(function (res) {
      that.setData({
        left_item_height: res[0].height
      })

    });

    wx.createSelectorQuery().selectAll('.sc_right_item').boundingClientRect(function (rect) { //selectAll会选择所要含有该类名的盒子
    }).exec(function (res) {
      res[0].forEach((item) => {
        h += item.height;
        heightArr.push(h);
      })
      that.setData({
        heightArr: heightArr
      })
    })
  },


  bindscroll: function (e) {
    var zindex = this.data.zindex;
    var oneShow = this.data.oneShow;
    let scrollTop = e.detail.scrollTop;
    let scrollArr = this.data.heightArr;
    for (let i = 0; i < scrollArr.length; i++) {
      if (scrollTop >= 0 && scrollTop < scrollArr[0]) {
        if (oneShow) {
          console.log('==============aaa' + scrollTop + "==" + scrollArr[0]);
          this.setData({
            cp_index: 0,
            leftTop: 0,
            zindex: 0,
            oneShow: false
          })
          return
        }
      } else if (scrollTop >= (scrollArr[i - 1]) && scrollTop < scrollArr[i]) {
        if (i != zindex) {
          console.log('==============bbb' + i + scrollTop + "==" + scrollArr[i]);
          this.setData({
            oneShow: true,
            zindex: i,
            cp_index: i,
            leftTop: i * this.data.left_item_height
          })
        }
      }
    }
  }
})