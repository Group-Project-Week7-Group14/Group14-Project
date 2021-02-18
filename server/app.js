const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const router = require('./routers/router')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)
