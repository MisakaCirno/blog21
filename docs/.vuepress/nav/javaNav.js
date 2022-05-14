// Java导航栏
module.exports = {
  text: 'Java', link: '/java/',  // 目录页链接，此处 link 是 vdoing 主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
  items: [
    {
      text: 'java基础',
      items: [
        { text: 'Java基础', link: '/javase/' },
      ]
    },
    {
      text: 'Java容器',
      items: [
        { text: 'JavaWeb', link: '/javaweb/concept/' },
      ]
    },

  ]
}