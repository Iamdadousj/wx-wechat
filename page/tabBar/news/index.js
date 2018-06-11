Page({
  data: {
    mgsword:"这里是后续增加的页面，类目正在排列中。",
    list: [
      {
        id: 'api',
        name: '划拉拖拽导航',
        open: false,
        pages: [
          {
            zh: '拖拽导航',
            url: 'first/index'
          }
        ]
      }, {
        id: 'page',
        name: 'moda登陆授权',
        open: false,
        pages: [
          {
            zh: '登陆弹窗',
            url: 'login/index'
          }
        ]
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        if (list[i].url) {
          wx.navigateTo({
            url: '../../dstal/pages/' + list[i].url
          })
          return
        }
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
})
