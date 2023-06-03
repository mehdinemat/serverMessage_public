const mongoose = require('mongoose')

const numberSchema = new mongoose.Schema({

    name:{
      type:String , required:true
    }

},{timestamps:true})


module.exports = mongoose.model('number' , numberSchema)