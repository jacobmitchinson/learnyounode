var readFile = require('./challenge6')

var dir = process.argv[2]
var ext = process.argv[3]

readFile(dir, ext, function (err, list) {
  if (err)
    console.log("Sorry there's something wrong!", err)

  list.forEach(function(file) {
    console.log(file)
  })
})