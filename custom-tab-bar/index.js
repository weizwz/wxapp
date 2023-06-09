// custom-tab-bar/index.js
const app = getApp();
Component({
  data: {
    active: 0,
    list: [{
        pagePath: "pages/home/home",
        text: "首页",
        icon: "home",
      },
      {
        pagePath: "pages/category/index",
        text: "分类",
        icon: "app",
      },
      {
        pagePath: "pages/user/index",
        text: "我的",
        icon: "user",
      }
    ]
  },
  methods: {
    onChange(e) { // 切换tab页面
      const idx = e.detail.value;
      this.setData({ active: idx });
      wx.switchTab({
        url: this.data.list[idx].pagePath.startsWith('/') ?
          this.data.list[idx].pagePath :
          `/${this.data.list[idx].pagePath}`,
      });
    },
    init() { // 设置tab的active下标（icon）
      const page = getCurrentPages().pop();
      const route = page ? page.route.split('?')[0] : '';
      const active = this.data.list.findIndex(
        (item) =>
        (item.pagePath.startsWith('/') ? item.pagePath.substr(1) : item.pagePath) ===
        `${route}`,
      );
      this.setData({ active });
    },
  }
})