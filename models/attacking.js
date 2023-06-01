const mongoose = require('mongoose')

const attackingSchema = new mongoose.Schema({

  name:{
    type:String , required:true
  },
  sim:[{
    type:mongoose.Types.ObjectId , ref:'simnumber'
  }]

})

module.exports = mongoose.model('attacking' , attackingSchema)