var fs = require('fs')
var got = require('got')

var url = 'https://raw.github.com/atebits/Words/master/Words/en.txt'

got(url).then(res => {
  var words = res.body
    .trim()
    .split('\n')
    .filter(w => w.length === 4)

  fs.writeFileSync('words.txt', words.join('\n'))
}).catch(err => {
  console.error(err)
  process.exit(1)
})
