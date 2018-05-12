const express = require('express')

const app = express()
const port = process.env.PORT || 3000
const router = express.Router()

app.use('/static', express.static(__dirname + '/dist/static'))

app.engine('.html', require('ejs').renderFile)

app.set('views', `${__dirname}/dist`)

router.get('*', (req, res, next) => {
  res.sendFile(`${__dirname}/dist/index.html`)
})

app.use('/', router)

app.listen(port)
console.log('app running on port', port)
