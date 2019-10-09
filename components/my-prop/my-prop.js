// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    content:{
      type:String,
      value:'默认',
      observer:(newVal,oldVal)=>{
        console.log(newVal,oldVal)
      }
    }
  },

//传递样式
  externalClasses:['tcolor'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
