// components/my-even/my-even.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    today: new Date().getFullYear() + '-' + parseInt(new Date().getMonth() + 1) + '-' + new Date().getDate(),
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleIncount(){
      this.triggerEvent("incount",{today:this.data.today},{})//把方法传到page
    },
  }
})
