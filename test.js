var test = require('tape')
var fs = require('fs')
var m = require('.')

test(t => {
  t.plan(2)
  t.ok(m.length > 0)
  t.ok(fs.statSync(m).size > 1000)
})
