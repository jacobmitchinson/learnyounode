var fs = require('fs')

var lines = null

function readContents(callback) {

  fs.readFile(process.argv[2], function doneReading(err, fileContents) {

    lines = fileContents.toString().split('\n').length - 1
    callback()

  })

}

function printLines() {

  console.log(lines)

}

readContents(printLines)


// Official solution
// var fs = require('fs')
//  var file = process.argv[2]

//  fs.readFile(file, function (err, contents) {
//    // fs.readFile(file, 'utf8', callback) can also be used
//    var lines = contents.toString().split('\n').length - 1
//    console.log(lines)
//  })