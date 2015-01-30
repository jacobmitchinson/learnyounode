var fs  = require('fs')

var path = require('path')

var file = process.argv[2]

var ext = '.' + process.argv[3]

fs.readdir(file, function doneReading(err, list) {

  list.forEach( function(file) {

    if (path.extname(file) === ext) {

      console.log(file)

    }

  })

})

// Official solution
// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })