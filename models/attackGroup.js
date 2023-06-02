const mongoose = require('mongoose')

const attackGroup = new mongoose.Schema({

    attacking:{
        type:mongoose.Types.ObjectId , ref:'attacking'
    },
    attacked:{
        type:mongoose.Types.ObjectId , ref:'attacked'
    },
    messagegroup:{
        type:mongoose.Types.ObjectId , ref:'messagegroup'
    },
    dateFrom:{
        type:String , required:true
    },
    dateTo:{
        type:String, required:true
    },hour:{
        type:String, required:true
    }

},{timestamps:true})

module.exports = mongoose.model('attackgroup' , attackGroup)