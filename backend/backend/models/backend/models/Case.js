const mongoose = require("mongoose");

const CaseSchema = new mongoose.Schema({
  title: { type: String, required: true },           // Case title
  description: { type: String, required: true },     // Detailed description of the case
  status: {
    type: String,
    enum: ["open", "in-progress", "closed"],
    de
