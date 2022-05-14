// nav
const javaNav = require("../nav/javaNav");
const databaseNav = require("../nav/databaseNav");
const frameNav = require("../nav/frameNav");
const springNav = require("../nav/springNav")
const developer = require("../nav/developer");
// 微服务统一放在框架里
// const cloudNav = require("../nav/cloudNav");
const toolNav = require("../nav/toolNav");
const frontEnd = require("../nav/frontEnd");
const indexNav = require("../nav/indexNav");
const moreNav = require("../nav/moreNav");
module.exports = [
  {
    text: '首页', link: '/'
  },

  javaNav,   //Java导航
  databaseNav,  // 数据库导航
  frameNav,   // 框架导航
  springNav,  // Spring生态导航
  developer,
  // cloudNav,  // 微服务导航
  toolNav,  // 工具导航
  frontEnd,  // 前端导航
  moreNav,   // 更多导航
  indexNav,   //索引导航

]
