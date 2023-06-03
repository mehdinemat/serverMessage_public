const mongoose = require('mongoose')

const simNumberSchema = new mongoose.Schema({

  number:{
    type:String , required:true
  },operatorname:{
    type:mongoose.Types.ObjectId , ref:'operatorname'
  },ownership:{
    type:mongoose.Types.ObjectId , ref:'ownership'
  },loc:{
    type:mongoose.Types.ObjectId , ref:'location'
  }


})

module.exports = mongoose.model('simnumber' , simNumberSchema)