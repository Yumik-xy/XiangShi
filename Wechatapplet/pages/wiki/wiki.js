// pages/wiki/wiki.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateItems:[
      {
        cate_id:0,
        cate_name:'头部',
        children: [
          { 
            child_id: 0, 
            name: '鼻', 
            children: [{
              parent_id:0,
              id: 0,
              title:'流感'
            },
            {
              parent_id:0,
              id: 1,
              title:'鼻窦炎'
            }]
          }, 
          { 
            child_id: 1, 
            name: '耳', 
            children: [{
              parent_id:1,
              id: 0,
              title:'耳鸣'
            },
            {
              parent_id:1,
              id: 1,
              title:'鼻窦炎'
            }]
          }, 
          { 
            child_id: 2, 
            name: '口', 
            children: [{
              parent_id:2,
              id: 0,
              title:'口腔溃疡'
            },
            {
              parent_id:2,
              id: 1,
              title:'唇腭裂'
            }]
          }, 
          { 
            child_id: 3, 
            name: '颅脑', 
            children: [{
              parent_id:3,
              id: 0,
              title:'脑死亡'
            },
            {
              parent_id:3,
              id: 1,
              title:'帕金森氏病'
            }]
          }, 
          { 
            child_id: 4, 
            name: '面部', 
            children: [{
              parent_id:4,
              id: 0,
              title:'面瘫'
            },
            {
              parent_id:4,
              id: 1,
              title:'脸红'
            }]
          }, 
          { 
            child_id: 5, 
            name: '咽喉', 
            children: [{
              parent_id:5,
              id: 0,
              title:'打鼾'
            },
            {
              parent_id:5,
              id: 1,
              title:'慢性扁桃体炎'
            }]
          }, 
          { 
            child_id: 6, 
            name: '眼', 
            children: [{
              parent_id:6,
              id: 0,
              title:'白内障'
            },
            {
              parent_id:6,
              id: 1,
              title:'青光眼'
            }]
          }
        ]
      },
      {
        cate_id:1,
        cate_name:'颈部',
        children: [
          { 
            child_id: 0, 
            name: '甲状腺', 
            children: [{
              parent_id:0,
              id: 0,
              title:'甲亢'
            },
            {
              parent_id:0,
              id: 1,
              title:'甲减'
            }]
          },
          { 
            child_id: 1, 
            name: '气管', 
            children: [{
              parent_id:1,
              id: 0,
              title:'下呼吸道感染'
            },
            {
              parent_id:1,
              id: 1,
              title:'毛细支气管炎'
            }]
          }
        ]
      },
      {
        cate_id:2,
        cate_name:'胸部',
        children: [
          { 
            child_id: 0, 
            name: '肺', 
            children: [{
              parent_id:0,
              id: 0,
              title:'哮喘'
            },
            {
              parent_id:0,
              id: 1,
              title:'肺结核'
            }]
          },
          { 
            child_id: 1, 
            name: '膈肌', 
            children: [{
              parent_id:1,
              id: 0,
              title:'支气管扩张'
            },
            {
              parent_id:1,
              id: 1,
              title:'创伤性膈疝'
            }]
          },
          { 
            child_id: 2, 
            name: '乳房', 
            children: [{
              parent_id:2,
              id: 0,
              title:'乳腺癌'
            },
            {
              parent_id:2,
              id: 1,
              title:'乳房肿块'
            }]
          },
          { 
            child_id: 3, 
            name: '食管', 
            children: [{
              parent_id:3,
              id: 0,
              title:'呕血'
            },
            {
              parent_id:3,
              id: 1,
              title:'食物中毒'
            }]
          },
          { 
            child_id: 4, 
            name: '心脏', 
            children: [{
              parent_id:4,
              id: 0,
              title:'心律失常'
            },
            {
              parent_id:4,
              id: 1,
              title:'心肌梗死'
            }]
          },
          { 
            child_id: 5, 
            name: '纵膈', 
            children: [{
              parent_id:5,
              id: 0,
              title:'先天性膈疝'
            },
            {
              parent_id:5,
              id: 1,
              title:'急性纵隔炎'
            }]
          }
        ]
      },
      {
        cate_id: 3,
        cate_name: '腹部',
        children: [
          { 
            child_id: 0, 
            name: '肠', 
            children: [{
              parent_id:0,
              id: 0,
              title:'克罗恩病'
            },
            {
              parent_id:0,
              id: 1,
              title:'乳糖不耐受'
            }]
          },
          { 
            child_id: 1, 
            name: '肠系膜', 
            children: [{
              parent_id:1,
              id: 0,
              title:'急性肠系膜淋巴结炎'
            },
            {
              parent_id:1,
              id: 1,
              title:'十二指肠旁疝'
            }]
          },
          { 
            child_id: 2, 
            name: '胆', 
            children: [{
              parent_id:2,
              id: 0,
              title:'高胆固醇血症'
            },
            {
              parent_id:2,
              id: 1,
              title:'胆结石'
            }]
          },
          { 
            child_id: 3, 
            name: '腹膜', 
            children: [{
              parent_id:3,
              id: 0,
              title:'腹膜炎'
            },
            {
              parent_id:3, 
              id: 1,
              title:'急性腹膜炎'
            }]
          },
          { 
            child_id: 4, 
            name: '肝', 
            children: [{
              parent_id:4,
              id: 0,
              title:'乙肝'
            },
            {
              parent_id:4,
              id: 1,
              title:'甲肝'
            }]
          },
          { 
            child_id: 5, 
            name: '阑尾', 
            children: [{
              parent_id:5,
              id: 0,
              title:'阑尾炎'
            },
            {
              parent_id:5,
              id: 1,
              title:'急性阑尾炎'
            }]
          },
          { 
            child_id: 6, 
            name: '脾', 
            children: [{
              parent_id:6,
              id: 0,
              title:'脾破裂'
            },
            {
              parent_id:6,
              id: 1,
              title:'巴贝虫病'
            }]
          },
          { 
            child_id: 7, 
            name: '胃', 
            children: [{
              parent_id:7,
              id: 0,
              title:'胃炎'
            },
            {
              parent_id:7,
              id: 1,
              title:'胃穿孔'
            }]
          },
          { 
            child_id: 8, 
            name: '胰腺', 
            children: [{
              parent_id:8,
              id: 0,
              title:'糖尿病'
            },
            {
              parent_id:8,
              id: 1,
              title:'胰腺癌'
            }]
          }
        ]
      },
      {
        cate_id: 4,
        cate_name: '腰部',
        children: [
          { 
            child_id: 0, 
            name: '肾', 
            children: [{
              parent_id:0,
              id: 0,
              title:'肾结石'
            },
            {
              parent_id:0,
              id: 1,
              title:'急性肾损伤'
            }]
          },
          { 
            child_id: 1, 
            name: '肾上腺', 
            children: [{
              parent_id:1,
              id: 0,
              title:'库欣综合征'
            },
            {
              parent_id:1,
              id: 1,
              title:'先天性肾上腺皮质增生症'
            }]
          },
          { 
            child_id: 2, 
            name: '输尿管', 
            children: [{
              parent_id:2,
              id: 0,
              title:'真菌性尿路感染'
            },
            {
              parent_id:2,
              id: 1,
              title:'右侧输尿管结石'
            }]
          }
        ]
      },
      {
        cate_id: 5,
        cate_name: '男性生殖',
        children: [
          { 
            child_id: 0, 
            name: '睾丸', 
            children: [{
              parent_id:0,
              id: 0,
              title:'隐睾症'
            },
            {
              parent_id:0,
              id: 1,
              title:'先天性睾丸发育不全综合征'
            }]
          },
          { 
            child_id: 1, 
            name: '前列腺', 
            children: [{
              parent_id:1,
              id: 0,
              title:'前列腺癌'
            },
            {
              parent_id:1,
              id: 1,
              title:'前列腺钙化'
            }]
          },
          { 
            child_id: 2, 
            name: '输精管', 
            children: [{
              parent_id:2,
              id: 0,
              title:'精囊结石'
            },
            {
              parent_id:2,
              id: 1,
              title:'输精管炎'
            }]
          },
          { 
            child_id: 3, 
            name: '阴茎', 
            children: [{
              parent_id:3,
              id: 0,
              title:'阴茎癌'
            },
            {
              parent_id:3,
              id: 1,
              title:'持续勃起症'
            }]
          },
          { 
            child_id: 4, 
            name: '阴囊', 
            children: [{
              parent_id:4,
              id: 0,
              title:'睾丸鞘膜积液'
            },
            {
              parent_id:4,
              id: 1,
              title:'阴囊坏疽'
            }]
          }
          
        ]
      },
      {
        cate_id: 6,
        cate_name: '女性生殖',
        children: [
          { 
            child_id: 0, 
            name: '卵巢', 
            children: [{
              parent_id:0,
              id: 0,
              title:'多囊卵巢综合征'
            },
            {
              parent_id:0,
              id: 1,
              title:'先天性卵巢发育不全'
            }]
          },
          { 
            child_id: 1, 
            name: '输卵管', 
            children: [{
              parent_id:1,
              id: 0,
              title:'急性输卵管炎'
            },
            {
              parent_id:1,
              id: 1,
              title:'异位妊娠'
            }]
          },
          { 
            child_id: 2, 
            name: '外阴', 
            children: [{
              parent_id:2,
              id: 0,
              title:'外阴前庭炎'
            },
            {
              parent_id:2,
              id: 1,
              title:'外阴恶性黑色素瘤'
            }]
          },
          { 
            child_id: 3, 
            name: '阴道', 
            children: [{
              parent_id:3,
              id: 0,
              title:'阴道滴虫病'
            },
            {
              parent_id:3,
              id: 1,
              title:'阴道干燥'
            }]
          },
          { 
            child_id: 4, 
            name: '子宫', 
            children: [{
              parent_id:4,
              id: 0,
              title:'子宫肌瘤'
            },
            {
              parent_id:4,
              id: 1,
              title:'子宫颈癌'
            }]
          }
        ]
      },
      {
        cate_id: 7,
        cate_name: '全身',
        children: [
          { 
            child_id: 0, 
            name: '肌肉', 
            children: [{
              parent_id:0,
              id: 0,
              title:'纤维肌痛症'
            },
            {
              parent_id:0,
              id: 1,
              title:'腱鞘炎'
            }]
          },
          { 
            child_id: 1, 
            name: '淋巴', 
            children: [{
              parent_id:1,
              id: 0,
              title:'霍奇金淋巴瘤'
            },
            {
              parent_id:1,
              id: 1,
              title:'急性淋巴管炎'
            }]
          },
          { 
            child_id: 2, 
            name: '免疫系统', 
            children: [{
              parent_id:2,
              id: 0,
              title:'系统红斑狼疮'
            },
            {
              parent_id:2,
              id: 1,
              title:'先天性免疫缺陷综合征'
            }]
          },
          { 
            child_id: 3, 
            name: '皮肤', 
            children: [{
              parent_id:3,
              id: 0,
              title:'接触性皮炎'
            },
            {
              parent_id:3,
              id: 1,
              title:'痤疮'
            }]
          },
          { 
            child_id: 4, 
            name: '血液血管', 
            children: [{
              parent_id:4,
              id: 0,
              title:'败血症'
            },
            {
              parent_id:4,
              id: 1,
              title:'缺铁性贫血'
            }]
          },
          { 
            child_id: 5, 
            name: '血液血管', 
            children: [{
              parent_id:5,
              id: 0,
              title:'败血症'
            },
            {
              parent_id:5,
              id: 1,
              title:'缺铁性贫血'
            }]
          },
          { 
            child_id: 6, 
            name: '周围神经', 
            children: [{
              parent_id:5,
              id: 0,
              title:'三叉神经痛'
            },
            {
              parent_id:5,
              id: 1,
              title:'外周神经病变'
            }]
          },
          { 
            child_id: 7, 
            name: '系统', 
            children: [{
              parent_id:7,
              id: 0,
              title:'不安腿综合征'
            }]
          }
        ]
      },
      {
        cate_id: 8,
        cate_name: '四肢',
        children: [
          { 
            child_id: 0, 
            name: '上肢', 
            children: [{
              parent_id:0,
              id: 0,
              title:'肩痛'
            },
            {
              parent_id:0,
              id: 1,
              title:'肩周炎'
            }]
          },
          { 
            child_id: 1, 
            name: '下肢', 
            children: [{
              parent_id:1,
              id: 0,
              title:'静脉曲张'
            },
            {
              parent_id:1,
              id: 1,
              title:'腓骨肌萎缩症'
            }]
          }
        ]
      },
      {
        cate_id: 9,
        cate_name: '盆腔',
        children: [
          { 
            child_id: 0, 
            name: '膀胱', 
            children: [{
              parent_id:0,
              id: 0,
              title:'尿失禁'
            },
            {
              parent_id:0,
              id: 1,
              title:'膀胱炎'
            }]
          },
          { 
            child_id: 1, 
            name: '尿道', 
            children: [{
              parent_id:1,
              id: 0,
              title:'上尿路结石'
            },
            {
              parent_id:1,
              id: 1,
              title:'上尿路感染'
            }]
          }
        ]
      },
      {
        cate_id: 10,
        cate_name: '臀部',
        children: [
          { 
            child_id: 0, 
            name: '肛门', 
            children: [{
              parent_id:0,
              id: 0,
              title:'肛裂'
            },
            {
              parent_id:0,
              id: 1,
              title:'痔疮'
            }]
          }
        ]
      },
      {
        cate_id: 11,
        cate_name: '骨',
        children: [
          { 
            child_id: 0, 
            name: '骨髓', 
            children: [{
              parent_id:0,
              id: 0,
              title:'先天性白血病'
            },
            {
              parent_id:0,
              id: 1,
              title:'浆细胞性骨髓瘤'
            }]
          },
          { 
            child_id: 1, 
            name: '关节', 
            children: [{
              parent_id:1,
              id: 0,
              title:'扳机指'
            },
            {
              parent_id:1,
              id: 1,
              title:'类风湿关节炎'
            }]
          },
          { 
            child_id: 2, 
            name: '脊髓', 
            children: [{
              parent_id:2,
              id: 0,
              title:'创伤性骨髓炎'
            },
            {
              parent_id:2,
              id: 1,
              title:'急性脊髓炎'
            }]
          },
          { 
            child_id: 3, 
            name: '脊柱', 
            children: [{
              parent_id:3,
              id: 0,
              title:'颈椎病'
            },
            {
              parent_id:3,
              id: 1,
              title:'腰椎间盘突出'
            }]
          },
          { 
            child_id: 4, 
            name: '肋骨', 
            children: [{
              parent_id:4,
              id: 0,
              title:'肋骨骨折'
            },
            {
              parent_id:4,
              id: 1,
              title:'肋软骨炎'
            }]
          },
          { 
            child_id: 5, 
            name: '盆骨', 
            children: [{
              parent_id:5,
              id: 0,
              title:'盆骨骨折'
            },
            {
              parent_id:5,
              id: 1,
              title:'先天髋内翻'
            }]
          },
          { 
            child_id: 6, 
            name: '上肢骨', 
            children: [{
              parent_id:6,
              id: 0,
              title:'网球肘'
            },
            {
              parent_id:6,
              id: 1,
              title:'尺桡骨干双骨折'
            }]
          },
          { 
            child_id: 7, 
            name: '下肢骨', 
            children: [{
              parent_id:7,
              id: 0,
              title:'扁平足'
            },
            {
              parent_id:7,
              id: 1,
              title:'马蹄内翻足'
            }]
          },
          { 
            child_id: 8, 
            name: '其他骨', 
            children: [{
              parent_id:8,
              id: 0,
              title:'锁骨骨折'
            },
            {
              parent_id:8,
              id: 1,
              title:'踝关节骨折'
            }]
          }
        ]
      }
    ],
    curNav:0,
    curIndex:0
  },
 
  nav_click:function(e){
    var index = e.currentTarget.dataset.fcid
    var childindex = e.currentTarget.dataset.cid
    var curindex = this.data.curIndex
    var data = this.data.cateItems[curindex].children[index].children
    console.log(index);
    console.log(childindex);
    
    if (data===undefined) {wx.showToast({
      title: '暂无更多信息',
      duration:2000,
      icon:'none'
    })
      return}
    wx.navigateTo({
      url: './detail/detail?data='+encodeURIComponent(JSON.stringify(data)),
    })
  },

  switchRightTab:function(e){
    var id = e.target.dataset.id,index=e.target.dataset.index;
    this.setData({
      curNav:id,
      curIndex:index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})