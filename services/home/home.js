import { config } from '../../config/index';

// 获取首页导航
function mockFetchHomeNav() {
  const { delay } = require('../_utils/delay');
  return delay().then(() => {
    return [
      { "key": 1, "name": "卡片列表" },
      { "key": 2, "name": "按钮组合" },
      { "key": 3, "name": "界面布局" },
      { "key": 4, "name": "图标集合" },
      { "key": 5, "name": "表单输入" }
    ]
  })
}

/** 获取首页数据 */
export function fetchHomeNav() {
  if (config.useMock) {
    return mockFetchHomeNav();
  }
  return new Promise((resolve) => {
    resolve('real api');
  });
}