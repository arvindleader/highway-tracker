const mongoose = require('mongoose');

const PotholeSchema = new mongoose.Schema({
  location: {
    lat: Number,
    lng: Number
  },
  description: String,
  reportedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Pothole', PotholeSchema);
