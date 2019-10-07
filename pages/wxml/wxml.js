// pages/wxml/wxml.js
Page({
  data: {
    message:'你好',
    nowtime:new Date().toLocaleString(),
  },
  onLoad(){
    //时间更新
    setInterval(()=>{
      this.setData({
        nowtime: new Date().toLocaleString(),
      })
    },1000)
  }
})