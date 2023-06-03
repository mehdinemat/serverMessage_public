const mongoose = require('mongoose')

const operatorNameSchema = new mongoose.Schema({

  name: {
    type: String, required: true
  }

})

module.exports = mongoose.model('operatorname', operatorNameSchema)