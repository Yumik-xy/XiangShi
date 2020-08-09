Page({
  data: {
    formats: {},
    readOnly: false,
    placeholder: '对问题进行补充说明，可以更快获得解答……',
    editorHeight: 720,
    keyboardHeight: 0,
    htmlcontent: '',
    content: '',
    isIOS: false
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
  coding: function (images) {
    if (images === null) return ""
    const fileSystemManager = wx.getFileSystemManager()
    const data = fileSystemManager.readFileSync(images, 'base64')
    return data
  },
  insertImage() {
    const that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        wx.request({
          url: 'http://127.0.0.1/api/uploadimg',
          data: {
            picture: that.coding(res.tempFilePaths[0])
          },
          header: { "content-type": "application/x-www-form-urlencoded" },
          method: 'POST',
          success: function (res) {
            console.log(res.data)
            that.editorCtx.insertImage({
              src: 'http://127.0.0.1/media/' + res.data.url,
              data: {
                id: 'abcd',
                role: 'god'
              },
              width: '40%',
              success: function () {
                console.log('insert image success')
              }
            })
          }
        })




      }
    })
  }
})