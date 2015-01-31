var net = require('net')

function addZeros(i) {
  return (i < 10 ? '0' : "") + i
}

function time() {
  date = new Date()
    return date.getFullYear() + '-'
         + addZeros(date.getMonth() + 1) + '-'
         + addZeros(date.getDate()) + ' '
         + addZeros(date.getHours()) + ":"
         + addZeros(date.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(time() + '\n')
})

server.listen(Number(process.argv[2]))

