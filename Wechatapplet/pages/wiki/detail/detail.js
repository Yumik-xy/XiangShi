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
        content:'<h1><strong>概述</strong></h1> <hr/> <p>流感是一种通过咳嗽和打喷嚏传播的、常见的病毒感染性疾病。感染流感病毒后，身体会出现高热、乏力、咳嗽、全身疼痛等不适，但是通常在一周左右症状会缓解。流感可以在一年四季流行，但在冬天特别常见，这就是为什么它也被称为“季节性流感”。 与普通感冒不同的是，流感是由一组特殊的病毒引起，并且流感的症状出现得更突然、更严重，也持续得更久。流感的主要症状包括：38℃以上的发热、乏力、头痛、全身疼痛、支气管炎样的干咳，以及与普通感冒类似的症状，如鼻塞、流涕、打喷嚏和咽痛。流感会导致明显的疲乏感，因此需要卧床休息。</p>  ',
        id: 'cp1',
      },
      {
        name: '病因',
        content: '<h1><strong>病因</strong></h1> <hr /> <p> 流感患者咳嗽或者打喷嚏的时候，流感病毒就会从患者的呼吸道随着数以百万计的微小液滴，喷入周围的空气中。这些小液滴通常可以传播大约一米的范围。在降落在物体表面之前，它们一直悬浮在空气中，并且可以存活长达24小时。任何人如果吸入了这种含有病毒颗粒的空气，都可能被感染上流感。另一种途径是，手接触了被含病毒小液滴污染的物体表面，随后又用手接触了自己的鼻子和嘴巴。</p>  <p>		我们每天不管是在家里还是在公共场所，都很容易接触到流感病毒。这些病毒传播的媒介包括被污染的食物、门把手、遥控器、扶手、电话和电脑键盘等等。因此，经常洗手对于预防流感很重要。</p> <p>	同一类流感病毒也可能多次感染同一个人的。因为流感病毒经常在不断地发生变化，机体感染某种流感病毒痊愈后，对该病毒会有一定的免疫力，但对于新的变异了的病毒就没有免疫力了。</p>',
        id: 'cp2',
      },
      {
        name: '诊断',
        content:'<h1><strong>诊断</strong></h1>  <hr />  <p>根据病因、临床表现及实验室检查即可做出诊断。</p>  <p>病原学相关检查：主要包括病毒分离、病毒抗原、核酸和抗体检测。病毒分离为诊断本病的“金标准”；病毒的抗原和核酸检测可以用于早期诊断；抗体检测可以用于回顾性调查，但对病例的早期诊断意义不大。</p>  <h2><strong>1.</strong>病毒核酸检测</h2>  <p>以RT-PCR（最好采用real-timeRT-PCR）法检测呼吸道标本（咽拭子、鼻拭子、鼻咽或气管抽取物、痰）中的流感病毒核酸。病毒核酸检测的特异性和敏感性最好，且能快速区分病毒类型和亚型，一般能在4-6小时内获得结果。</p>  <h2><strong>2.</strong>病毒分离培养</h2>  <p>从呼吸道标本中分离出流感病毒。在流感流行季节，流感样病例快速抗原诊断和免疫荧光法检测阴性的患者建议也作病毒分离。</p>  <h2><strong>3.</strong>病毒抗原检测（快速诊断试剂检测）</h2>  <p>快速抗原检测方法可采用免疫荧光的方法，检测呼吸道标本（咽拭子、鼻拭子、鼻咽或气管抽取物中的黏膜上皮细胞），使用单克隆抗体来区分甲、乙型流感，一般可在数小时以内获得结果。其他还有胶体金试验，一般能在10～30分钟获得结果。对快速检测结果的解释应结合患者的流行病史和临床症状综合考虑：在非流行期，阳性筛查结果有可能是假阳性；在流行期，阴性的筛选检测结果可能是假阴性；这两种情况均应考虑使用RT-PCR或病毒分离培养作进一步确认。</p>  <h2><strong>4.</strong>血清学诊断</h2>  <p>检测流感病毒特异性IgM和IgG抗体水平。动态检测的IgG抗体水平恢复期比急性期有4倍或以上升高有回顾性诊断意义。</p>  <p> </p>',
        id: 'cp3',
      },
      {
        name: '临床表现',
        content:'<h1><strong>临床表现</strong></h1>  <hr/>  <p>一般表现为急性起病，前驱期有乏力症状，很快出现高热（可达39C-40℃C）、畏寒、寒战、头痛、全身肌肉关节酸痛等全身中毒症状，但患者可伴或不伴流鼻涕、咽喉痛、干咳等局部症状。病程大概4-7天，少数患者咳嗽可能持续数周之久。</p>  <h2><strong>轻型流感</strong></h2>  <p>发热仅为轻或中度发热，全身及呼吸道症状都较轻，2-3天内可自我恢复或痊愈。</p>  <p> </p>  <h2><strong>流感病毒性肺炎</strong></h2>  <p>肺炎型流感起病初与典型流感症状类似，但1-3天后病情迅速加重，出现高热、咳嗽、胸痛，严重者可出现呼吸衰竭及心、肝、肾等多器官衰竭，抗生素治疗无效。</p>  <p>这类流感多发生在老年人、婴幼儿、慢性病患者及免疫力低下者，在病程5-10天内发生呼吸循环衰竭，危及生命，治疗难度极大，死亡率较高。</p>  <li>  脑膜脑炎型，患者会出现意识障碍，头痛、呕吐、颈项强直等脑膜刺激征表现；</li>  <li> 心肌炎型和心包炎型，病毒侵袭到心脏的心肌或心包，可能出现胸闷、胸口痛等症状，化验提示心肌酶异常，心电图检查提示异常，严重者可出现心力衰竭；</li>  <li> 肌炎型，仅发生在儿童患者，出现有肌肉疼痛、压痛、肌无力，尿液呈茶色或深红色，化验显示血清肌酸激酶、肌红蛋白升高，这些都提示有横纹肌溶解。</li>  <p> </p>  <h2><strong>重症或危重症流感</strong></h2>  <p>在流感的症状识别及诊断过程中，重症或危重症流感的诊治非常重要。</p>  <h2><strong>出现以下情况之一者为重症病例：</strong></h2>  <li> 持续高热&gt;3天，伴有剧烈咳嗽，咳痰或胸痛；</li>  <li> 呼吸频率快，呼吸困难，口唇紫绀；</p>  <li> 神志改变：反应迟钝、嗜睡、躁动、惊厥等；</li>  <li> 严重呕吐、腹泻，出现脱水表现；</li>  <li> 合并肺炎；</li>  <li> 原有基础疾病明显加重。</li> <p> </p> <h2><strong>出现以下情况之一者为危重病例：</strong></h2>  <li> 呼吸衰竭；</li>  <li> 急性坏死性脑病；</li>  <li> 脓毒性休克；</li>  <li> 多脏器功能不全；</li>  <li> 出现其他需进行监护治疗的严重临床情况。</li>',
        id: 'cp4',
      },

      {
        name: '症状',
        content:'<h1>症状</h1>  <hr/>  <p>流感的潜伏期通常为1-3天，临床症状以高热、乏力、头痛、全身酸痛等全身中毒症状重、而呼吸道症状较轻为主要表现。</p>',
        id: 'cp5',
      },
      {
        name: '治疗方法',
        content:'<h1><strong>治疗方法</strong></h1>  <hr/>  <p>流感患者大多数为轻症病例，治疗可分为一般治疗、抗病毒治疗、中医治疗等方法，如果症状较为严重，建议及时到医院就诊，听从医生的建议进行相应的检查和治疗。</p>  <p>流感高危人群容易引发重症流感，尽早抗病毒治疗可减轻症状，减少并发症，缩短病程，降低病死率。</p>  <p><strong>对于符合下列标准1条或1条以上的情况，建议住院治疗：</strong></p>  <li> 妊娠中晚期及围产期妇女；</li>  <li> 基础疾病明显加重，如慢性阻塞性肺疾病、糖尿病、慢性心功能不全、慢性肾功能不全、肝硬化等；</li>  <li> 符合重症或危重流感诊断标准；</li>  <li> 伴有器官功能障碍。</li>',
        id: 'cp6',
      },
      {
        name: '预防',
        content:'<h2><strong>预防</strong></h2>  <hr/>  <p>如果感染了流感，完全可以通过正确的防范措施防止传染给他人：经常用温水和肥皂洗手；经常清洁电脑键盘、电话、门把手的表面；咳嗽或者打喷嚏的时候用纸巾遮住嘴巴和鼻子；将用过的纸巾及时扔进垃圾桶；患病期间减少和其他人不必要的接触（完全康复后再去上班或者上学）。对于感染流感后存在严重风险的人群，建议每年接种流感疫苗，来减少感染几率。</p>  ',
        id: 'cp7',

      },
      {
        name: '高危人群',
        content:'<h2><strong>高危人群</strong></h2>  <hr/>  <p>一般感染流感病毒数天后，机体就会出现不适症状。大概一周左右，多数症状就会逐渐缓解。但是完全康复还需要花更长的时间。</p>  <p>症状开始的时候传染性是最强的。这种传染性大概会持续3-7天。儿童和免疫力较弱的人的传染性可能会持续更长时间。绝大多数人最终都会完全康复，并且不遗留任何后遗症。但是有基础疾病的老年人的预后相对较差，可能会出现较严重的并发症，如肺部感染。</p>',
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
