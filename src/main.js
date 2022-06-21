// @ts-check

// Formattting: Prettier
// Linging: ESLint
// Type Checking: TypeScript


/* eslint-disable */

var numCounters = 0

function getCounter() {
	numCounters +=1

	var result = { count: count, total:0 }
	function count() {
		result.total +=1 }
	return result
}

var counterA = getCounter()
counterA.count()
counterA.count()

var counterB = getCounter()
counterB.count()

console.log(counterA.total, counterB.total, numCounters)








// var http = require('http')
// var server = http.createServer(function (req, res) {
//     res.statusCode = 200
//     res.end('Hello!')
// })

// var PORT = 4000
// server.listen(PORT, function () {

//     /* eslint-disable-next-line */
//         console.log('The server is listing at PORT: ', PORT)
//     })