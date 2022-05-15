// nav
const mrfpNav= require("../nav/mrfpNav");
const tradestudyNav= require("../nav/tradestudyNav");
module.exports = [
  {
    text: '首页', link: '/'
  },

  mrfpNav,  //每日复盘
  tradestudyNav,  //交易学习
  {
    text: '文件站', link: 'https://pan.241314.xyz/'
  },
]
