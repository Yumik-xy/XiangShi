Page({
  data: {
    formats: {},
    readOnly: false,
    placeholder: '对问题进行补充说明，可以更快获得解答……',
    editorHeight: 720,
    keyboardHeight: 0,
    htmlcontent: '',
    content: '',
    isIOS: false,
    tempimg: []
  },
  readOnlyChange() {
    this.setData({
      readOnly: !this.data.readOnly
    })
  },

  getEditorValue(e) {
    console.log(e);

    this.setData({
      htmlcontent: e.detail.html,
    })
    this.triggerEvent('htmlcontent', e.detail, {})
  },
  onLoad() {
    const platform = wx.getSystemInfoSync().platform
    const isIOS = platform === 'ios'
    this.setData({
      isIOS
    })
    const that = this
    this.updatePosition(0)
    let keyboardHeight = 0
    wx.onKeyboardHeightChange(res => {
      if (res.height === keyboardHeight) return
      const duration = res.height > 0 ? res.duration * 1000 : 0
      keyboardHeight = res.height
      setTimeout(() => {
        wx.pageScrollTo({
          scrollTop: 0,
          success() {
            that.updatePosition(keyboardHeight)
            that.editorCtx.scrollIntoView()
          }
        })
      }, duration)

    })
  },
  updatePosition(keyboardHeight) {
    const toolbarHeight = 50
    const {
      windowHeight,
      platform
    } = wx.getSystemInfoSync()
    let editorHeight = keyboardHeight > 0 ? (windowHeight - keyboardHeight - toolbarHeight) : windowHeight
    this.setData({
      editorHeight,
      keyboardHeight
    })
  },
  calNavigationBarAndStatusBar() {
    const systemInfo = wx.getSystemInfoSync()
    const {
      statusBarHeight,
      platform
    } = systemInfo
    const isIOS = platform === 'ios'
    const navigationBarHeight = isIOS ? 44 : 48
    return statusBarHeight + navigationBarHeight
  },
  onEditorReady() {
    const that = this
    that.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context
    }).exec()
  },
  blur() {
    this.editorCtx.blur()
  },
  format(e) {
    let {
      name,
      value
    } = e.target.dataset
    if (!name) return
    console.log('format', name, value)
    this.editorCtx.format(name, value)

  },
  onStatusChange(e) {
    const formats = e.detail
    this.setData({
      formats
    })
  },
  insertDivider() {
    this.editorCtx.insertDivider({
      success: function () {
        console.log('insert divider success')
      }
    })
  },
  clear() {
    this.editorCtx.clear({
      success: function (res) {
        console.log("clear success")
      }
    })
  },
  removeFormat() {
    this.editorCtx.removeFormat()
  },
  insertDate() {
    const date = new Date()
    const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    this.editorCtx.insertText({
      text: formatDate
    })
  },
  insertImage() {
    const that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        var tempFilesSize = res.tempFiles[0].size
        if (tempFilesSize <= 2000000) {   //图片小于或者等于2M时 可以执行获取图片
          wx.getImageInfo({
            src: res.tempFilePaths[0],
            success(res){
              var imageWidth = res.width
              var imageHeight = res.height
            }
          })
          that.editorCtx.insertImage({
            src: res.tempFilePaths[0],
            data: {
              id: 'abcd',
              role: 'god'
            },
            
            width: '80%',
            success: function () {
              console.log('insert image success')
            }
          })
        }
        else {
          wx.showToast({
            title: '上传图片不能大于2M!',  //标题
            icon: 'none' //图标 none不使用图标，详情看官方文档
          })
        } 
      }
    })
  }
})