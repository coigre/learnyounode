const http = require('http')
const URL = require('url')

const server = http.createServer((req, res) => {
  let ret
  const isGet = req.method.toUpperCase() === 'GET'
  const urlObj = URL.parse(req.url, true)

  if (urlObj.pathname === '/api/parsetime') {
    const date = new Date(urlObj.query.iso)
    ret = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }
  } else if (urlObj.pathname === '/api/unixtime') {
    ret = {
      unixtime: (new Date(urlObj.query.iso)).getTime()
    }
  }
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(ret))
})

server.listen(process.argv[2])
