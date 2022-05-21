// nav
const mrfpNav= require("../nav/mrfpNav");
const tradestudyNav= require("../nav/tradestudyNav");
const tradeupNav= require("../nav/tradeupNav");
const techNav= require("../nav/techNav");
const touNav= require("../nav/touNav");
const zjNav= require("../nav/zjNav");
const hgNav= require("../nav/hgNav");
const zlxxNav= require("../nav/zlxxNav");
module.exports = [
  {
    text: '首页', link: '/'
  },

  mrfpNav,  //每日复盘
  tradestudyNav,  //交易学习
  tradeupNav,  //交易进阶
  touNav,     //大师偷学
  zlxxNav,// 策略学习
  zjNav,     //政经学习
  hgNav,    //宏观分析
  techNav,  //技术开发
  {
    text: '文件站', link: 'https://pan.241314.xyz/'
  },
]
