const http = require('http')
const fs = require('fs')
const app = http.createServer(handle)

function handle(req, res) {
  // 不知道为什么使用同步就是会发生一个错误，妈的
  // console.log(req.url)
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Content-type", "*")
  if(req.url === '/shaoyang') {
    fs.readFile('./shaoyang.json','utf-8', (err, data) => {
      if(err) {
        res.end(err)
      } else {
        res.end(data)
      }
    })
  } else if(req.url === '/shaoyang'){
  }
}
app.listen(8888)