const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({

  name:{
    type:String , required:true
  },
  number:{
    type:String , required:true
  },
  attacked:[{
    type:mongoose.Types.ObjectId , ref:'attacked'
  }]

})

module.exports = mongoose.model('person' , personSchema)