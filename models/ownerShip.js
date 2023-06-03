const mongoose = require('mongoose')

const ownerShipSchema = new mongoose.Schema({

  name: {
    type: String, required: true
  }

}, { timestamps: true })

module.exports = mongoose.model('ownership', ownerShipSchema)