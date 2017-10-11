import http from 'http'

const [,, url] = process.argv

http.get(url, function(response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
})