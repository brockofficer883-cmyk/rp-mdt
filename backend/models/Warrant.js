const mongoose = require("mongoose");

const WarrantSchema = new mongoose.Schema({
  suspectName: { type: String, required: true },   // Name of the person the warrant is for
  offense: { type: String, required: true },       // Crime/offense description
  issuedBy: { type: String, required: true },      // Officer/department who issued the warrant
  status: {
    type: String,
    enum: ["active", "served", "expired"],
    default: "active"
  },                                                // Warrant status
  dateIssued: { type: Date, default: Date.now },   // Date the warrant was issued
  dateServed: { type: Date }                       // Optional: Date the warrant was served
});

module.exports = mongoose.model("Warrant", WarrantSchema);
