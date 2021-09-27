const sidebar = require('../../utils/sidebar');

module.exports = {
  lang: 'zh-CN',
  title: 'Iconify',
  description: 'JavaScript高级程序设计 红宝书',
  base: '/iconify-book/dist/',
  dest: './dist',
  themeConfig: {
    sidebar,
    navbar: [
      {
        text: '博客',
        link: 'https://www.cnblogs.com/dshvv',
      },
      {
        text: '语雀',
        link: 'https://www.yuque.com/dingshaohua',
      },
      {
        text: '关于我',
        link: 'https://www.baidu.com/s?wd=甲乙丙丁少',
      }
    ]
  }
}