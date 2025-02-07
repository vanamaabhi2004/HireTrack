const express = require("express");
const {
  createCandidate,
  getAllCandidates,
  getCandidateById,
  updateCandidate,
  deleteCandidate,
  filterCandidates,
} = require("../controllers/candidateController");

const { protect } = require("../config/authMiddleware");
const router = express.Router();

router.post("/", protect, createCandidate);
router.get("/", protect, getAllCandidates);
router.get("/search", protect, filterCandidates);
router.get("/:id", protect, getCandidateById);
router.put("/:id", protect, updateCandidate);
router.delete("/:id", protect, deleteCandidate);

module.exports = router;
