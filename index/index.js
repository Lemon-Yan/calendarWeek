const app = getApp()

Page({
  data: {

  },
  onLoad() {

  },
  mydata(e) { //可获取日历点击事件
    let data = e.detail.data
    console.log(data)
  },
})