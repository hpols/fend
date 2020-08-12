const dotenv = require('dotenv');
dotenv.config();
const meaningCloud = require('meaning-cloud')

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

/*adding*/
const bodyPaser = require('body-parser')
const cors = require('cors')

const app = express()
/*adding*/
app.use(cors())
app.use(bodyPaser.json()) //for json
app.use(bodyPaser.urlencoded()) { // for url-encoded values
	extended: true
}

app.use(express.static('dist'))

// Safely stored the API away from prying eyes and make available through getter
app.get('/getApi', function(req, res) {
	res.send(process.env.API_KEY);
})

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})