const mongoose = require('mongoose')

const simNumberSchema = new mongoose.Schema({

  number:{
    type:String , required:true
  },operatorname:{
    type:String , required:true
  },ownership:{
    type:String , required:true
  },loc:{
    type:String , required:true
  }


})

module.exports = mongoose.model('simnumber' , simNumberSchema)