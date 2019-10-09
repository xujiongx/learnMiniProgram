export default function request(options) {

  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      success:resolve,
      fail:reject
    })
  })


  // wx.request({
  //   url: options.url,
  //   method:options.method||'get',
  //   data:options.data||{},
  //   success(res){
  //     console.log(res)
  //   },
  //   fail(err){
  //     console.log(err)
  //   }
  // })
}