const express = require('express')
const router = express.Router()

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use('/api/products')



module.exports = router