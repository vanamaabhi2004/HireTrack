const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  rating: { type: String, enum: ['Strong Hire', 'Hire', 'No Hire'], default: 'No Hire' },
  selectionStatus: { type: String, enum: ['Selected', 'Rejected'], default: 'Rejected' },
  interviewStatus: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
  uniqueId: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Candidate', candidateSchema);