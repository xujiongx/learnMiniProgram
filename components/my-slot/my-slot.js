// components/my-slot/my-slot.js
Component({
  /**
   * 1.组件的属性列表
   */
  properties: {

  },

  /**
   * 2.组件的初始数据
   */
  data: {

  },

  /**
   * 3.组件的方法列表
   */
  methods: {

  },

  // 4.定义组件的配置选项
  //multipleSolts在设置多插槽时需要设置为true
  options:{
    multipleSlots:true,
    styleIsolation:"shared",//样式共享方式

  },

  // 外界传给组件额外的样式
  externalClasses:[],

  // 可以监听内部数据的初始化数据
  observer:{
    counter:function(newVal){
    }
  },

  // 5.组件的生命周期
//监听页面的生命周期
  pageLifetimes:{
    show(){},
    hide(){},
    resize(){}
  },
//监听组件的生命周期
  lifetimes:{
    created(){},//创建
    attached(){},//添加
    ready(){},//渲染
    moved(){},//移动
    detached(){}//移除
  },
})
