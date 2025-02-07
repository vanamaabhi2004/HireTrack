const Candidate = require('../models/Candidate');

// Add a new candidate
exports.addCandidate = async (req, res) => {
  const { name, email, rating, selectionStatus, interviewStatus, uniqueId } = req.body;
  try {
    const candidate = new Candidate({ name, email, rating, selectionStatus, interviewStatus, uniqueId });
    await candidate.save();
    res.status(201).json({ message: 'Candidate added successfully.', candidate });
  } catch (err) {
    res.status(400).json({ message: 'Error adding candidate.', error: err.message });
  }
};

// Get all candidates
exports.getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching candidates.', error: err.message });
  }
};

// Update a candidate
exports.updateCandidate = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const candidate = await Candidate.findByIdAndUpdate(id, updateData, { new: true });
    if (!candidate) return res.status(404).json({ message: 'Candidate not found.' });
    res.json({ message: 'Candidate updated successfully.', candidate });
  } catch (err) {
    res.status(400).json({ message: 'Error updating candidate.', error: err.message });
  }
};

// Delete a candidate
exports.deleteCandidate = async (req, res) => {
  const { id } = req.params;
  try {
    const candidate = await Candidate.findByIdAndDelete(id);
    if (!candidate) return res.status(404).json({ message: 'Candidate not found.' });
    res.json({ message: 'Candidate deleted successfully.' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting candidate.', error: err.message });
  }
};