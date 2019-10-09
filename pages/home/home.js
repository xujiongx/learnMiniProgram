// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    today:'',
    title:'hahah',
    content:'jejejjejej',
    titlelist:['流行','新款','精选'],
  },
  handleIncrease(e){
    // console.log(e)
    this.setData({
      count:this.data.count+1,
      today:e.detail.today
    })
  },

  titleClick(e){
    console.log('点击了：',e.detail.index,e.detail.title)
  },

  addbtnClick(){ 
    //修改my-sel中的counter  this.selectComponent('')获得组件对象
    //直接进行修改
    const my_sel=this.selectComponent('#sel')
    // my_sel.setData({
    //   counter:my_sel.data.counter+1
    // })
    //调用方法进行修改
    my_sel.addCounter(10)
    console.log(my_sel)
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