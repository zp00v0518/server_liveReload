const fs = require('fs')

function writeFile (pathToWrite, data, callback=function(){}){
	try {
		fs.writeFileSync(pathToWrite, data, 'base64')
		callback('ok')
		return 
	} catch (err) {
		console.log(err)
		callback("err")
		return
	}
}

module.exports = writeFile