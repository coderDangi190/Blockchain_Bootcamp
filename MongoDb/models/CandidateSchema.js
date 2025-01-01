const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  walletAddress: {
    type: String,
    require: true,
  },
  profilePick: {
    type: String,
    require: true,
  },
});

const CandidateModel = mongoose.model("CandidateDetail", CandidateSchema);
module.exports = CandidateModel;
