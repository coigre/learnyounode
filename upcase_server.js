const http = require('http')

const server = http.createServer((req, res) => {
  let ret = ''
  const isPost = req.method.toUpperCase() === 'POST'
  req.addListener('data', (chunk)=> {
    if (isPost) {
      ret += chunk
    }
  })
  req.addListener('end', (chunk)=> {
    if (isPost) {
      res.end(ret.toUpperCase())
    }
  })
})

server.listen(process.argv[2])
