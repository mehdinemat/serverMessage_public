const mongoose = require('mongoose')

const attackedSchema = new mongoose.Schema({
  
  name:{
    type:String , required:true
  },
  persons:[{
    type:mongoose.Types.ObjectId , ref:'person'
  }]

})

module.exports = mongoose.model('attacked' , attackedSchema)