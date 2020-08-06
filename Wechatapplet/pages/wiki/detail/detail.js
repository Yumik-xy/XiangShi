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
        content: '<p style="margin-top:5px;margin-right:0;margin-bottom:5px;margin-left:0;text-align:left;line-height:200%"> <strong><span style="font-size:19px;line-height:200%;font-family:宋体;color:black">病因</span></strong> </p> <p> <span style="font-size:16px;line-height:200%;font-family:宋体">  <hr/></span>  </p> <p style="margin-top:5px;margin-right:0;margin-bottom:5px;margin-left:0;text-align:left;text-indent:28px;line-height:150%"> <span style="font-size:16px;line-height:150%;font-family:宋体;color:black">流感患者咳嗽或者打喷嚏的时候，流感病毒就会从患者的呼吸道随着数以百万计的微小液滴，喷入周围的空气中。这些小液滴通常可以传播大约一米的范围。在降落在物体表面之前，它们一直悬浮在空气中，并且可以存活长达24小时。任何人如果吸入了这种含有病毒颗粒的空气，都可能被感染上流感。另一种途径是，手接触了被含病毒小液滴污染的物体表面，随后又用手接触了自己的鼻子和嘴巴。</span> </p> <p style="margin-top:5px;margin-right:0;margin-bottom:5px;margin-left:0;text-align:left;text-indent:28px;line-height:150%"> <span style="font-size:16px;line-height:150%;font-family:宋体;color:black">我们每天不管是在家里还是在公共场所，都很容易接触到流感病毒。这些病毒传播的媒介包括被污染的食物、门把手、遥控器、扶手、电话和电脑键盘等等。因此，经常洗手对于预防流感很重要。&nbsp;&nbsp;&nbsp;&nbsp;</span> </p> <p style="margin-top:5px;margin-right:0;margin-bottom:5px;margin-left:0;text-align:left;text-indent:28px;line-height:150%"> <span style="font-size:16px;line-height:150%;font-family:宋体;color:black">同一类流感病毒也可能多次感染同一个人的。因为流感病毒经常在不断地发生变化，机体感染某种流感病毒痊愈后，对该病毒会有一定的免疫力，但对于新的变异了的病毒就没有免疫力了。</span> </p> <p style="line-height: 150%;"> <span style="font-size:16px;line-height:150%;font-family: 宋体"></span><span style="font-family: 宋体; text-indent: 28px;">&nbsp;&nbsp;</span> </p>',
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
