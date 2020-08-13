const app = getApp()

Page({
  data: {
    currentScrollId: '',
    cp_index: 0,
    leftTop: 0,
    left_item_height: 0,
    heightArr: 0,
    zindex: 0,
    oneShow: true,
    leftData: [{
        name: '概述',
        id: 'cp1'
      },
      {
        name: '病因',
        id: 'cp2'
      },
      {
        name: '诊断',
        id: 'cp3'
      },
      {
        name: '临床表现',
        id: 'cp4'
      },

      {
        name: '症状',
        id: 'cp5'
      },
      {
        name: '治疗方法',
        id: 'cp6'
      },
      {
        name: '预防',
        id: 'cp7'
      },
      {
        name: '高危人群',
        id: 'cp8'
      },
      {
        name: '相关疾病',
        id: 'cp9'
      }
    ],
    rightData: [{
        content: '',
        id: 'cp1',
      },
      {
        content: '',
        id: 'cp2',
      },
      {
        content: '',
        id: 'cp3',
      },
      {
        content: '',
        id: 'cp4',
      },

      {
        content: '',
        id: 'cp5',
      },
      {
        content: '',
        id: 'cp6',
      },
      {
        content: '',
        id: 'cp7',

      },
      {
        content: '',
        id: 'cp8',
      },
      {
        content: '',
        id: 'cp9',
      }
    ],
    symptomname:''
  },


  onLoad: function (options) {    
    var that = this;
    this.setData({
      id: options.id
    })

    wx.request({
      url: app.globalData.serverUrl + 'api/symptom',
      data: {
        id: options.id
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: 'GET',
      success: function (res) {
        console.log(res)
        if (res.data.status == false) {
          wx.showToast({
            title: res.data.message,
            icon: 'none'
          })
        } else if (res.data.status == true) {
          that.setData({
            'rightData[0].content':res.data.data[0].summary,
            'rightData[1].content':res.data.data[0].pathogeny,
            'rightData[2].content':res.data.data[0].diagnosis,
            'rightData[3].content':res.data.data[0].clinical,
            'rightData[4].content':res.data.data[0].symptom,
            'rightData[5].content':res.data.data[0].therapeutic,
            'rightData[6].content':res.data.data[0].prevention,
            'rightData[7].content':res.data.data[0].highriskgroup,
            'rightData[8].content':res.data.data[0].relateddiseases,
            symptomname :res.data.data[0].symptomname
          })
        }
      }
    })
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

  leftTap: function (e) {
    var index = e.currentTarget.dataset.index;
    var id = e.currentTarget.dataset.id;
    this.setData({
      cp_index: index,
      currentScrollId: id
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