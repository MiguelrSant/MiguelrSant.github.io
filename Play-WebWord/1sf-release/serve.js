import express from 'express'
import http from 'http'

const app = express()
const serve = http.createServer(app)

app.use(express.static('public'))
serve.listen(5000, () => {
    console.log('> Serve listening on port: 5000')
})