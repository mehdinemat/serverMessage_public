require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const messageRoute = require('./routes/messageRoute')
const attackRoute = require('./routes/attackRoute')

app.use(bodyParser.json())
app.use(cors())

app.use('/v1' , messageRoute)
app.use('/v1' ,attackRoute )


app.listen(9061 , ()=>{
  console.log('we on port 3000')
})

const URL = process.env.MONGO_URL

mongoose.set("strictQuery", false);
mongoose.connect(URL ,console.log('connected to mongo'))