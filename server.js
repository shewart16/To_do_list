const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const indexRouter = require('./routes/index')

const uri = 'mongodb+srv://pms:'+ process.env.PASSWORD +'@cluster0.jfgjt.mongodb.net/?retryWrites=true&w=majority'

try{
    mongoose.connect(uri, ()=> console.log('Mongodb connected'),
    )
}catch(e){
    console.log('could not conect')
}


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use('/', indexRouter)



app.listen(3000, () => {
    console.log('Service Running on Port 3000')
})
