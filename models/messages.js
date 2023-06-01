const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({

  content:{
    type:String , required:true
  },
  proper:{
    type:mongoose.Types.ObjectId , ref:'proper'
  }

})

module.exports = mongoose.model('messages' , messageSchema)
