const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lineOnSave: true,
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', resolve('src'))
  // }
}