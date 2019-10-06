//注册一个页面
Page({
  data: {
    name: 'Robut',
    age: 18,
    skill: [{
        id: '001',
        kname: 'rush',
        cd: '2s'
      },
      {
        id: '002',
        kname: 'eat',
        cd: '1s'
      },
      {
        id: '003',
        kname: 'breath',
        cd: '2.5s'
      },

    ],
    count:0,
  },
  handleBtnClick(){
    //改变数据无法像vue一样，而是要调用this.setData方法
    this.setData({
      count:this.data.count+1,
    })
  },
  handleBtnClick2() {
    //改变数据无法像vue一样，而是要调用this.setData方法
    this.setData({
      count: this.data.count - 1,
    })
  },
})
