var fs = require('fs')
var got = require('got')

var url = 'https://raw.github.com/dwyl/english-words/master/words_alpha.txt'

got(url).then(res => {
  var words = res.body
    .trim()
    .split('\n')
    .map((s) => s.trim())
    .filter(w => w.length === 4)

  fs.writeFileSync('words.txt', words.join('\n'))
}).catch(err => {
  console.error(err)
  process.exit(1)
})
