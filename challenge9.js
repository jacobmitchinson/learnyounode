var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function showResults() {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return "There was an error"

      results[index] = data.toString()
      count++

      if (count === 3)
        showResults()
    }))
  })
}

for (var x = 0; x < 3; x++)
    httpGet(x)

