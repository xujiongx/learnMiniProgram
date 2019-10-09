App({
    globalData:{
      token:'',
    },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 1.先从缓存里面取出token，
    const token=wx.getStorageSync('token')
    // 2,判断token是否有值
    if(token && token.length!==0){//已经有token，验证是否过期
      //验证token是否过期
     this.check_token(token)
    }else{
      this.login()
    }

  },
  login(){
    console.log('执行了登陆');

    //登陆
    wx.login({
      //code只有5分钟的有效期
      success: (res) => {
        // 1.获取code
        const code = res.code;

        //将code发送到服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            // 1.取出token
            const token = res.data.token;
            //  2.将token保存在grobalData.token 
            this.globalData.token = token;
            // 3.进行本地存储
            wx.setStorageSync('token', token)
          },
        })
      }
    })
  },
  check_token(token){
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'post',
      header:{
        token
      },
      success:(res)=>{
        if(!res.data.errCode){
          console.log('token有效')
            this.globalData.token=token;
        }else{
          this.login()
        }
      },
      fail:(err)=>console.log(err),

    })
  },


})
