const { penName, footerTitle } = require("../common/info");
module.exports = {
  // 页脚信息
  createYear: 2022, // 博客创建年份
  copyrightInfo:
    penName + ' | ' + footerTitle + '<br> <a href="https://blog.241314.xyz/" target="_blank">Shiki24のBlog</a>', // 博客版权信息，支持a标签
}