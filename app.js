//注册小程序实例

App({

  onLaunch: function () {
    // wx:wx.request({//发送网络请求
    //   url: '',
    //   data: '',
    //   header: {},
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: function(res) {},
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
    console.log('初始化完成')
    //获取用户信息
    wx.getUserInfo({
      success:function(res){
        console.log(res)
      }
    })


    //模拟异常
    setTimeout(()=>{
      const err=new Error()

      throw err  //抛出异常
    },3000)
  },

  onShow: function (options) {
    console.log('界面已经显示')
    //判断场景
    console.log(options)
    //判断小程序场景
    switch(options.scene){
      case 1001:
      break;
      case 1002:
      break;
    }

    //2.可以获取用户信息，传给服务器
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('界面被隐藏')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('脚本错误')
  },

  //保持全局变量
  globalData:{
    name:'globa',
    age:18,
  }

})
