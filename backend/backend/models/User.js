const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["civ", "gang", "police", "admin", "doj"],
    default: "civ",
  },
  department: { type: String, default: "" },
  callsign: { type: String, default: "" },
  r
