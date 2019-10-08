// pages/home/home.js
Page({
  data: {
title:['鲁班七号','孙尚香','吕布',],

  },
  handleClick(){
    console.log('点击事件触发')
  },
  handleTouchStart(){
    console.log('触摸事件触发')
  },
  handelTouchMove(){
    console.log('触摸移动事件触发')
  },

  handEvenClick(event){
    console.log(event)
  },
  handleItemClick(event){
    // console.log(event)
    console.log(event.target.dataset.index, event.target.dataset.item)

  },
})