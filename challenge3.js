var fs = require('fs')

for(var i = 2; i < 3; i++)
  var file = process.argv[i]

var buf = fs.readFileSync(file);

var lines = buf.toString().split('\n');

console.log((lines.length - 1));



// Official solution
// var fs = require('fs')

//     var contents = fs.readFileSync(process.argv[2])
//     var lines = contents.toString().split('\n').length - 1
//     console.log(lines)