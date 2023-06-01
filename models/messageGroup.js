const mongoose = require('mongoose')

const messageGroupSchema = new mongoose.Schema({

    name:{
      type:String , required:true
    },
    messages:[{
      type:mongoose.Types.ObjectId , ref:'messages'
    }]

})

module.exports = mongoose.model('messagegroup' , messageGroupSchema)