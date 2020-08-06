//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentScrollId:'',
    cp_index:0,
    leftTop:0,
    left_item_height:0,
    leftData:[
      {
        name:'概述',
        id:'cp1'
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
    rightData: [
      {
        name:'概述',
        content:'',
        id: 'cp1',
      },
      {
        name: '病因',
        content: '<title>地摊</title><h1>地摊</h1><h2>营销策略</h2><h3>营销诊断</h3><h4>市场背景</h4><p>		地摊经济曾因为存在影响市容，堵塞交通，管理困难等原因，导致政府的监管难度大，执法难度高，导致后期政府机关对地摊严抓严打，现阶段几乎难以再见。但在2020年新冠疫情压力下，待业失业的人数大量增加。地摊经济的复苏，或许也将解决一小部分人的就业问题。</p><p>		但是过去取缔地摊，也并非没有原因。地摊的管理难度相当大，商贩们只要一辆小推车，就能四处游走，在路边摆摊营生，一方面影响市容市貌，另一方面流动性大，不便管理，而且极大地影响道路的通行面积和效率，因此无法合法合规化。</p><h4>产品优势</h4><p>		本程序借由一套完整的商户预约，按点分“摊”；政府管理，后台规划的地摊管理体制。该项目提出了“摆摊申请机制”能便捷、高效的使商户的地摊合理合规化，大大减少了政府部门对地摊的监管难度，有效缓解了地摊对市容交通的影响。</p><h3>营销方案</h3><p>		目前最主要的问题就是如何推广使得政府部门以及地摊商户使用我们提供的管理模式，以及提高产品的知名度。作为一个初创项目，我们没有切实的成功案例向政府部门推行，但唯有政府部门采纳才能成功推广。所以只能尝试选取高校等地区为试点，以提升产品知名度不断完善营销策略。</p><p>		为达到以上目的，初定方案如下：</p><h4>确立营销目标</h4><p>		提高知名度，确立与政府部门的合作，扩大市场占有率，树立自己的品牌特色。</p><h4>明确营销目标</h4><h5>推广方案</h5><p>		先立足于青岛，进入市场。第一，项目所有成员均就读与山东大学青岛校区，便于合作开发；第二，青岛同样拥有地摊产业，适合项目的推广。通过规范校园附近的地摊经济，为其管理部门提供管理平台，为地摊商户的摊点提供规划性帮助，以优质的服务赢得政府的赞誉，提高产品口碑。此外我们会对物美价廉的优质地摊户提供一定规模的广告宣传，吸引其他消费者的关注，给商户形成良心的交易循环，提高对产品的宣传。</p><h5>营销目标</h5><h6>初期目标</h6><p>		在一年内，能切实有效的得到周边摊贩的好评，成功与本地的政府部门合作。并积极与摊贩和政府部门沟通，优化产品的管理体系，提高用户的体验。</p><p>		侧重点：收集反馈信息，优化产品体系。</p><p>		操作方法：定期通过产品发放问卷调查，获取摊贩、用户、政府管理部门的需求。</p><h6>成熟目标</h6><p>		在二到三年内，能和山东绝大部分地区进行合作，并开始向全省全国地区推广。并逐步扩大服务规模，提供更好的产品服务。</p><p>		侧重点：品牌推广，积累经验。</p><p>		操作方法：借助青岛的优质反馈，推行完善的管理体制和服务项目，帮助其他地方对地毯管理。</p><h6>末期目标</h6><p>		成功推进项目向全国发展，开创新的服务项目，做大推广品牌优势，积极与政府部门合作。</p><p>		侧重点：开创新的服务项目。</p><p>		操作方法：产品维护趋于稳定，应积极了解社会动态，帮助政府解决难点问题。</p><h5>实施方案</h5><h6>明确的项目分工</h6><p>		初创期人数不多，明确的分工对项目的整体发展作用巨大。在项目总体搭建完成后，明确推广、维护、管理小组，以提高效率。</p><h6>充分的市场调研</h6><p>		通过对市场调研以定位我们的服务方向和服务策略，对症下药提供准确的产品功能。了解政府部门管理摊贩的困难点，改进点；掌握摊贩对软件的可操作程度等。</p><h3>盈利模式</h3><p>采用订阅制模式，提供软件的安装以及后期的维护服务；内置一定的广告费。</p><h4>核心盈利点</h4><p>？？？</p><p>	</p>',
        id: 'cp2',
      },
      {
        name: '诊断',
        content:'',
        id: 'cp3',
      },
      {
        name: '临床表现',
        content:'',
        id: 'cp4',
      },

      {
        name: '症状',
        content:'',
        id: 'cp5',
      },
      {
        name: '治疗方法',
        content:'',
        id: 'cp6',

      },
      {
        name: '预防',
        content:'',
        id: 'cp7',

      },
      {
        name: '高危人群',
        content:'',
        id: 'cp8',

      },
      {
        name: '相关疾病',
        content:'',
        id: 'cp9',
      }
    ],

    heightArr:0,
    zindex:0,
    oneShow:true
  },


  onLoad:function(){

  },
  onReady:function(){
    var that=this;
    var h=0;
    var heightArr=[];
    wx.createSelectorQuery().select('.sc_left_item').boundingClientRect(function (rect) { //select会选择第一个类目的盒子
    }).exec(function (res) {
      that.setData({ left_item_height: res[0].height })
      
    });

    wx.createSelectorQuery().selectAll('.sc_right_item').boundingClientRect(function (rect) {//selectAll会选择所要含有该类名的盒子
    }).exec(function (res) {
       res[0].forEach((item)=>{
          h+=item.height;
          heightArr.push(h);
       })
      that.setData({heightArr:heightArr})
    })
  },

  leftTap:function(e){
    var index=e.currentTarget.dataset.index;
    var id = e.currentTarget.dataset.id;
    this.setData({
      cp_index: index,
      currentScrollId:id
    })
  },

  bindscroll:function(e){
    var zindex = this.data.zindex;
    var oneShow=this.data.oneShow;
    let  scrollTop = e.detail.scrollTop;
    let  scrollArr = this.data.heightArr;
      for  (let  i = 0; i < scrollArr.length; i++) {
        if  (scrollTop >= 0  && scrollTop < scrollArr[0]) {
          if (oneShow){
          console.log('==============aaa'  + scrollTop + "=="  + scrollArr[0]);
          this.setData({
            cp_index: 0,
            leftTop: 0,
            zindex:0,
            oneShow:false
          })
          return
          }
        }  else  if  (scrollTop >= (scrollArr[i - 1]) && scrollTop < scrollArr[i]) {
          if (i != zindex){
            console.log('==============bbb' + i + scrollTop + "==" + scrollArr[i]);
            this.setData({
              oneShow: true,
              zindex:i,
              cp_index: i,
              leftTop: i * this.data.left_item_height
            })
          } 
        }
      }
  }
})
