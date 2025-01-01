const express = require("express");
const router = express.Router();

const CandidateModel = require("../models/CandidateSchema");

router.post("/GRWallet", async (req, res) => {
  try {
    const { walletAddress, profilePick } = req.body;
    const saveCandidate = await CandidateModel.create({
      walletAddress: walletAddress,
      profilePick: profilePick,
    });
    console.log(saveCandidate);
    res.status(300).json(saveCandidate);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
