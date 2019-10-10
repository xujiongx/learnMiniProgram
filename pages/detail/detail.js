// pages/detail/detail.js
Page({

  data: {

  },

  onLoad: function (options) {
    console.log(options)
  },
  onUnload(){//页面退出
  //返回时，向上一界面传递数据

  //getCurrentPages当前所有活跃的页面
  const pages= getCurrentPages()
  // console.log(pages)

  const home=pages[pages.length-2]
  home.setData({
    title:'呵呵呵'
  })
  },
  handleBack(){
    wx.navigateBack({
    
    })
  }
})