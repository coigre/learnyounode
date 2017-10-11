import fs from 'fs'
import path from 'path'

const [,, p, ext] = process.argv

fs.readdir(p, function(err, data) {
  data.forEach((item)=> {
    if (path.extname(item) === '.' + ext) {
      console.log(item)
    }
  })
})
