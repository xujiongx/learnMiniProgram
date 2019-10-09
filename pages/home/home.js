import request from '../..//service/network.js'
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //网络请求
    //url,data,header,method,dataType,responseType,success,fail,complete
    // wx.request({
    //   url: 'http://www.liulongbin.top:3005/api/getnewslist',
    //   method :'get',
    //   success:(res)=>{
    //     console.log(res)}
    // })

    //自己封装的网络请求
    request({
      url:'http://www.liulongbin.top:3005/api/getnewslist',
    }).then(res=>console.log(res))
    .catch(err=>console.log(err))
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
  onShareAppMessage: function (options) {
    return{
      title:'江农二手书',
      path:'/pages/about/about',
      imageUrl:'http://www.pc354.com/xupl0ad/news/201601/2016011814071660722.jpg'
    }
  },


  handleShowToast(){
    //提示框
    wx.showToast({
      title: '你好',
      duration:1000,
      icon:'loading'
    })
  },
  handleShowModal(){
    //模态对话框
    wx.showModal({
      title: '🐖',
      content: '🐂丽是猪吗？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  //加载提示
  handleShowLoading(){
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      //必须手动调用
      wx.hideLoading()
    }, 2000)
  },

//显示操作菜单
  handleShowActionSheet(){
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
})