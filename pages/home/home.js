// pages/home/home.js
const imageCdn = '../../asset/image';
const swiperList = [
    `${imageCdn}/nav1.png`,
    `${imageCdn}/nav2.png`,
    `${imageCdn}/nav3.png`,
];

import { fetchHomeNav } from '../../services/home/home';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    banner: {
      current: 1,
      autoplay: true,
      duration: 500,
      interval: 5000,
      swiperList,
    },
    tabList: [],
  },
  methods: {
    onChange(e) {
      console.log(e.detail.value);
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.loadHomePage();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getTabBar().init();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  loadHomePage() {
    const that = this;
    fetchHomeNav().then((data) => {
      that.setData({
        tabList: data
      })
    })
  },
  // 选项卡
  onTabsChange(event) {
    // console.log(event.detail.value);
  }
})