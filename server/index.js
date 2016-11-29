import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'


const app = express()
const Server = http.createServer(app)
const port = 3000

app.use(express.static('public'))

Server.listen(port, () => console.log(`Server is running on port ${port}`))
