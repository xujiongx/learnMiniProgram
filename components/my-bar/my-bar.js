// components/my-bar/my-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onItemClick(e){
      const index=e.currentTarget.dataset.index;


      this.setData({
        currentIndex:index
      })
      this.triggerEvent('titleclick',{index,title:this.properties.title[index]},{})
    },
  }
})
