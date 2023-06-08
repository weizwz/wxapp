import TabMenu from './data';
import { findChild } from '../utils/util';
Component({
  data: {
    active: TabMenu[0].value,
    list: TabMenu,
  },

  methods: {
    onChange(e) {
      const value = e.detail.value
      const item = findChild('value', value, this.data.list)
      // this.setData({ active: value });
      const curApp = this;
      console.log(value, curApp);
      wx.switchTab({
        url: item.url.startsWith('/')
          ? item.url
          : `/${item.url}`,
          success: () => {
            console.log(value, curApp);
            curApp.setData({ active: value });
          }
      });
    },

    init() {
      const page = getCurrentPages().pop();
      const route = page ? page.route.split('?')[0] : '';
      const idx = this.data.list.findIndex(
        (item) =>
          (item.url.startsWith('/') ? item.url.substr(1) : item.url) ===
          `${route}`,
      );
      const value = this.data.list[idx].value;
      this.setData({ active: value });
    },
  },
});
