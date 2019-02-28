const mongoose = require('mongoose')
const { Schema } = mongoose

const catalogSchema = new Schema({
  language: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  status: {
    type: Number, // published (1), unpublished (0)
    default: 1
  },
  lastUpdated: { type: Date, default: Date.now },
  pictograms: {
    type: Number,
    required: true
  },
  variations: {
    type: Number,
    required: true
  },
  downloads: {
    type: Number,
    default: 1
  }
})

const Catalog = mongoose.model('Catalog', catalogSchema)

module.exports = Catalog
