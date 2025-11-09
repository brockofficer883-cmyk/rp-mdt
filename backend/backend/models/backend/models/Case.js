const mongoose = require("mongoose");

const CaseSchema = new mongoose.Schema({
  title: { type: String, required: true },           // Case title
  description: { type: String, required: true },     // Detailed description of the case
  status: {
    type: String,
    enum: ["open", "in-progress", "closed"],
    default: "open"
  },                                                  // Current status of the case
  assignedTo: { type: String, default: "" },         // Officer assigned to the case
  createdBy: { type: String, required: true },       // Officer/admin who created the case
  suspects: { type: [String], default: [] },         // List of suspects involved
  dateCreated: { type: Date, default: Date.now },    // Date the case was created
  dateClosed: { type: Date }                         // Date the case was closed
});

module.exports = mongoose.model("Case", CaseSchema);
