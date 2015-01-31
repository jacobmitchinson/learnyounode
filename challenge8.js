var http = require('http')
var bl = require('bl')

var url = process.argv[2]

http.get(url, function callback (response) {
  response.pipe(bl(function (err, data) {
    console.log(data.toString().split("").length)
    console.log(data.toString())
  }))
})

// Official solution
// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })