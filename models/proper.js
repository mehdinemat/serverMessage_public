const mongoose = require('mongoose')

const properSchema = new mongoose.Schema({

    proper:{
     type:String , required:true
    }

})

module.exports = mongoose.model('proper' , properSchema)